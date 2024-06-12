import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import RootLayouts from "./layouts/RootLayouts";
import Login from "./page/Login";
import Register from "./page/Register";

export default function App() {
  const user = true;
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
      element: user ? <Login /> : <Navigate to="/login" />,
    },
    {
      path: "/register",
      element: user ? <Register /> : <Navigate to="/login" />,
    },
  ]);
  return <RouterProvider router={routes} />;
}
