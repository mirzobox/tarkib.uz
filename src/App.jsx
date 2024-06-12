import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import RootLayouts from "./layouts/RootLayouts";
import Login from "./page/Login";
import Register from "./page/Register";

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
      element: user ? <Login /> : "/login",
    },
    {
      path: "/register",
      element: user ? <Register /> : "/login",
    },
  ]);
  return <RouterProvider router={routes} />;
}
