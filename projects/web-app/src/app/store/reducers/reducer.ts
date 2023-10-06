import { Comment } from "../../features/post-management/model/comment.model";
import { Post } from "../../features/post-management/model/post.model";
import { CommentReducer } from "./comment.reducer";
import { PostReducer } from "./post.reducer";

export const storesReducer = {
  posts: PostReducer,
  comments: CommentReducer,
};

export type StoreSelector = {
  posts: Post[];
  comments: Comment[];
};
