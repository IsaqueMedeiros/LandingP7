import React from "react";
import { HashRouter as Hash, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "../NavBar/Navbar";
import Rodape from "../Rodape/Rodape";
import Index from "../Index/Index";
import ErrorPage from "./Error/ErrorPage"

const Pages = () => {
  return (
    <Hash>
      <NavBar />
      <Routes>
      <Route exact path="/" element={<Index />} />
      <Route path="/404" element={<ErrorPage />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
      <Rodape />
    </Hash>
  );
};

export default Pages;
