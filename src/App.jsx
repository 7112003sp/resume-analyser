import React from "react";
import Home from "./pages/Home";
import Jd from "./pages/jd";
import Res from "./pages/Res";
import { ToastContainer } from "react-toastify";
import { Route, Router, Routes } from "react-router-dom";
import Result from "./pages/Result";

const App = () => {
  return (
    <div className="h-sreen w-screen bg-neutral-900">
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex flex-col justify-center items-center">
              <Home />
              <Jd />
              <Res />
            </div>
          }
        />
        <Route path="/result" element={<Result />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
