import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "./pages/Inicio/Inicio";
import { Praias } from "./pages/Praias";
import { NoPage } from "./pages/NoPage";
// import { Footer } from "./components/Footer/Footer"

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="praias" element={<Praias />} />
          <Route path="*" element={<NoPage />} />
       </Routes>
      </BrowserRouter>
    </>
  );
}
