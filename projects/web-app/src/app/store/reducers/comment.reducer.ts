import { createReducer, on } from "@ngrx/store";
import { commentAction } from "../actions/comment.actions";
import { Comment } from "../../features/post-management/model/comment.model";

export const initialState: ReadonlyArray<Comment> = [];

export const CommentReducer = createReducer(
  initialState,
  on(commentAction.updates, (state, { comments }) => [
    ...state,
    ...comments,
  ])
);
