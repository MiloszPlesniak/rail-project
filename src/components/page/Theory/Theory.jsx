import { Link, Outlet } from "react-router-dom";
import style from "./Theory.module.scss";
const Theory = () => {
  return (
    <>
      <div className={style.theory}>
        <ul className={style.theory__list}>
          <li className={style.theory__item}>
            <div className={style.theory__menuItem}>
              {/* <Link to="/Teoria/Semafory" className={style.theory__link}>
                Sygnały
              </Link> */}
              
            </div>
          </li>
        </ul>
        <div className={style.theory__materials}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Theory;
