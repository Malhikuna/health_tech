import React from "react";
import { Camera } from "lucide-react";
import Button from "../Button";
import Input from "../Input/Input";
import { Link } from "react-router";

const index = (props) => {
  const { title, time, content, buttonText, checked, onChange, recipeId } =
    props;
  return (
    <div className="bg-teal-800 text-white p-4 rounded-3xl shadow-md w-[300px] max-h-[298.5px]">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm">{time}</p>
      <p className="mt-2">{content}</p>
      <div className="flex justify-between items-center mt-[95px]">
        <Camera width={50} height={40} className="" />

        <div className="flex gap-3">
          {/* <Input type="checkbox"></Input> */}
          <Input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="w-6"
          />
          <Link to={`/resep/${recipeId}`}>
            <Button className="bg-white text-teal-800 px-4 py-2 hover:bg-gray-200 rounded-full">
              <p className="text-black"> {buttonText}</p>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;
