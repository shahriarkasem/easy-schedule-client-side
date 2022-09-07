import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWorkflows = createAsyncThunk(
  "workflows/fetchWorkflows",
  async () => {
    const res = await axios.get("http://localhost:3000/workflow");
    return res.data;
  }
);

export const workflowSlice = createSlice({
  name: "workflows",
  initialState: {
    isLoading: false,
    workflows: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWorkflows.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchWorkflows.fulfilled, (state, action) => {
      state.isLoading = false;
      state.workflows = action.payload;
      state.error = null;
    });
    builder.addCase(fetchWorkflows.rejected, (state, action) => {
      state.isLoading = false;
      state.workflows = [];
      state.error = action.error.message;
    });
  },
});
export default workflowSlice.reducer;
