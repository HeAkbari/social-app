import { HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, tap, throwError } from "rxjs";

import { BaseService } from "../../../shared/service/base-service";
import { endpoints } from "../../../system/endpoints";
import { Store } from "@ngrx/store";
import { PostSelector } from "../model/selector.model";
import { commentAction } from "../store/comment.actions";
import { Comment } from "../model/comment.model";

@Injectable({
  providedIn: "root",
})
export class CommentService extends BaseService {
  constructor(private store: Store<PostSelector>) {
    super();
  }
  getComments(postId: number) {
    return this.apiService
      .get<Comment[]>(`${endpoints.posts}/${postId}/${endpoints.comments}`)
      .pipe(
        tap((comments) => {
          this.store.dispatch(commentAction.listComment({ comments }));
        }),
        catchError((error) => throwError(() => error))
      );
  }
}