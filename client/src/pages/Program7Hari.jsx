import React from "react";
import Program from "../layouts/Program";
import image from "../assets/image/imgProgram7Hari.png";

const Program7Hari = () => {
  return (
    <Program
      image={image}
      info={
        <>
          {" "}
          <h3 className="font-bold text-white">Hidup sehat mulai dari sini!</h3>
          <p className="text-white">
            Ikuti program harian yang dirancang khusus untuk membentukkebiasaan
            sehat secara konsisten dan menyenangkan.
          </p>
        </>
      }
    >
      <h3 className="font-semibold text-2xl mt-[30px]">
        Tantangan 7 Hari Makan Bersih (Clean Eating)
      </h3>
      <p className="w-[500px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae orci
        a diam luctus convallis. Pellentesque habitant morbi tristique senectus
        et netus et malesuada fames ac turpis egestas. Vivamus rutrum arcu a
        tellus vulputate, sed sagittis odio bibendum. Nulla facilisi. Duis
        porttitor eros vel magna aliquet, et vestibulum justo fermentum. Integer
        at sem ac nulla hendrerit congue. Aenean nec turpis nec augue tincidunt
        fermentum sed vel elit. Etiam non quam.
      </p>
    </Program>
  );
};

export default Program7Hari;
