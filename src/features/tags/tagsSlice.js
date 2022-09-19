import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTags } from "./tagsAPI";
const initialState = {
  tags: [],
  isLoading: false,
  isError: false,
  error: "",
};
export const fetchTags = createAsyncThunk("Tags/fetchTags", async () => {
  const tags = getTags();

  return tags;
});
const tagsSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.tags = [];
        state.error = action.error?.message;
      });
  },
});

export default tagsSlice.reducer;
