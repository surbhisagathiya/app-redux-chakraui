import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const signupUser = createAsyncThunk(
//     "users/signupUser",
//     async({name,email,password},thunkAPI)=>{
//         try{
//             const response = await fetch(
//                 ""
//             ) 
//         }
//     }
// ) 

export const authSlice = createSlice({
  name: "AuthUser",
  initialState: {
    username: "",
    email: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: {},
});

export default authSlice.reducer;