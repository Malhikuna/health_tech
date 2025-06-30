import React, { useEffect, useState } from "react";
import nasi from "../assets/image/nasiGoreng.png";
import logo from "../assets/image/Logo.png";
import { Clock, Download, MoveLeft } from "lucide-react";
import Button from "../components/Button";
import { Link, useNavigate, useParams } from "react-router";
import axios from "axios";

const ResepPage = () => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { recipeId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `https://healthtech-production.up.railway.app/api/recipe/${recipeId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setRecipe(response.data.data);
        // console.log(response.data.data);
      } catch (err) {
        setError(err.response?.data?.message || "resep tidak ditemukan");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  if (loading) return <div>Loading recipe...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div className="">
      <div
        className="relative w-full h-[516px] bg-cover bg-center bg-no-repeat m-0 p-0"
        style={{ backgroundImage: `url(${nasi})` }}
      >
        {/* Icon MoveLeft di pojok kiri atas */}=
        <Button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-6 bg-[#003237] px-8 py-3 rounded-full text-white z-50"
        >
          <MoveLeft size={24} />
        </Button>
        {/* Logo di tengah layar */}
        <div className="absolute inset-0 flex justify-center items-center">
          <img src={logo} alt="Logo" width={95} />
        </div>
        <div className="absolute bottom-4 left-6">
          <h1 className="font-bold text-5xl text-white">{recipe.name}</h1>
          <div className="flex text-white gap-3 mt-5 font-semibold">
            <Clock />
            <p>{recipe.cookingTimeMinutes} menit</p>
          </div>
        </div>
      </div>

      <div className=" mx-[30px] mt-[30px]">
        <div className="flex gap-5">
          <div className="flex-shrink-0">
            {" "}
            {/* Div pertama fixed width */}
            <h1 className="text-center font-bold text-3xl mb-2">Resep</h1>
            <div className="w-[579px] px-[50px] py-[30px] rounded-2xl bg-[#003732] text-white">
              <ul className="list-disc pl-5 space-y-2 text-[20px]">
                {recipe.ingredients.map((item, index) => (
                  <li key={index}>
                    {item.name} {item.quantity} {item.unit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-grow">
            {" "}
            {/* Div kedua akan mengisi sisa space */}
            <h1 className="text-center font-bold text-3xl mb-2">
              Cara Membuat
            </h1>
            <div className="w-full flex flex-col gap-3 p-8 rounded-2xl bg-[#808080] text-white">
              {" "}
              {recipe.instructions &&
                recipe.instructions.split(/<br\s*\/?>/).map((step, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-5 shadow-lg border-l-8 border-[#003732] mb-4"
                  >
                    <p className="text-gray-800 font-medium text-lg">
                      {step.trim()}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center mt-5 mb-9 ">
          <Button className="flex gap-2 rounded-full px-6 py-4">
            <Download />
            <p>DOWNLOAD RESEP</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResepPage;
