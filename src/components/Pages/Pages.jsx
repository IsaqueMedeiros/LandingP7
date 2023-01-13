import React from "react";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../NavBar/Navbar";
import Rodape from "../Rodape/Rodape";
import Index from "../Index/Index";

const Pages = () => {
  return (
    <div>
      <NavBar />
      <HashRouter>
        <Routes>
          <Route index element={<Index />} />
        </Routes>
      </HashRouter>
      <Rodape />
    </div>
  );
};

export default Pages;
