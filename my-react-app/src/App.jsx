import { Routes, Route, } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";
import Layout from "@/pages/Layout";
import LogementId from "@/pages/Logement/id";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          
          <Route index element={<Home />} />

          <Route path="/home" element={<Home />} />          
          <Route path="/about" element={<About />} />          
          <Route path="/logement/:id" element={<LogementId />} />
          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

    </div>
  );
}
