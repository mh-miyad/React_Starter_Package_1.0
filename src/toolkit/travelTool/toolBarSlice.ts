import { createSlice } from "@reduxjs/toolkit";

export const toolBarSlice = createSlice({
  name: "toolBar",
  initialState: {
    open: false,
  },
  reducers: {
    openToolBar: (state) => {
      state.open = true;
    },
    closeToolBar: (state) => {
      state.open = false;
    },
  },
});

export const { closeToolBar, openToolBar } = toolBarSlice.actions;
export default toolBarSlice.reducer;
