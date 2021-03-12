import { AppBar, makeStyles, Tab, Tabs } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { cssPreview, htmlPreview, jsPreview } from "../constants/constants";
import { AppContext } from "../context/AppContext";
import Editor from "./Editor";

// Wrapping component for each content of the tab
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      style={{ height: "80%" }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
};

// Managing ids of the tabs
const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#1E1F26",
  },
  indicator: {
    backgroundColor: "#FAFAFA",
  },
}));

const Preview = () => {
  const classes = useStyles();
  const { theme } = useContext(AppContext);

  const [value, setValue] = useState(0);
  const [html, setHtml] = useState(htmlPreview);
  const [css, setCss] = useState(cssPreview);
  const [js, setJs] = useState(jsPreview);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static">
        {/* Tabs for different languages */}
        <Tabs
          classes={{ indicator: classes.indicator, root: classes.root }}
          // className={classes.tabBackground}
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          variant="fullWidth"
        >
          {/* Tab titles */}
          <Tab label="HTML" {...a11yProps(0)} />
          <Tab label="CSS" {...a11yProps(1)} />
          <Tab label="JS" {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      {/* HTML Tab Content */}
      <TabPanel value={value} index={0}>
        <Editor language="html" theme={theme} code={html} setCode={setHtml} purpose="preview" />
      </TabPanel>

      {/* CSS Tab Content */}
      <TabPanel value={value} index={1}>
        <Editor language="css" theme={theme} code={css} setCode={setCss} purpose="preview" />
      </TabPanel>

      {/* JS Tab Content */}
      <TabPanel value={value} index={2}>
        <Editor language="javascript" theme={theme} code={js} setCode={setJs} purpose="preview" />
      </TabPanel>
    </>
  );
};

export default Preview;
