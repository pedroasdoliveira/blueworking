import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import NewSpot from "./components/NewSpot/index";
import Home from "./pages/Home";
import NovoElemento from "./pages/Home/NovoElemento";

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/nova-rota" element={<NovoElemento />} /> */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/new" element={<NewSpot />} />
        </Routes>
    </BrowserRouter>
  ) 
};

export default Router;
