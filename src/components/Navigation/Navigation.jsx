import { Link } from "react-router-dom";
import css from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <header className={css.header}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </header>
  );
};

export default Navigation;
