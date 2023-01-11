import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../NavBar/Navbar";
import Rodape from "../Rodape/Rodape";
import Index from "../Index/Index";

const Pages = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Index />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
};

export default Pages;
