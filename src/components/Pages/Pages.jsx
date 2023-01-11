import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../NavBar/Navbar";
import Rodape from "../Rodape/Rodape";
import Index from "../Index/Index";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/NavBar" element={<NavBar />} />
        <Route index element={<Index />} />
        <Route path="/Rodape" element={<Rodape />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Pages;
