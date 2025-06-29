import React, { Children } from "react";
import Button from "../components/Button";
import { MoveLeft } from "lucide-react";
import { Link } from "react-router";

const Program = (props) => {
  const { info, children, image, tombol } = props;
  return (
    <div className="flex p-[30px] gap-[60px]">
      <div className="">
        <div
          className="relative w-[676.5px] h-[441.5px] bg-contain bg-center bg-no-repeat rounded-b-3xl"
          style={{ backgroundImage: `url(${image})` }}
        >
          <Button className="">
            <Link to="/">
              {" "}
              <MoveLeft width={60} height={30} />
            </Link>
          </Button>
          {tombol}
        </div>
        <div className="w-[678px] h-[167px] rounded-lg mt-[30px] bg-gradient-to-r from-[#003237] to-[#42887E] flex flex-col items-center justify-center">
          <div className="w-full p-9">{info}</div>
        </div>
      </div>

      <div className="min-w-[670px] h-[639px] bg-[#EAEAEA] rounded-lg p-8">
        <h1
          className="text-7xl font-bold text-transparent w-[400px]"
          style={{
            WebkitTextStroke: "1px black",
          }}
        >
          Nutriplan Program
        </h1>
        {children}
      </div>
    </div>
  );
};

export default Program;
