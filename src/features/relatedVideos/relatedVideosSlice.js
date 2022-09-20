import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import { getRelatedVideos } from "./relatedVideosAPI";
const initialState = {
  relatedVideos: [],
  isLoading: false,
  isError: false,
  error: "",
};
export const fetchRelatedVideos = createAsyncThunk("relatedVideo/fetchRelatedVideos", async ({tags,id}) => {
  const relatedVideos = getRelatedVideos({tags,id});

  return relatedVideos;
});
const relatedVideoSlice = createSlice({
  name: "relatedVideo",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideos.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = action.payload;
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.relatedVideos = [];
        state.error = action.error?.message;
      });
  },
});

export default relatedVideoSlice.reducer
