const express = require("express");
const app = express();
const cors = require("cors");
const fetch = require("node-fetch");
require("dotenv").config();

// Get the language text and version
const { getLanguage } = require("./utils/getLanguage");

// Middlewares
app.use(cors());
app.use(express.json());

// Post request to create submission
app.post("/api/submission", async (req, res) => {
  try {
    const [language, versionIndex] = getLanguage(req.body.language);

    const inputParams = {
      ...req.body,
      language,
      versionIndex,
      clientId: process.env.JDOODLE_CLIENT_ID,
      clientSecret: process.env.JDOODLE_CLIENT_SECRET,
    };

    const resp = await fetch("https://api.jdoodle.com/v1/execute", {
      method: "post",
      body: JSON.stringify(inputParams),
      headers: { "Content-type": "application/json" },
    });

    const data = await resp.json();

    res.status(200).json(data);
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ error: err.message });
  }
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started at port ${port}`));
