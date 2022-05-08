import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Rio Nguyen",
    age: "26",
    about: "I like cat",
    avaUrl: "https://i.redd.it/lfs78sg5t7w61.png",
    themeColor: "#ff9051",
    pendding: false,
    error: false,
  },
  reducers: {
    updateStart: (state) => {
      state.pendding = true;
    },
    updateSucces: (state, action) => {
      state.pendding = false;
      state.error = false;
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avaUrl = action.payload.avaUrl;
      state.themeColor = action.payload.themeColor;
    },
    updateError: (state) => {
      state.pendding = false;
      state.error = true;
    },

    // update: (state, action) => {
    //   state.name = action.payload.name;
    //   state.age = action.payload.age;
    //   state.about = action.payload.about;
    //   state.avaUrl = action.payload.avaUrl;
    //   state.themeColor = action.payload.themeColor;
    // },
  },
});

export const { updateStart, updateSucces, updateError } = userSlice.actions;
export default userSlice.reducer; //userReducer
