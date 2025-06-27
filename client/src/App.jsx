import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import DetailProgram from "./pages/DetailProgram";
import FormDataFisik from "./pages/FormDataFisik";



function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/program/:id" element={<DetailProgram />} />
      <Route path="/formdatafisik" element={<FormDataFisik/>} />
    </Routes>
  );
}

export default App;
