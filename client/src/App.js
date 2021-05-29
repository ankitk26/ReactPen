import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { AppProvider } from "./context/AppContext";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import theme from "./theme";

const App = () => {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <>
            <div className="flex flex-col w-full h-screen gap-0">
              <Header />
              <main className="flex-grow">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/settings" component={Settings} />
                </Switch>
              </main>
            </div>
          </>
        </Router>
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
