import { useState } from "react";
import { loginUser } from "../services/authService";
import { Link, useNavigate } from "react-router";
import bgLogin from "../assets/image/bgLogin.png";
import imgLogin from "../assets/image/imgLogin.png";
import Button from "../components/Button";
import InputForm from "../components/Input";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginUser(formData);
    if (res.success) {
      setMessage(res.message);
      localStorage.setItem("token", res.data.token); // Simpan token
      navigate("/");
    } else {
      setError(res.errors);
      setMessage("");
    }
  };

  return (
    <div
      className=" w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgLogin})` }}
    >
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[839px] h-[537px] bg-[#003237] rounded-[30px] relative flex">
          <img
            src={imgLogin}
            alt=""
            className=" w-[55%] absolute bottom-[-33px]"
          />
          <div className="absolute left-1/2 top-[10%] w-1/2 p-9">
            <h1 className="text-white font-bold text-5xl font-cinzel text-center mb-3">
              Login
            </h1>
            <form onSubmit={handleSubmit} action="">
              <InputForm
                label="Email"
                type="email"
                placeholder=""
                name="email"
                classNameInput="w-full bg-white text-black "
                onChange={handleChange}
              />

              <InputForm
                label="Password"
                type="password"
                placeholder=""
                name="password"
                classNameInput="w-full bg-white text-black"
                onChange={handleChange}
              />

              <div className="flex flex-col justify-center items-center mt-6">
                <Button
                  type="submit"
                  className="bg-[#42887E] font-bold px-[55px]"
                >
                  SUBMIT
                </Button>
                <p className="font-bold text-white mt-3">
                  Belum punya akun?{" "}
                  <Link to="/register" className="text-[#42887E]">Register Disini</Link>
                </p>
                {error && <p className="text-red-700 text-center">{error}</p>}
                {message && <p className="">{message}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
