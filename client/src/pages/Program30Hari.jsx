import React from "react";
import Program from "../layouts/Program";
import image from "../assets/image/imageProgram30Hari.png"

const Program30Hari = () => {
  return (
    <Program image={image}
      info={
        <>
          {" "}
          <h3 className="font-bold text-white">Siap mulai hidup sehat?</h3>
          <p className="text-white">
           Yuk, ubah pola makanmu hari ini. Cukup 1 langkah kecil bareng Nutriplan hasilnya bisa kamu rasakan selamanya.
          </p>
        </>
      }
    >

      <h3 className="font-semibold text-2xl mt-[30px]">
        Program 30 Hari Turun Berat Badan
      </h3>
      <p className="w-[500px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odit
        laudantium voluptatem dolorum, vel, id aliquam, dignissimos provident ea
        omnis nesciunt culpa ratione iure in quidem saepe totam officia.
        Dolorum?
      </p>
    </Program>
  );
};

export default Program30Hari;
