import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import DetailProgram from "./pages/DetailProgram";
import FormDataFisik from "./pages/FormDataFisik";
import ResepPage from "./pages/ResepPage";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard/:id" element={<DashboardPage />} />
      <Route path="/program/:id" element={<DetailProgram />} />
      <Route path="/formdatafisik/:id" element={<FormDataFisik/>} />
      <Route path="/resep/:recipeId" element={
        <ProtectedRoute>
          <ResepPage/>
        </ProtectedRoute>
        } />
    </Routes>
  );
}

export default App;
