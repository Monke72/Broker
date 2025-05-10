import { RegistrPage } from "../pages/RegistrPage/index";
import { Routes, Route } from "react-router-dom";
import NotFound from "@shared/ui/NotFoundPage/NotFound";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/main" element={} /> */}
        <Route path="/" element={<RegistrPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
