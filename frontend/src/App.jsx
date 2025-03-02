import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";

function App() {
  return (

    <div className="p-4 min-h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>

  );
}

export default App;
