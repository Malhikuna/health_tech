import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Program30Hari from "./pages/Program30Hari";
import Program7Hari from "./pages/Program7Hari";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/program30Hari" element={<Program30Hari />} />
      <Route path="/program7Hari" element={<Program7Hari />} />
    </Routes>
  );
}

export default App;
