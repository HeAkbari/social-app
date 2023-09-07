import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostItemComponent } from "../post-item/post-item.component";
import { PostComponent } from "../post/post.component";
import { CommentListComponent } from "../comment-List/comment-list.component";
import { CommentItemComponent } from "../comment-item/comment-item.component";
import { Post } from "../../model/post.model";
import { CommentComponent } from "../comment/comment.component";
import { PostService } from "../../service/post.service";
import { Observable, map } from "rxjs";
import { Store } from "@ngrx/store";

@Component({
  selector: "post-item-container",
  templateUrl: "./post-item-container.component.html",
  styleUrls: ["./post-item-container.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    PostItemComponent,
    PostComponent,
    CommentListComponent,
    CommentItemComponent,
    CommentComponent,
  ],
})
export class PostItemContainerComponent implements OnInit {
  @Input() id: number;
  post$: Observable<Post>;

  constructor(
    private postService: PostService,
  ) {
  }

  ngOnInit(): void {
    this.post$=  this.postService.getPost(this.id)
  }

}
