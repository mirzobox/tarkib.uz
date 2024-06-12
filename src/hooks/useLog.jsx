import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase/firebase.config.js";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import {
  setAuthReady,
  setPending,
  setUser,
} from "../redux/slices/user-slice.js";
import { useNavigate } from "react-router-dom";
export default function useLog() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function loginWithGoogleProvider() {
    dispatch(setPending(true));
    dispatch(setAuthReady(false));
    signInWithPopup(auth, googleProvider)
      .then(({ user }) => {
        toast.success(`Xush kelibsiz ${user.displayName} !`);
        dispatch(setUser(user));
        dispatch(setPending(false));
        dispatch(setAuthReady(true));
        navigate("/");
      })
      .catch(({ message }) => {
        toast.error(message);
        dispatch(setPending(true));
        dispatch(setAuthReady(false));
        // Reload page
        setTimeout(() => {
          location.reload();
        }, 2000);
      });
  }
  // Signin
  function signWithDisplayNameAndEmailAndPassword({
    displayName,
    email,
    password,
  }) {
    dispatch(setPending(true));
    dispatch(setAuthReady(false));
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, { displayName });
        toast.success(`Xush kelibsiz ${user.displayName} !`);
        dispatch(setUser(user));
        dispatch(setPending(false));
        dispatch(setAuthReady(true));
        navigate("/");
      })
      .catch(() => {
        toast.error("Bunday foydalanuvchi allaqachon ro'yhatdan o'tgan");
        dispatch(setPending(true));
        dispatch(setAuthReady(false));
        // Reload page
        setTimeout(() => {
          location.reload();
        }, 2000);
      });
  }
  // Login
  function loginWithEmailAndPassword({ email, password }) {
    dispatch(setPending(true));
    dispatch(setAuthReady(false));

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        toast.success(`Xush kelibsiz ${user.displayName}`);
        dispatch(setUser(user));
        dispatch(setPending(false));
        dispatch(setAuthReady(true));
        navigate("/");
      })
      .catch(() => {
        toast.error("Maxfiy so'z yoki email xato, qayta urunib ko'ring");
        dispatch(setPending(true));
        dispatch(setAuthReady(false));
        // Reload page
        setTimeout(() => {
          location.reload();
        }, 2000);
      });
  }

  return {
    loginWithGoogleProvider,
    signWithDisplayNameAndEmailAndPassword,
    loginWithEmailAndPassword,
  };
}
