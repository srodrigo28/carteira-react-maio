import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";

import dark from "./styles/themes/dark";
import GlobalStyles from "./styles/GlobalStyles";
import List from "./pages/List";
import Dashboard from "./pages/Dashboard";
import AppRoutes from "./routes/app.routes";
import Routes from "./routes";


function App() {
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
