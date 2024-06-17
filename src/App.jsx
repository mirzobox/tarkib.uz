import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import RootLayouts from "./layouts/RootLayouts";
import Login from "./page/Login";
import Register from "./page/Register";
import { useDispatch, useSelector } from "react-redux";
import Home from "./page/Home";
import { useEffect } from "react";
import { setAuthReady, setUser } from "./redux/slices/user-slice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase.config";
import CreateRecipes from "./page/CreateRecipes";
import MyRecipes from "./page/MyRecipes";
import Statistics from "./page/Statistics";

export default function App() {
  const dispatch = useDispatch();
  const { user, isAuthReady } = useSelector((state) => state.userSlice);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayouts />,
      children: [
        {
          index: true,
          path: "/",
          element: <Home />,
        },
        {
          path: "/statistics",
          element: <Statistics />,
        },
        {
          path: "/my-recipes",
          element: <MyRecipes />,
        },
        {
          path: "/create-recipes",
          element: user ? <CreateRecipes /> : <Navigate to="/" />,
        },
        {
          path: "/:id",
          element: <h3>Salom</h3>,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
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
