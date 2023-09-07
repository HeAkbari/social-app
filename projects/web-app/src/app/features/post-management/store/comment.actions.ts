import {
  createActionGroup,
  props,
} from "@ngrx/store";
import { Comment } from "../model/comment.model";

export const commentAction = createActionGroup({
  source: "comment",
  events: {
    "list comment": props<{comments:Comment[]}>()
  },
});
