import { Comment } from "./comment.model";
import { Post } from "./post.model";

export type PostSelector = {
  posts: Post[];
  comments: Comment[];
};
