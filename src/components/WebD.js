import React, { useContext, useEffect, useState } from "react";
import Editor from "../components/Editor";
import { AppContext } from "../context/AppContext";

const WebD = () => {
  // Initial code for srcdoc
  const [html, setHtml] = useState(localStorage.getItem("html") || "");
  const [css, setCss] = useState(localStorage.getItem("css") || "");
  const [js, setJs] = useState(localStorage.getItem("javascript") || "");
  const { alignment } = useContext(AppContext);

  const [srcDoc, setSrcDoc] = useState(`
    <html>
    <head>
    <style>${css}</style>
    </head>
    <body>${html}
    <script>${js}</script>
    </body>
    </html>
      `);

  // Update srcdoc as any of html, css and js changes
  useEffect(() => {
    setSrcDoc(`
    <html>
    <head>
    <style>${css}</style>
    </head>
    <body>${html}
    <script>${js}</script>
    </body>
    </html>
        `);
  }, [html, css, js]);

  return (
    <div className={`home_container ${alignment}`}>
      {/* Editors */}
      <div className={`editors ${alignment}`}>
        <Editor language="html" code={html} setCode={setHtml} />
        <Editor language="css" code={css} setCode={setCss} />
        <Editor language="javascript" code={js} setCode={setJs} />
      </div>
      {/* Output Section */}
      <div className="output_section">
        <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          className="output_frame"
          width="100%"
          srcDoc={srcDoc}
        />
      </div>
    </div>
  );
};

export default WebD;
