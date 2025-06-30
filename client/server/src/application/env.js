import {config} from "dotenv";
import process from "node:process";

config({path: '.env'});

export const {
  JWT_SECRET, JWT_EXPIRES_IN,
} = process.env;