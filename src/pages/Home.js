import React, { useContext } from "react";
import ProgrammingEditor from "../components/ProgrammingEditor";
import WebD from "../components/WebD";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { language } = useContext(AppContext);

  return (
    <>
      {language === "webd" ? <WebD /> : <ProgrammingEditor language={language} />}
      {/* {language === "cpp" && <Cpp />} */}
      {/* {language === "java" && <Java />} */}
      {/* {language === "python" && <Python />} */}
      {/* {language === "webd" && <WebD />} */}
    </>
  );
};

export default Home;
