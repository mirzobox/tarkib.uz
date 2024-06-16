import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/user-slice";
import extraRecipesDataSlice from "../slices/extra-recipes-data-slice";

export const store = configureStore({
  reducer: {
    userSlice,
    extraRecipesDataSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["user/setUser", "user/setAuthReady"],
        ignoredPaths: ["userSlice.user"],
      },
    }),
});
