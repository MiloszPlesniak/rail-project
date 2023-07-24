import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Strona głowna</NavLink>
          </li>
          <li>
            <NavLink to="Teoria">Teoria</NavLink>
          </li>
          <li>
            <NavLink to="Ćwiczenia">Ćwiczenia</NavLink>
          </li>
          <li>
            <NavLink to="Spis-treści">Spis Treści</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
