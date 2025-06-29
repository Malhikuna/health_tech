import React, { useEffect, useState } from "react";
import bgImage from "../assets/image/bgHome.png";
import sayur from "../assets/image/sayur.png";
import ayamSayur from "../assets/image/ayamSayur.png";
import cleanEat from "../assets/image/cleanEat.png";
import tumbuhan from "../assets/image/tumbuhanSec4.png";
import laptop from "../assets/image/mockup.png";
import Button from "../components/Button/index";
import Input from "../components/Input/Input";
import kontakImage from "../assets/image/kontakImage.png";
import { BookUser, Mail, MapPin } from "lucide-react";
import { Link } from "react-router";
import axios from "axios";

export default function LandingPage() {
  const [programs, setPrograms] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/program")
      .then((response) => {
        setPrograms(response.data.data); // Data langsung tersedia di response.data
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // true jika token ada
  }, []);

  return (
    <div className="">
      <div
        className="relative w-full h-[734.7px] bg-cover object-contain bg-center bg-no-repeat rounded-b-3xl"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <button className="absolute bottom-0 right-0 text-2xl border-4 border-[#003732] px-[70px] py-[20px] rounded-full text-[#003732] font-bold">
          MULAI PROGRAM
        </button>

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
            {!isLoggedIn && (
              <Link to="/register">
                <button className="bg-yellow-500 text-white px-5 py-2 rounded-full font-bold hover:bg-yellow-600">
                  Sign In
                </button>
              </Link>
            )}
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

      <div className="mx-[50px] mt-[20px]">
        <h1 className="font-bold text-4xl">Program</h1>

        <div div className="flex justify-between gap-10 mt-[30px]">
          {programs.map((program) => (
            <div
              key={program.id}
              className="border w-[500px] h-[441px] flex-1 bg-cover bg-center bg-no-repeat relative bg-gray-200 rounded-3xl overflow-hidden group"
              style={{ backgroundImage: `url(${cleanEat})` }}
            >
              <div className="bg-black/50 h-full rounded-3xl flex flex-col items-center justify-center p-9">
                <h2 className="text-white font-bold text-3xl text-center">
                  {program.name}
                </h2>
                {/* <p className="text-white text-2xl">{program.description}</p> */}
              </div>

              <div
                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 
                      flex items-center justify-center 
                      transition-all duration-300 ease-in-out 
                      transform translate-y-full group-hover:translate-y-0"
              >
                <Link to={`/program/${program.id}`}>
                  <Button
                    className="px-5 py-4 bg-[#003732] rounded-lg font-bold text-2xl
                          opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    Lihat Program
                  </Button>
                </Link>
              </div>
            </div>
          ))}
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
      <div className="mx-[50px] bg-[#003732] mt-[50px] rounded-3xl flex">
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
      <div className="mx-[50px] mt-[30px]">
        <h1 className="font-bold text-4xl">Kontak Kami</h1>

        <div className="">
          <div className="gap-5 flex mt-[20px]">
            <div className="space-y-4 w-2/3">
              <div className="gap-3 flex">
                <Input className="w-1/2 placeholder-white" placeholder="Nama" />
                <Input
                  className="w-1/2 placeholder-white"
                  placeholder="No Telephone"
                />
              </div>

              <Input
                className="w-full placeholder-white"
                placeholder="Email"
                type="email"
              />
              <textarea
                placeholder="Pesan"
                className="w-full h-[200px] p-2 bg-[#42887E] text-white placeholder-white rounded-3xl font-bold"
              ></textarea>
            </div>

            <div
              className="p-4 rounded-lg w-1/3 bg-center bg-no-repeat bg-contain flex items-center justify-center text-start"
              style={{ backgroundImage: `url(${kontakImage})` }}
            >
              <p className="text-white font-bold w-[300px]">
                "Kami siap membantu mewujudkan pola makan yang sehat dan sesuai
                dengan kebutuhan serta selera kamu. Konsultasi, menu sehat,
                hingga solusi praktis—semua ada di sini."
              </p>
            </div>
          </div>
          <Button className="px-7 font-bold bg-black mt-2">Konfirmasi</Button>
        </div>

        <div className="mt-[50px] flex gap-5 justify-between">
          <Button className="p-7 w-full rounded-3xl">
            <div className="flex gap-4">
              <BookUser></BookUser>
              <p className="font-bold">(+62) 83801253957</p>
            </div>
          </Button>

          <Button className="p-7 w-full rounded-3xl">
            <div className="flex gap-4">
              <Mail></Mail>
              <p className="font-bold">nutriplan@gmail.com</p>
            </div>
          </Button>

          <Button className="p-7 w-full rounded-3xl">
            <div className="flex gap-4">
              <MapPin></MapPin>
              <p className="font-bold">
                Jalan Dr.Setiabudhi No.193 (Kampus IV)
              </p>
            </div>
          </Button>
        </div>
      </div>

      <footer className="bg-[#171717] text-white p-4 mt-[100px]">
        <div className="mx-[50px] flex justify-between items-center flex-wrap mt-[30px]">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0 space-y-3">
            <h3 className="text-xl font-bold">
              LOGO <span className="font-normal">NutriPlan</span>
            </h3>
            <p className="text-sm">
              Nutriplan adalah platform perencanaan makan yang dirancang untuk
              membantu masyarakat Indonesia hidup sehat dengan cara yang mudah,
              terjangkau, dan menyenangkan. Kami menyediakan program makan
              harian bergizi dengan resep berbahan lokal yang praktis dan hemat.
            </p>
          </div>
          <div className="w-full md:w-1/3 text-start mb-4 md:mb-0 space-y-2">
            <h4 className="text-lg font-semibold">Kontak Kami</h4>
            <p className="text-sm">+62 83801253957</p>
            <p className="text-sm">bytebroccoli@gmail.com</p>
            <p className="text-sm">Jalan Dr. Setiabudi No. 193 (Kampus IV)</p>
          </div>
          <div className="w-full md:w-1/5 text-start space-y-2">
            <h4 className="text-lg font-semibold">Home</h4>
            <p className="text-sm">Program</p>
            <p className="text-sm">Tentang Kami</p>
          </div>
        </div>
        <div className="text-center mt-[40px]">
          <p className="p-4">© 2025 Nutriplan · Powered by Tim HMTIF C</p>
        </div>
      </footer>
    </div>
  );
}
