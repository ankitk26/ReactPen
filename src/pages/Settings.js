import { MenuItem, Select, Slider, Switch } from "@material-ui/core";
import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid"; // to give random ids to the list items
import Preview from "../componenets/Preview";
import { fonts, themes } from "../constants/constants";
import { AppContext } from "../context/AppContext";

const Settings = () => {
  const {
    setTheme,
    theme,
    fontFamily,
    setFontFamily,
    fontSize,
    setFontSize,
    wrap,
    setWrap,
    showLineNumbers,
    setShowLineNumbers,
  } = useContext(AppContext);

  // functions to change the editor properties
  const themeChange = (e) => setTheme(e.target.value);
  const fontFamilyChange = (e) => setFontFamily(e.target.value);
  const fontSizeChange = (e, value) => setFontSize(value);
  const wrapChange = (e) => setWrap(e.target.checked);
  const lineNumbersChange = (e) => setShowLineNumbers(e.target.checked);

  return (
    <div className="settings_page_container">
      {/* Preview Section */}
      <div className="preview_wrapper">
        <Preview />
      </div>

      {/* Settings menu */}
      <div className="settings_wrapper">
        <h1>Settings</h1>

        <form className="settings_form">
          {/* Change theme of editor */}
          <label htmlFor="themeSelector">Theme</label>
          <Select
            value={theme}
            onChange={themeChange}
            style={{
              backgroundColor: "#fff",
            }}
            autoWidth
          >
            {themes.map(({ importTheme, display }) => (
              <MenuItem value={importTheme} key={uuidv4()}>
                {display}
              </MenuItem>
            ))}
          </Select>

          {/* Font family setting */}
          <label htmlFor="fontSelector">Font Family</label>
          <Select
            value={fontFamily}
            onChange={fontFamilyChange}
            style={{
              backgroundColor: "#fff",
            }}
            autoWidth
          >
            {fonts.map((font) => (
              <MenuItem value={font} key={uuidv4()}>
                {font}
              </MenuItem>
            ))}
          </Select>

          {/* Font size setting */}
          <label htmlFor="fontSizeSelector">Font Size</label>
          <div style={{ margin: "0 3rem" }}>
            <Slider value={fontSize} onChange={fontSizeChange} min={10} valueLabelDisplay="auto" max={30} />
          </div>

          {/* Wrap content setting */}
          <label htmlFor="wrap">Wrap Content</label>
          <Switch color="primary" checked={wrap} onChange={wrapChange} />

          {/* Showing line numbers setting */}
          <label htmlFor="lineNumbers">Line Numbers</label>
          <Switch color="primary" checked={showLineNumbers} onChange={lineNumbersChange} />
        </form>
      </div>
    </div>
  );
};

export default Settings;
