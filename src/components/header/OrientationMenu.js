import { Menu } from "@material-ui/core";
import ViewAgendaIcon from "@material-ui/icons/ViewAgenda";
import React, { useContext, useState } from "react";
import bottom from "../../assets/images/bottom-view.svg";
import left from "../../assets/images/column.svg";
import right from "../../assets/images/right.svg";
import { AppContext } from "../../context/AppContext";

const OrientationMenu = () => {
  const { setAlignment } = useContext(AppContext);

  const [anchorEl, setAnchorEl] = useState(null);

  // Opens ChangeView menu
  const openOrientationMenu = (e) => setAnchorEl(e.currentTarget);

  // Closes the ChangeView Menu
  const closeOrientationMenu = () => setAnchorEl(null);

  // Changes the alignment of the editors
  // @for context
  const handleAlignment = (position) => {
    setAlignment(position);
    closeOrientationMenu();
  };

  return (
    <div>
      <button className="nav_button" onClick={openOrientationMenu}>
        <ViewAgendaIcon />
        <span>Change View</span>
      </button>

      <Menu
        id="alignmentOptions"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeOrientationMenu}
      >
        <div className="alignment-options">
          <span onClick={() => handleAlignment("right")}>
            <img src={right} alt="right" />
          </span>
          <span onClick={() => handleAlignment("bottom")}>
            <img src={bottom} alt="bottom" />
          </span>
          <span onClick={() => handleAlignment("left")}>
            <img src={left} alt="left" />
          </span>
        </div>
      </Menu>
    </div>
  );
};

export default OrientationMenu;
