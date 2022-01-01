import Menu from "@mui/material/Menu";
import { useState } from "react";
import { MdViewAgenda } from "react-icons/md";
import {
  RiLayoutLeftLine,
  RiLayoutRightLine,
  RiLayoutTopLine,
} from "react-icons/ri";
import { useEditor } from "../context/AppContext";

const OrientationMenu = () => {
  const { setAlignment } = useEditor();

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
    <>
      <button
        className="flex items-center gap-2 px-4 py-2 rounded-md justify-evenly hover:text-textSecondary focus:outline-none"
        onClick={openOrientationMenu}
      >
        <MdViewAgenda className="text-lg" />
        <span className="text-sm">Change View</span>
      </button>

      <Menu
        id="alignmentOptions"
        anchorEl={anchorEl}
        keepMounted
        className="p-0 border-0"
        open={Boolean(anchorEl)}
        onClose={closeOrientationMenu}
      >
        <div className="flex items-center gap-3 p-5 bg-paper justify-evenly w-80">
          <div
            className="cursor-pointer"
            onClick={() => handleAlignment("right")}
          >
            <RiLayoutLeftLine className="text-3xl text-white hover:text-gray-300" />
          </div>

          <div
            className="cursor-pointer"
            onClick={() => handleAlignment("bottom")}
          >
            <RiLayoutTopLine className="text-3xl text-white hover:text-gray-300" />
          </div>

          <div
            className="cursor-pointer"
            onClick={() => handleAlignment("left")}
          >
            <RiLayoutRightLine className="text-3xl text-white hover:text-gray-300" />
          </div>
        </div>
      </Menu>
    </>
  );
};

export default OrientationMenu;
