import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />

      </Routes>
    </div>
  );
}

export default App;
