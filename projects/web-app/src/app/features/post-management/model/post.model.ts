export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}
export interface PostRequest {
  body: string|null;
  title: string|null;
  userId: number|null;
}
