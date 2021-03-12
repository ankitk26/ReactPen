import { PlayArrow } from "@material-ui/icons";
import SettingsIcon from "@material-ui/icons/Settings";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import LanguageMenu from "../components/header/LanguageMenu";
import OrientationMenu from "../components/header/OrientationMenu";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const { language } = useContext(AppContext);

  return (
    <nav>
      {/* Logo */}
      <Link to="/">
        <div className="nav_brand">
          <img src={logo} alt="Logo" />
          <h1>ReactPen</h1>
        </div>
      </Link>

      {/* Run button only for programming languages */}
      {language !== "webd" && (
        <button className="nav_button">
          <span>Run</span>
          <PlayArrow style={{ color: "#007C00" }} />
        </button>
      )}

      {/* Navigation buttons */}
      <div className="nav_buttons">
        {/* Change the orientation of editors */}
        {language === "webd" && <OrientationMenu />}

        {/* Choose languages */}
        <LanguageMenu />

        {/* Link to change the settings of the editor */}
        <Link to="/settings">
          <button className="nav_button">
            <SettingsIcon />
            <span>Settings</span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
