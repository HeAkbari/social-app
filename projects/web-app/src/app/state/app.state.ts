import { Comment } from "../features/post-management/model/comment.model";
import { Post } from "../features/post-management/model/post.model";

export interface AppState {
  postState: PostState;
  commentState: CommentState;
}

export interface PostState {
  posts: Post[];
  loading:boolean
}
export interface CommentState {
  comments: Comment[];
}
