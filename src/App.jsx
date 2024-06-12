import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import RootLayouts from "./layouts/RootLayouts";
import Login from "./page/Login";

export default function App() {
  const user = null;
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <RootLayouts />
        </ProtectedRoutes>
      ),
      children: [],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={routes} />;
}
