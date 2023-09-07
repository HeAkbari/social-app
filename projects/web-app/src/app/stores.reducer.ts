import { CommentReducer } from "./features/post-management/store/comment.reducer";
import { PostReducer } from "./features/post-management/store/post.reducer";

export const storesReducer = {
    posts: PostReducer,
    comments: CommentReducer,
  };