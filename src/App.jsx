import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Galeri = lazy(() => import("./pages/Galeri"));
const Atolyeler = lazy(() => import("./pages/Atolyeler"));
const Branslarimiz = lazy(() => import("./pages/Branslarimiz"));
const SinavMerkezi = lazy(() => import("./pages/SinavMerkezi"));
const GuzelSanatlar = lazy(() => import("./pages/GuzelSanatlar"));
const AboutBilgi = lazy(() => import("./pages/AboutBilgi"));



function App() {
  return (
    <Suspense fallback={null}>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/branslarimiz" element={<Branslarimiz />} />
          <Route path="/atolyelerimiz" element={<Atolyeler />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/hakkimizda-bilgi" element={<AboutBilgi />} />
          <Route path="/iletisim" element={<Contact />} />
          <Route
            path="/uluslararasi-sinav-merkezi"
            element={<SinavMerkezi />}
          />
          <Route path="/guzel-sanatlar" element={<GuzelSanatlar />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
        </Routes>
      </Suspense>
    );
}

export default App;
