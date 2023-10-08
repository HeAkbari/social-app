import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostComponent } from "../post/post.component";
import { PostItemContainerComponent } from "../post-item-container/post-item-container.component";
import { PostService } from "../../service/post.service";
import { Post } from "../../model/post.model";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { PostItemComponent } from "../post-item/post-item.component";
import { AppState, PostState } from "projects/web-app/src/app/state/app.state";
import { reducers } from "projects/web-app/src/app/state/reducer";
import * as reducer from "projects/web-app/src/app/state/posts/post.reducer";
import { postAction } from "projects/web-app/src/app/state/posts/post.actions";

@Component({
  selector: "post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.scss"],
  standalone: true,
  imports: [CommonModule, PostComponent, PostItemComponent],
})
export class PostListComponent implements OnInit {
  posts$: Observable<Post[]>;
  postLoading$: Observable<boolean>;
  constructor(public postService: PostService, private store: Store<AppState>) {
    this.posts$ = this.store.select(reducer.getPosts);
    this.postLoading$ = this.store.select(reducer.getPostsLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(postAction.getAll());
  }

  trackByPost(index: any, item: Post) {
    return item?.id;
  }
}
