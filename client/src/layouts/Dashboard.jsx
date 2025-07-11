import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import Logo from "../assets/image/Logo.png";
import profile from "../assets/image/profile.png";
import Button from "../components/Button";
import Input from "../components/Input/Input";
import { Check } from "lucide-react";
import Card from "../components/Card/index";
import axios from "axios";


const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const { id } = useParams();
  // const [refreshTrigger, setRefreshTrigger] = useState(false);
  // const [userName, setUserName] = useState("");

  const handleMealCheck = async (mealType, isCompleted) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://healthtech-production.up.railway.app/api/progress/log-meal",
        {
          programId: id,
          dayNumber: dashboardData.dayNumber,
          mealType,
          completed: isCompleted ? 1 : 0,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        // Update UI lokal
        setDashboardData((prevData) => ({
          ...prevData,
          meals: {
            ...prevData.meals,
            [mealType]: {
              ...prevData.meals[mealType],
              completed: isCompleted ? 1 : 0,
            },
          },
        }));
      }

      // if (response.data.success) {

      // }

      if (response.data.success) {
        setTimeout(() => {
          fetchDashboardData();
        }, 500);
      }

      // alert(response.data.message);
      // console.log(response.data);
    } catch (error) {
      alert("Gagal memperbarui status makanan");
      console.error(error);
    }
  };

  const program7HariId = "397b9bed-6387-4d5b-83aa-093de91a0524";

  const renderComponentById = () => {
    if (id === program7HariId) {
      return (
        <div className="flex items-start justify-between flex-wrap mt-5">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <StepCircle
                step={step}
                isActive={currentStep === step.id}
                isCompleted={step.completed || currentStep > step.id}
              />

              {index < steps.length - 1 && (
                <ConnectorLine
                  isCompleted={step.completed || currentStep > step.id}
                  isNext={currentStep === step.id}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      );
    } else {
      return (
        <div className="grid grid-cols-5 gap-2 mt-5">
          {Array.from({ length: 30 }, (_, i) => i + 1).map((number) => (
            <div
              key={number}
              className="flex items-center justify-center h-12 w-12 bg-white rounded-lg text-black font-medium"
            >
              {number}
            </div>
          ))}
        </div>
      );
    }
  };

  const handleStepClick = (stepId) => {
    setCurrentStep(stepId);
  };

  const StepCircle = ({ step, isActive, isCompleted }) => (
    <div className="flex flex-col items-center relative mt-3">
      <div
        onClick={() => handleStepClick(step.id)}
        className={`
            w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold cursor-pointer transition-all duration-300 border-2
            ${
              isCompleted
                ? "bg-emerald-500 border-emerald-500 text-white"
                : isActive
                ? "bg-gray-700 border-emerald-500 text-emerald-400"
                : "bg-gray-800 border-gray-600 text-gray-400 hover:border-gray-500"
            }
          `}
      >
        {isCompleted ? <Check className="w-5 h-5" /> : step.id}
      </div>

      <span
        className={`
          mt-3 text-xs font-medium transition-colors duration-300
          ${isActive ? "text-emerald-400" : "text-gray-400"}
        `}
      >
        {step.label}
      </span>
    </div>
  );

  const ConnectorLine = ({ isCompleted, isNext }) => (
    <div className="flex-1 h-0.5 mx-4 mt-6 relative">
      <div className="absolute inset-0 bg-gray-700"></div>
      <div
        className={`
          absolute inset-0 transition-all duration-500 
          ${
            isCompleted
              ? "bg-emerald-500"
              : isNext
              ? "bg-gradient-to-r from-emerald-500 to-gray-700"
              : "bg-gray-700"
          }
        `}
      ></div>
    </div>
  );

  const fetchDashboardData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://healthtech-production.up.railway.app/api/dashboard/today",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setDashboardData(response.data.data);
      setCurrentStep(response.data.data.dayNumber); // Set current step berdasarkan dayNumber dari API
      // console.log(response.data.data);
    } catch (err) {
      setError("data gagal di ambil");
      setDashboardData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // const stored = localStorage.getItem("user");
    // if (stored) {
    //   const user = JSON.parse(stored);
    //   setUserName(user.name); // hanya nama depan
    // }
    //  console.log("refreshTrigger:", refreshTrigger);

    fetchDashboardData();
  }, []);

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  }

  if (loading) {
    return <div className="text-center py-10">Loading dashboard data...</div>;
  }

  const steps = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    completed: i + 1 < dashboardData.dayNumber,
    label: `Day ${i + 1}`,
  }));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("first_name");
    navigate("/login");
  };

  const nama = localStorage.getItem("first_name");

  return (
    <div className="">
      {/* navbar */}
      <div className="px-[100px] py-[10px] bg-black">
        <nav className="w-full flex justify-between items-center">
          <img src={Logo} alt="" width={50} />

          <Link to="/register">
            <Button
              onClick={() => handleLogout()}
              className="bg-red-700 text-white px-5 py-2 rounded-full font-bold hover:bg-yellow-600"
            >
              Logout
            </Button>
          </Link>
        </nav>
      </div>

      <div className=" bg-gray-200">
        <div className="flex flex-col md:flex-row gap-6">
          {/* sidebar */}
          <div className="max-h-screen overflow-y-auto overflow-x-hidden w-[650px]">
            <div className="bg-[#003237] text-white p-[42px] shadow-md h-[409px]">
              <h3 className="text-lg font-bold">{dashboardData.programName}</h3>
              <img src={profile} alt="" className="mt-2" width={120} />
              <div className="mt-5">
                <h1 className="font-bold text-[20px]">Hai {nama}!</h1>
                <p className="text-sm">
                  Ayo ikutin program untuk mencapai tujuan mu
                </p>
              </div>
            </div>

            <div
              className="bg-gradient-to-b from-[#42887E] to-[#003237]"
              // style={{ backgroundImage: `url(${bgJadwal})` }}
            >
              <div className="flex flex-col items-start justify-center h-full text-white pt-9  p-[40px]">
                <h3 className="text-lg font-bold">Hari Ke-1</h3>
                <p className="text-sm ">Jadwal makan hari ini</p>
                {renderComponentById()}
              </div>
            </div>
          </div>

          {/* Isi halaman */}
          <ProgressCard
            className="mt-3"
            title="Progres Kalori Harian"
            progress={dashboardData.consumedCalories}
            target={dashboardData.targetCalories}
          ></ProgressCard>

          <div className="">
            <div className="flex flex-col md:flex-row flex-wrap gap-6 mt-6">
              {Object.entries(dashboardData.meals).map(
                ([mealType, mealData]) => (
                  <Card
                    key={mealType}
                    title={mealType.charAt(0).toUpperCase() + mealType.slice(1)}
                    time={getMealTime(mealType)}
                    content={mealData.name}
                    buttonText="Lihat Resep"
                    checked={mealData.completed === 1}
                    onChange={(e) =>
                      handleMealCheck(mealType, e.target.checked)
                    }
                    recipeId={mealData.recipe_id}
                  />
                )
              )}

              <div className="w-[300px] h-[138px] bg-[#404040] rounded-xl text-white p-5">
                <h1 className="font-bold">TIPS HARI INI!!!</h1>
                <p>
                  “Jalan kaki ringan selama 15 menit setelah makan bisa bantu
                  pencernaanmu, lho!.....”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

function getMealTime(mealType) {
  switch (mealType) {
    case "breakfast":
      return "07:00 - 09:00";
    case "lunch":
      return "12:00 - 14:00";
    case "dinner":
      return "18:00 - 20:00";
    default:
      return "";
  }
}

const ProgressCard = ({ title, progress, target, className }) => (
  <div
    className={`bg-gradient-to-b from-[#003237] to-[#42887E] text-white p-8 rounded-3xl shadow-md ${className} h-[637px]`}
  >
    <h3 className="text-lg font-bold text-center">{title}</h3>
    <div className="relative w-[250px] h-[250px] mx-auto mt-4">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#42887E"
          strokeWidth="13"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#facc15"
          strokeWidth="13"
          strokeDasharray={`${(progress / target) * 251.2} 251.2`}
          transform="rotate(-90 50 50)"
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-2xl font-bold">
          {progress}/{target} kalori
        </p>
        {/* <p className="text-sm font-bold">/</p> */}
      </div>
    </div>

    <div className="mt-8 flex flex-col gap-4">
      <div className="flex items-start justify-center gap-5">
        <div className="h-[23px] mt-1.5 w-[23px] bg-[#FFC107]"></div>
        <p className="w-[200px]">Kalori yang sudah kamu konsumsi hari ini.</p>
      </div>

      <div className="flex items-start justify-center gap-5">
        <div className="mt-1.5 h-[23px] w-[23px] bg-[#42887E]"></div>
        <p className="w-[200px]">
          Sisa kalori yang masih bisa kamu konsumsi agar tetap dalam target
          harian.
        </p>
      </div>

      <div className="flex items-start justify-center gap-5">
        <h1 className="mt-1.5 font-bold w-[23px] text-[10px]">
          0/{target} kalori
        </h1>
        <p className="w-[200px]">
          Sisa kalori yang masih bisa kamu konsumsi agar tetap dalam target
          harian.
        </p>
      </div>
    </div>
  </div>
);
