import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isPending: false,
  isAuthReady: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.user = payload;
    },
    setPending(state, { payload }) {
      state.isPending = payload;
    },
    setAuthReady(state, { payload }) {
      state.isAuthReady = payload;
    },
  },
});

export const { setUser, setPending, setAuthReady } = userSlice.actions;

export default userSlice.reducer;
