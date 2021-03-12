import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

function App() {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
