import React, { useContext } from "react";
import Cpp from "../componenets/Cpp";
import Java from "../componenets/Java";
import ProgrammingEditor from "../componenets/ProgrammingEditor";
import Python from "../componenets/Python";
import WebD from "../componenets/WebD";
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
