import NavBar from "./components/NavBar";
import Paises from "./components/Paises";
import PaisGrande from "./components/PaisGrande";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState(true);
  return (
    <BrowserRouter>
      <NavBar setMode={setMode} mode={mode}></NavBar>
      <Routes className="fondo">
        <Route index element={<Paises mode={mode}></Paises>}></Route>
        <Route
          path={`/name/:countryName`}
          element={<PaisGrande mode={mode}></PaisGrande>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
