import { ActionReducerMap } from "@ngrx/store";
import { postReducer } from "./posts/post.reducer";
import { AppState } from "./app.state";
import { commentReducer } from "./comments/comment.reducer";


export const reducers: ActionReducerMap<AppState> = {
  postState: postReducer,
  commentState: commentReducer,
};
