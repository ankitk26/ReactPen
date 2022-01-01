import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { AppProvider } from "./context/AppContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import theme from "./theme";

const App = () => {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <div className="flex flex-col w-full h-screen gap-0">
          <Router>
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </Router>
        </div>
      </ThemeProvider>
    </AppProvider>
  );
};

export default App;
