import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "./Components/Layouts/Container";
import { Header } from "./Components/Layouts/Header";
import { Home } from "./Components/Pages/Home";
import { Skills } from "./Components/Pages/Skills";
import { Studies } from "./Components/Pages/Studies";

export const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Studies" element={<Studies />} />
        </Routes>
      </Container>
      <footer>
        <h4> HOLA </h4>
      </footer>
    </>
  )
}
