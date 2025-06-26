import React, { useState } from "react";
import { useNavigate } from "react-router";
import { registerUser } from "../services/authService";
import bgLogin from "../assets/image/bgLogin.png";
import imgRegister from "../assets/image/imgRegister.png";
import InputForm from "../components/Input";
import Button from "../components/Button";

const RegisterPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    first_name: "",
    last_name: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError("Password dan Konfirmasi Password tidak sama");
      return;
    }

    const { confirmPassword, ...dataToSend } = form;

    const res = await registerUser(dataToSend); 

    if (res.success) {
      setMessage("Registrasi berhasil!");
      setError("");
      navigate("/login");
    } else {
      setError(res.errors || "Terjadi kesalahan");
      setMessage("");
    }
  };

  return (
 
    <div
      className=" w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgLogin})` }}
    >
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[839px] h-[628px] bg-[#003237] rounded-[30px] relative flex">
          <div className="absolute top-[-10px] w-1/2 p-9">
            <h1 className="text-white font-bold text-5xl font-cinzel text-center mb-3">
              Register
            </h1>
            <form onSubmit={handleSubmit} action="">
              <InputForm
                label="Email"
                type="email"
                name="email"
                placeholder="email"
                value={form.email}
                className="w-full bg-white text-black p-1"
                onChange={handleChange}
              />

              <InputForm
                label="FirstName"
                type="text"
                name="first_name"
                placeholder="First Name"
                value={form.first_name}
                className="w-full bg-white text-black p-1"
                onChange={handleChange}
              />

              <InputForm
                label="Lastname"
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={form.last_name}
                className="w-full bg-white text-black p-1"
                onChange={handleChange}
              />

               <InputForm
                label="Password"
                type="password"
                name="password"
                placeholder="password"
                value={form.password}
                className="w-full bg-white text-black p-1"
                onChange={handleChange}
              />

                  <InputForm
                label="Konfirmasi Password"
                type="password"
                name="confirmPassword"
                placeholder="confirmPassword"
                value={form.confirmPassword}
                className="w-full bg-white text-black p-1"
                onChange={handleChange}
              />

              <div className="flex flex-col justify-center items-center mt-4">
                <Button
                  type="submit"
                  className="bg-[#42887E] font-bold px-[55px] py-2"
                >
                  SUBMIT
                </Button>
                <p className="font-bold text-white mt-3">
                  Sudah punya akun?{" "}
                  <span className="text-[#42887E]">Silahkan Login</span>
                </p>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {message && <p style={{ color: "green" }}>{message}</p>}
              </div>
            </form>
          </div>

          <img
            src={imgRegister}
            alt=""
            className="w-[64.5%] right-0 bottom-[-31px] absolute"
          />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
