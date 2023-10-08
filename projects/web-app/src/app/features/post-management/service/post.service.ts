import { HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  of,
  switchMap,
  tap,
  throwError,
} from "rxjs";

import { BaseService } from "../../../shared/service/base-service";
import { endpoints } from "../../../system/endpoints";
import { Post, PostRequest } from "../model/post.model";
import { Store } from "@ngrx/store";
import { postAction } from "../../../state/posts/post.actions";

@Injectable({
  providedIn: "root",
})
export class PostService extends BaseService {
  constructor(private store: Store) {
    super();
  }
  pagination = {
    offset: 0,
    pageSize: 10,
    lastItemcount: 0,
  };
  nextPage() {
    const { offset, pageSize, lastItemcount } = this.pagination;
    const itemcount = offset + pageSize;
    if (
      this.pagination.lastItemcount < this.pagination.pageSize ||
      itemcount > lastItemcount
    )
      return;
    this.pagination.offset = this.pagination.offset + this.pagination.pageSize;
    return this.getPosts()
      .pipe(
        tap((posts) => {
          this.store.dispatch(postAction.updates({ posts }));
        })
      )
      .subscribe();
  }
  getPosts() {
    const params = new HttpParams({
      fromObject: {
        _start: this.pagination.offset,
        _limit: this.pagination.pageSize,
      },
    });
    return this.apiService.get<Post[]>(endpoints.posts, params).pipe(
      tap((posts) => {
        this.pagination.lastItemcount += posts.length;
      }),
      catchError((error) => throwError(() => error))
    );
  }
  getPost(id: number) {
    return this.apiService.get<Post>(`${endpoints.posts}/${id}`).pipe(
      tap((post) => {
        this.store.dispatch(postAction.updates({ posts: [post] }));
      }),
      catchError((error) => throwError(() => error))
    );
  }
  createPost(post: PostRequest) {
    return this.apiService.post(endpoints.posts, post).pipe(
      tap((post) => {
        this.store.dispatch(postAction.creating({ post }));
      }),
      catchError((error) => throwError(() => error))
    );
  }
  deletePost(id: number) {
    return this.apiService.delete(`${endpoints.posts}/${id}`).pipe(
      tap(() => {
        this.store.dispatch(postAction.delete({ id }));
      }),
      catchError((error) => throwError(() => error))
    );
  }
}
