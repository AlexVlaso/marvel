import { NavLink, Link } from "react-router-dom";
import "./appHeader.scss";

function AppHeader() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <h1 className="header__title">
            <Link to="/">
              <span className="header__text_red">Marvel</span> information
              portal
            </Link>
          </h1>

          <div className="header__links">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#9f0013" : "black",
              })}
            >
              Characters
            </NavLink>
            /
            <NavLink
              to="/comics"
              style={({ isActive }) => ({
                color: isActive ? "#9f0013" : "black",
              })}
            >
              Comics
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
