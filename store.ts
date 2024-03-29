import { configureStore } from "@reduxjs/toolkit";
import playingReducer from "slices/playingSlice";
import searchReducer from "slices/searchSlice";
// ...

export const store = configureStore({
  reducer: {
    search: searchReducer,
    playing: playingReducer,
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
