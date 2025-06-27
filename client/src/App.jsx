import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import DetailProgram from "./pages/DetailProgram";
import FormDataFisik from "./pages/FormDataFisik";



function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/program/:id" element={<DetailProgram />} />
      <Route path="/formdatafisik/:id" element={<FormDataFisik/>} />
    </Routes>
  );
}

export default App;
