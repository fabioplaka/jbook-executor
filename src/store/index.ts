import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "./reducers";
import { ActionType } from "./actions";
export * as actionCreators from "./actions";

export const store = configureStore({
  reducer: combineReducers,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

store.dispatch({
  type: ActionType.INSERT_CELL,
  payload: {
    id: null,
    type: "code",
  },
});

store.dispatch({
  type: ActionType.INSERT_CELL,
  payload: {
    id: null,
    type: "text",
  },
});

store.dispatch({
  type: ActionType.INSERT_CELL,
  payload: {
    id: null,
    type: "code",
  },
});

store.dispatch({
  type: ActionType.INSERT_CELL,
  payload: {
    id: null,
    type: "text",
  },
});
