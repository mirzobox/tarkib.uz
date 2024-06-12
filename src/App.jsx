import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import RootLayouts from "./layouts/RootLayouts";
import Login from "./page/Login";
import Register from "./page/Register";
import { useDispatch, useSelector } from "react-redux";
import Home from "./page/Home";
import { useEffect } from "react";
import { setAuthReady, setUser } from "./redux/slices/user-slice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase.config";

export default function App() {
  const dispatch = useDispatch();
  const { user, isAuthReady } = useSelector((state) => state.userSlice);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <RootLayouts />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(setUser(user));
      dispatch(setAuthReady(true));
    });
  }, [user]);
  return isAuthReady && <RouterProvider router={routes} />;
}
