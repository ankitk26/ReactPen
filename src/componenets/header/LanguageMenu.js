import { Menu, MenuItem } from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

const LanguageMenu = () => {
  const { language, setLanguage } = useContext(AppContext);

  const [anchorEl, setAnchorEl] = useState(null);

  // Opens Language menu
  const openLanguageMenu = (e) => setAnchorEl(e.currentTarget);

  // Closes Language Menu
  const closeLanguageMenu = () => setAnchorEl(null);

  // Change the language of the editor
  // @for context
  const changeLanguage = (e) => {
    const { lang } = e.currentTarget.dataset;
    setLanguage(lang);
    closeLanguageMenu();
  };

  return (
    <div>
      <div>
        <button className="nav_button" onClick={openLanguageMenu}>
          <CodeIcon />
          <span>Languages</span>
        </button>

        <Menu
          value={language}
          id="languages"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={closeLanguageMenu}
        >
          <MenuItem data-lang="cpp" onClick={changeLanguage}>
            C++
          </MenuItem>
          <MenuItem data-lang="java" onClick={changeLanguage}>
            Java
          </MenuItem>
          <MenuItem data-lang="python" onClick={changeLanguage}>
            Python
          </MenuItem>
          <MenuItem data-lang="webd" onClick={changeLanguage}>
            Web Development
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default LanguageMenu;
