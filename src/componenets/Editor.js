import React, { useContext, useEffect, useState } from "react";
import AceEditor from "react-ace";
import PropTypes from "prop-types";

// Import themes
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-vibrant_ink";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/theme-tomorrow_night_blue";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties";

// Import languages
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";

import "ace-builds/src-noconflict/ext-language_tools";

import { AppContext } from "../context/AppContext";
import { Minimize } from "@material-ui/icons";

const Editor = ({ language, code, setCode, purpose }) => {
  const { theme, fontFamily, fontSize, wrap, showLineNumbers } = useContext(AppContext);

  const [editorOpen, setEditorOpen] = useState(true);

  useEffect(() => {
    if (purpose !== "preview") {
      localStorage.setItem(language, code);
    }
    // eslint-disable-next-line
  }, [code, language]);

  const onChange = (newValue) => {
    setCode(newValue);
  };

  const toggleEditor = () => {
    setEditorOpen((prev) => !prev);
  };

  return (
    <div className="editor">
      {purpose !== "preview" && (
        <header>
          <h2>{language === "c_cpp" ? "C/C++" : language}</h2>
          {(language === "html" || language === "css" || language === "javascript") && (
            <button onClick={() => toggleEditor()}>
              <Minimize style={{ color: "#ddd" }} />
            </button>
          )}
        </header>
      )}
      <AceEditor
        mode={language}
        theme={theme}
        fontSize={fontSize}
        value={code}
        onChange={onChange}
        name={`${language}_editor`}
        style={{
          display: !editorOpen && "none",
          width: "100%",
          height: "100%",
        }}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          // autoScrollEditorIntoView: true,
          fontFamily,
          wrap,
          showLineNumbers,
          fixedWidthGutter: true,
        }}
      />
    </div>
  );
};

Editor.propTypes = {
  language: PropTypes.string,
  code: PropTypes.string,
  purpose: PropTypes.string,
  setCode: PropTypes.func,
};

export default Editor;
