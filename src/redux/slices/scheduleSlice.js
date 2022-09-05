import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSchedules = createAsyncThunk(
  "schedules/fetchSchedules",
  async () => {
    const res = await axios.get("https://easyscheduler24.herokuapp.com/userSchedule");
    return res.data;
  }
);

export const scheduleSlice = createSlice({
  name: "schedules",
  initialState: {
    isLoading: false,
    users: [],
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchSchedules.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSchedules.fulfilled, (state, action) => {
      state.isLoading = false;
      state.schedules = action.payload;
      state.error = null;
    });
    builder.addCase(fetchSchedules.rejected, (state, action) => {
      state.isLoading = false;
      state.schedules = [];
      state.error = action.error.message;
    });
  },
});

export default scheduleSlice.reducer;
