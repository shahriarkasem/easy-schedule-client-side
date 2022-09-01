import { configureStore } from "@reduxjs/toolkit";
import scheduleReducer from "./slices/scheduleSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
    schedules: scheduleReducer,
  },
});

export default store;
