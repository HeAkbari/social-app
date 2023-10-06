import {
  createActionGroup,
  props,
} from "@ngrx/store";
import { Comment } from "../../features/post-management/model/comment.model";

export const commentAction = createActionGroup({
  source: "comment",
  events: {
    "updates": props<{comments:Comment[]}>()
  },
});
