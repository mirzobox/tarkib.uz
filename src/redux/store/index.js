import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/user-slice";

export const store = configureStore({
  reducer: {
    userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["user/setUser", "user/setAuthReady"],
        ignoredPaths: ["userSlice.user"],
      },
    }),
});
