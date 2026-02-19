import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Galeri from "./pages/Galeri";
import Atolyeler from "./pages/Atolyeler";
import Branslarimiz from "./pages/Branslarimiz";
import "./App.css";
import SinavMerkezi from "./pages/SinavMerkezi";
import GuzelSanatlar from "./pages/GuzelSanatlar";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/branslarimiz" element={<Branslarimiz />}/>
        <Route path="/atolyelerimiz" element={<Atolyeler />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/iletisim" element={<Contact />} />

        <Route path="/uluslararasi-sinav-merkezi" element={<SinavMerkezi />} />
        <Route path="/guzel-sanatlar" element={<GuzelSanatlar />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
