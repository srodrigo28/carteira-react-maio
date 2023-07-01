import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";
import GlobalStyles from "./styles/GlobalStyles";
import { Routes } from "./routes";
import light from "./styles/themes/light";

function App() {
  return (
    <>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
