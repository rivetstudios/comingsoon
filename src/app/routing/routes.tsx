import { Route, Routes } from "react-router-dom";
import { About } from "../pages/about";
import { Home } from "../pages/home";
import { Projects } from "../pages/projects";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};
