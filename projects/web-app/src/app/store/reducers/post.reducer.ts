import { createReducer, on } from "@ngrx/store";
import { postAction } from "../actions/post.actions";
import { Post } from "../../features/post-management/model/post.model";

export const initialState: ReadonlyArray<Post> = [];

export const PostReducer = createReducer(
  initialState,
  on(postAction.updates, (state, { posts }) => [...state, ...posts]),
  on(postAction.create, (state, { post }) => {
    return [post, ...state];
  }),
  on(postAction.update, (state, { post }) => {
    const i = state.findIndex((t) => t.id === post.id);
    if (i >= 0)
      return [
        ...state.slice(0, i),
        { ...state[i], post, ...state.slice(i + 1) },
      ];
    return [post, ...state];
  }),
  on(postAction.delete, (state, { id }) => {
    return state.filter((t) => t.id != id);
  })
);
