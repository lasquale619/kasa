import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Logement from "@/pages/Logement";
import NotFound from "@/pages/NotFound";
import Layout from "@/pages/Layout";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>

          {/* page d'accueil */}
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />

          {/* à propos */}
          <Route path="/about" element={<About />} />

          {/* Fiche logement */}
          <Route path="/logement" element={<Logement />} />

          {/* 404 pour toute autre URL */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

    </div>
  );
}
