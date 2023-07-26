import style from "./Main.module.scss";
import Home from "../components/page/Home/Home";
import Theory from "../components/page/Theory/Theory";
import Contents from "../components/page/Contents/Contents";
import RailwaySignalList from "../components/Ie-1/RailwaySignalList/RailwaySignalList";
import { Route, Routes } from "react-router-dom";
import Exercises from "../components/page/Exercises/Exercises";
const Main = () => {
  return (
    <main className={style.main}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Ćwiczenia" element={<Exercises />}></Route>
        <Route path="Teoria" element={<Theory />}>
          <Route path="Semafory" element={<RailwaySignalList />} />
        </Route>
        <Route path="Spis-treści" element={<Contents />} />
      </Routes>
    </main>
  );
};

export default Main;
