import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import workflowReducer from "./slices/workflowSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
    workflows: workflowReducer,
  },
});

export default store;
