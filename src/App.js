import { Route, Routes } from "react-router-dom";
import Exercises from "./components/Exercises";
import Header from "./components/Header";
import Home from "./components/Home";
import Theory from "./components/Theory";
import Contents from "./components/Contents";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="Ćwiczenia" element={<Exercises />} />
          <Route path="Teoria" element={<Theory />} />
          <Route path="Spis-treści" element={<Contents />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
