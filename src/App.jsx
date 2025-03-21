import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "./Components/Layouts/Container/Container";
import { Header } from "./Components/Layouts/Header/Header";
import { Home } from "./Components/Pages/Home/Home";
import { Skills } from "./Components/Pages/Skills/Skills";
import { Studies } from "./Components/Pages/Studies/Studies";
import { Footer } from "./Components/Layouts/Footer/Footer";
import { NotFound } from "./Components/Pages/NotFound/NotFound";

export const App = () => {
  return (
    <>
      <Header />
      <Container styles="flex-1 flex items-center justify-center min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Studies" element={<Studies />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}
