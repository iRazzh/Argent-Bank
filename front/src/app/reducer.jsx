import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    // A string name for this slice of state. Generated action type constants will use this as a prefix.
    name: "user",
    // The initial state value for this slice of state.
    initialState: {
      token: "",
    },
    // An object containing Redux "case reducer" functions (functions intended to handle a specific action type, equivalent to a single case statement in a switch).
    reducers: {
      itsToken: (state, action) => {
        state.token = action.payload;
      },
    },
  });
  
  export const { itsToken } = userSlice.actions;
  
  export const userReducer = userSlice.reducer;