import { createSlice } from '@reduxjs/toolkit';
import { fetchMainPageRecipe } from './recipeThunks';

const initialState = {
  recipeMainPage: [],
  isLoading: false,
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchMainPageRecipe.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(fetchMainPageRecipe.fulfilled, (state, { payload }) => {
        //   state.recipeMainPage = payload.data;
        //   console.log(payload.data);
        //   state.isLoading = false;
        if (payload && payload.data) {
          state.recipeMainPage = payload.data;
          console.log(payload.data);
        } else {
          console.error('Invalid payload:', payload);
        }
        state.isLoading = false;
      })
      .addCase(fetchMainPageRecipe.rejected, (state, { payload }) => {
        state.isLoading = false;
      }),
});

export const recipeReducer = recipeSlice.reducer;
