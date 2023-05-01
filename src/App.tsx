import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";

import dark from "./styles/themes/dark";
import GlobalStyles from "./styles/GlobalStyles";
import List from "./pages/List";
import light from "./styles/themes/light";

function App() {
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Layout>
          <List />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
