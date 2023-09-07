import { createReducer, on } from "@ngrx/store";
import { postAction } from "./post.actions";
import { Post } from "../model/post.model";

export const initialState: Post[] = [];

export const PostReducer = createReducer(
  initialState,
  on(postAction.listPost, (state, { posts }) => [...state, ...posts]),
  on(postAction.createPost, (state, { post }) => {
    return [post, ...state];
  }),
  on(postAction.updatePost, (state, { post }) => {
    const i = state.findIndex((t) => t.id === post.id);
    if (i >= 0)
      return [
        ...state.slice(0, i),
        { ...state[i], post, ...state.slice(i + 1) },
      ];
    return [post, ...state];
  }),
  on(postAction.deletePost, (state, { id }) => {
    return state.filter((t) => t.id != id);
  })
);
