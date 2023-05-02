import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout";

import dark from "./styles/themes/dark";
import GlobalStyles from "./styles/GlobalStyles";
import List from "./pages/List";
import light from "./styles/themes/light";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/list',
    element: <List/>,
  },
]);

function App() {
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Layout>
          <RouterProvider router={router} /> 
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
