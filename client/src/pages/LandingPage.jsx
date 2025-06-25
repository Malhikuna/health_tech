import React from "react";
import bgImage from "../assets/image/bgHome.png";
import sayur from "../assets/image/sayur.png";
import ayamSayur from "../assets/image/ayamSayur.png";
import cleanEat from "../assets/image/cleanEat.png";
import olahraga from "../assets/image/Olahraga.png";
import tumbuhan from "../assets/image/tumbuhanSec4.png";
import laptop from "../assets/image/mockup.png";

export default function LandingPage() {
  return (
    <div className="">
      <div
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat rounded-b-3xl "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute bottom-0 right-0 bg-white h-[70px] w-[250px] rounded-br-[20px] rounded-tl-[20px] flex items-center justify-center">
          <button className="border border-2 border-green-700 px-[35px] py-[10px] rounded-[20px] text-green-700 font-bold">
            MULAI PROGRAM
          </button>
        </div>

        <div className="px-[100px] py-[20px]">
          <nav className="w-full flex justify-between items-center">
            <div className="text-white text-2xl font-bold">LOGO</div>
            <ul className="flex space-x-6 text-white">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tentang Kami
                </a>
              </li>
            </ul>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600">
              Sign In
            </button>
          </nav>
        </div>

        <div className="flex px-[100px] py-[20px] justify-between items-center">
          <div className="">
            <h1 className="font-cinzel text-white text-8xl font-bold">
              NUTRIPLAN
            </h1>
            <p className="text-white w-[500px] mt-[10px]">
              "Setiap langkah kecil menuju piring yang lebih sehat adalah
              langkah besar untuk masa depan yang lebih baik."
            </p>
            <div className="border w-[300px] mt-[40px] rounded-2xl bg-white/50 p-[15px]">
              <h2 className="text-white text-4xl font-bold">News</h2>
              <p className="text-white">
                Pada saat ini, angka orang kekurangan gizi mencapai 21 jiwa
              </p>
            </div>
          </div>

          <img src={sayur} alt="" className="w-[400px]" />
        </div>
      </div>
      // section 2
      <div className=" mx-[50px] border bg-[#003732] rounded-3xl mt-[50px] flex items-center h-[300px]">
        <div className="flex-1  p-[25px]">
          <h3 className="text-white text-4xl font-bold">Apa itu nutriplan?</h3>
          <p className="text-white text-xl mt-[10px]">
            Nutriplan adalah platform perencanaan makan yang menawarkan program
            harian bergizi, praktis, dan terjangkau. Dirancang untuk masyarakat
            Indonesia, kami bantu wujudkan hidup sehat lewat menu berbahan lokal
            tanpa ribet
          </p>
        </div>

        <div className="flex-1 relative">
          <img src={ayamSayur} alt="" className="absolute bottom-[-150px]" />
        </div>
      </div>
      // section 3
      <div className="h-[500px] mx-[50px] mt-[20px]">
        <h1 className="font-bold text-4xl">Program</h1>

        <div div className="flex justify-between gap-10 mt-[30px]">
          <div
            className="border w-[500px] h-[441px] flex-1 rounded-3xl bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${cleanEat})` }}
          >
            <div className="bg-black/50 h-full rounded-3xl flex flex-col items-center justify-center">
              <h2 className="text-white font-bold text-4xl">Clean Eating</h2>
              <p className="text-white text-2xl">
                Tantangan 7 Hari Makan Berish
              </p>
            </div>
          </div>

          <div
            className="border w-[500px] h-[441px] flex-1 rounded-3xl bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${olahraga})` }}
          >
            <div className="bg-black/50 h-full rounded-3xl flex items-center justify-center">
              <button className="bg-[#003732] py-3 px-5 rounded-lg text-white font-bold">
                Lihat Program
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[50px] bg-[#003732] mt-[50px] rounded-3xl flex h-[499px]">
        <div className="">
          <img src={tumbuhan} alt="" className="mr-[40px] w-[46vh]" />
        </div>

        <div className="text-white flex flex-col mt-[90px] gap-5">
          <h2 className="font-bold text-6xl">AYO HIDUP SEHAT</h2>
          <p className="mt-[10px] w-[700px] text-2xl">
            Ikuti program Nutriplan dan mulai gaya hidup sehat dengan cara yang
            mudah, hemat, dan menyenangkan. Dapatkan rencana makan harian
            bergizi, resep praktis berbahan lokal, dan panduan sehat tanpa
            ribet. Cocok untuk semua keluarga Indonesia.
          </p>
        </div>
      </div>
      <div className="mx-[50px] bg-[#003732] mt-[50px] rounded-3xl flex h-[499px]">
        <div className="text-white flex flex-col mt-[50px] gap-5 p-[55px]">
          <h2 className="font-bold text-6xl">TANTANG KAMI</h2>
          <p className="mt-[10px] w-[700px] text-2xl">
            Kami percaya hidup sehat itu hak semua orang. Nutriplan hadir untuk
            menjawab tantangan hidup sehat yang sering dianggap mahal dan rumit.
            Kami merancang program makan yang mudah diakses, berbasis lokal, dan
            ramah untuk semua kalangan masyarakat Indonesia.
          </p>
        </div>

        <div className="">
          <img src={laptop} alt="" className="w-[80%]" />
        </div>
      </div>
      <div className="mx-[50px] bg-[#003732] mt-[50px] rounded-3xl flex h-[499px]">
        <h1 className="text-white">Kontak kami</h1>
      </div>
    </div>
  );
}
