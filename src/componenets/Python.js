import React, { useState } from "react";
import Editor from "./Editor";

const Python = () => {
  const [code, setCode] = useState("");

  return (
    <div className="home_container_2">
      <div className="editor2">
        <Editor language="python" code={code} setCode={setCode} />
      </div>
      <div className="input_output">
        <div className="input">
          <h1>Input</h1>
          <textarea name="input" id="input" cols="30" rows="10" />
        </div>

        <div className="output">
          <h1>Output</h1>
          <textarea name="output" id="output" cols="30" rows="10"></textarea>
        </div>
      </div>
    </div>
  );
};

export default Python;
