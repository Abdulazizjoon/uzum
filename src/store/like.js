import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
  name: "like",
  initialState: {
    likedItems: [], 
  },
  reducers: {
    toggleLike: (state, action) => {
      const item = action.payload;
      const existingItem = state.likedItems.find((i) => i.id === item.id);

      if (existingItem) {
        state.likedItems = state.likedItems.filter((i) => i.id !== item.id);
      } else {
        state.likedItems.push(item);
      }
    },
  },
});

export const { toggleLike } = likeSlice.actions;
export default likeSlice.reducer;
