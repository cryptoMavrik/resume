import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import NavMenu from "./components/Navbar";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Profile from "./pages/Profile";

function App() {
  return (
    <NavMenu>
      <Routes>
        <Route path="*" element={<Navigate to={"/profile"} />} />
        <Route path="/" element={<Navigate to={"/profile"} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </NavMenu>
  );
}

export default App;
