import { configureStore } from "@reduxjs/toolkit";
import toolBarSlice from "./travelTool/toolBarSlice";

export const store = configureStore({
  reducer: {
    toolbar: toolBarSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
