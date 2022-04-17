import { rootReducer } from "./reducers/index";
import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

export const store = createStore(rootReducer, devToolsEnhancer());

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
