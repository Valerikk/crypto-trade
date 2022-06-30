import { Route, Routes } from "react-router-dom";
import Chart from "../pages/Chart";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/chart" element={<Chart />} />
    </Routes>
  );
}

export default Router;
