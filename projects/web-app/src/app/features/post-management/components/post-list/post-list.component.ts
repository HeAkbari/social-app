import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostComponent } from "../post/post.component";
import { PostItemContainerComponent } from "../post-item-container/post-item-container.component";
import { PostService } from "../../service/post.service";
import { Post } from "../../model/post.model";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { PostItemComponent } from "../post-item/post-item.component";
import { StoreSelector } from "projects/web-app/src/app/store/reducers/reducer";

@Component({
  selector: "post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.scss"],
  standalone: true,
  imports: [CommonModule, PostComponent, PostItemComponent],
})
export class PostListComponent implements OnInit {
  posts$: Observable<Post[]>;
  constructor(
    public postService: PostService,
    private store: Store<StoreSelector>
  ) {
    this.posts$ = this.store.select(state=>state.posts);
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe();
  }

  trackByPost(index: any, item: Post) {
    return item?.id;
  }
}
