import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ingredients: [],
  images: [],
  category: "",
};

export const extraRecipesDataSlice = createSlice({
  name: "extra-data",
  initialState,
  reducers: {
    setGeneralIngredients(state, { payload }) {
      state.ingredients = payload;
    },
    setImages(state, { payload }) {
      state.images = payload;
    },
    setCategory(state, { payload }) {
      state.category = payload;
    },
  },
});

export const { setGeneralIngredients, setImages, setCategory } =
  extraRecipesDataSlice.actions;

export default extraRecipesDataSlice.reducer;
