import ProgrammingEditor from "../components/ProgrammingEditor";
import WebD from "../components/WebD";
import { useEditor } from "../context/AppContext";

const Home = () => {
  const { language } = useEditor();

  return (
    <div className="h-full">
      {language === "webd" ? <WebD /> : <ProgrammingEditor />}
    </div>
  );
};

export default Home;
