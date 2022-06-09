import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users/usersSlice";
import authSlice from "./users/AuthSlice";

export default configureStore({
  reducer: { users: usersReducer, authuser: authSlice },
});
