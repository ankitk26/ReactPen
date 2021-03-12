import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("cobalt");
  const [fontFamily, setFontFamily] = useState("Consolas");
  const [fontSize, setFontSize] = useState(15);
  const [wrap, setWrap] = useState(false);
  const [showLineNumbers, setShowLineNumbers] = useState(true);
  const [alignment, setAlignment] = useState("right");
  const [language, setLanguage] = useState("cpp");

  return (
    <AppContext.Provider
      value={{
        theme,
        fontFamily,
        fontSize,
        wrap,
        showLineNumbers,
        alignment,
        language,
        setTheme,
        setFontFamily,
        setFontSize,
        setWrap,
        setShowLineNumbers,
        setAlignment,
        setLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
