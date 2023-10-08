import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from "@ngrx/store";
import { commentAction } from "./comment.actions";
import { Comment } from "../../features/post-management/model/comment.model";
import { AppState, CommentState } from "../app.state";

export const initialState: CommentState = { comments: [] };
export function commentReducer(state: any, action: Action) {
  return _commentReducer(state, action);
}
const _commentReducer = createReducer(
  initialState,
  on(commentAction.updates, (state, { comments }) => {
    return { ...state, comments: [...state.comments, ...comments] };
  })
);

export const getCommentState = (state: AppState) => state.commentState;

export const getComments = createSelector(
  getCommentState,
  (state) => state.comments
);
