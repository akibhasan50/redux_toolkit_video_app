import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import { getVideos } from "./videosAPI";
const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};
export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
  const videos = getVideos();
  return videos;
});
const videosSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.videos = [];
        state.error = action.error?.message;
      });
  },
});

export default videosSlice.reducer