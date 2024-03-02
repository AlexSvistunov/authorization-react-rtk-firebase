import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
      </Routes>
    </>
  );
};

export default AppRoutes;
