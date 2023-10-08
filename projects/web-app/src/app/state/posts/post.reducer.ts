import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from "@ngrx/store";
import { postAction } from "./post.actions";
import { AppState, PostState } from "../app.state";

export const initialState: PostState = { posts: [], loading: false };
export function postReducer(state: any, action: Action) {
  return _postReducer(state, action);
}
const _postReducer = createReducer(
  initialState,
  on(postAction.create, (state, { post }) => {
    return { ...state, posts: [post, ...state.posts] };
  }),
  on(postAction.update, (state, { post }) => {
    const i = state.posts.findIndex((t) => t.id === post.id);
    if (i >= 0)
      return {
        ...state,
        posts: [
          ...state.posts.slice(0, i),
          { ...state.posts[i], post },
          ...state.posts.slice(i + 1),
        ],
      };

    return { ...state, posts: [post, ...state.posts] };
  }),
  on(postAction.updates, (state, { posts }) => {
    return { ...state, posts: [...state.posts, ...posts] };
  }),
  on(postAction.delete, (state, { id }) => {
    return { ...state, posts: state.posts.filter((t) => t.id != id) };
  })
);

const getPostState = (state: AppState) => state.postState;
export const getPosts = createSelector(getPostState, (state) => state.posts);
export const getPostsLoading = createSelector(
  getPostState,
  (state) => state.loading
);

export const getPost = (id) =>
  createSelector(getPostState, (state) => state.posts.find((t) => t.id === id));
