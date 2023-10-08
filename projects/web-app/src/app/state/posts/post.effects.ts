import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PostService } from "../../features/post-management/service/post.service";
import { postAction } from "./post.actions";
import { exhaustMap, map, tap } from "rxjs";

@Injectable()
export class PostEffects {
  constructor(private action$: Actions, private postService: PostService) {}

  loadPosts$ = createEffect(() =>
    this.action$.pipe(
      ofType(postAction.getAll),
      exhaustMap(() => this.postService.getPosts()),
      map((posts) => postAction.updates({ posts }))
    )
  );
}
