import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from "@ngrx/store";
import { Post } from "../model/post.model";

export const postAction = createActionGroup({
  source: "post",
  events: {
    "create post": props<{post:Post}>(),
    "update post": props<{post:Post}>(),
    "list post": props<{posts:Post[]}>(),
    "get post": props<{ id: number }>(),
    "delete post": props<{ id: number }>(),
  },
});
