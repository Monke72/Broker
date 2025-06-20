import { RegistrPage } from "../pages/RegistrPage/index";
import { Routes, Route } from "react-router-dom";
import NotFound from "@shared/ui/NotFoundPage/NotFound";
import HomePage from "@pages/HomePage/index";
import AsyncTest from "@shared/tested/Event/Event";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Broker/" element={<HomePage />} />
        <Route path="/Broker/reg" element={<RegistrPage />} />
        <Route path="*" element={<NotFound error={404} />} />
      </Routes>
      <AsyncTest />
    </>
  );
}

export default App;
