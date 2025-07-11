import jwt from "jsonwebtoken";
import {JWT_SECRET} from "../application/env.js";
import {prismaClient} from "../application/database.js";
import {logger} from "../application/logging.js";

const authorize = async (req, res, next) => {
  try {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) return res.status(401).json({message: 'Unauthorized'});

    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await prismaClient.user.findUnique({
      where: {
        id: decoded.userId,
      }
    });

    if (!user) return res.status(401).json({message: 'Unauthorized'});

    req.user = user;

    next();
  } catch (error) {
    res.status(400).json({message: 'Unauthorized', error: error.message});
  }
}

export default authorize;