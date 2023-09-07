import { createReducer, on } from "@ngrx/store";
import { commentAction } from "./comment.actions";
import { Comment } from "../model/comment.model";

export const initialState: Comment[] = [];

export const CommentReducer = createReducer(
  initialState,
  on(commentAction.listComment, (state, { comments }) => [...state, ...comments]),
);
