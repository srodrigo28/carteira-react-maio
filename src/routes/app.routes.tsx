import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {Dashboard} from "../pages/Dashboard";
import {List} from "../pages/List";
import {Layout} from "../components/Layout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />
    },
    {
      path: '/dashboard',
      element: <Dashboard />
    },
    {
      path: '/list/:type',
      element: <List/>
    },
  ]);
const AppRoutes: React.FC = () => {
    return (
        <Layout>
            <RouterProvider router={router} /> 
        </Layout>
    )
}

export default AppRoutes;