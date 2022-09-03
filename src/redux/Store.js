import { configureStore } from "@reduxjs/toolkit";
import scheduleReducer from "./slices/scheduleSlice";
import userReducer from "./slices/userSlice";
import workflowReducer from "./slices/workflowSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
    workflows: workflowReducer,
    schedules: scheduleReducer,
  },
});

export default store;
