import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from "@ngrx/store";
import { Post } from "../../features/post-management/model/post.model";

// export const postCreatAction = createAction("[post page] create", props<{ post: Post }>());

export const postAction = createActionGroup({
  source: "post",
  events: {
    creating: props<{ post: Post }>(),
    create: props<{ post: Post }>(),
    update: props<{ post: Post }>(),
    updates: props<{ posts: Post[] }>(),
    get: props<{ id: number }>(),
    delete: props<{ id: number }>(),
    getAll: emptyProps(),
  },
});
