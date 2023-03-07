import React from "react";
import { HashRouter as Hash, Routes, Route,  } from "react-router-dom";
import NavBar from "../NavBar/Navbar";
import Rodape from "../Rodape/Rodape";
import Index from "../Index/Index";
import ErrorPage from "./Error/ErrorPage"

const Pages = () => {
  
  return (
    <Hash>
      <NavBar />
      <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Rodape />
    </Hash>
   
  );
};

export default Pages;
