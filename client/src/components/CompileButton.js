import { Button } from "@material-ui/core";
import axios from "axios";
import { useEditor } from "../context/AppContext";

const CompileButton = () => {
  const { language, code, stdIn, setOutput, isSubmitting, setIsSubmitting } =
    useEditor();

  // Submit code to server
  const handleSubmission = async () => {
    setIsSubmitting(true);

    const body = JSON.stringify({
      script: code,
      stdin: stdIn,
      language,
    });
    const config = { headers: { "Content-type": "application/json" } };

    const res = await axios.post(
      "http://localhost:5000/api/submission",
      body,
      config
    );

    const data = res.data;
    setOutput(data);
    console.log(data);

    setIsSubmitting(false);
  };

  return (
    <section>
      <Button variant="contained" color="primary" onClick={handleSubmission}>
        {isSubmitting ? "Compiling..." : "Run"}
      </Button>
    </section>
  );
};

export default CompileButton;
