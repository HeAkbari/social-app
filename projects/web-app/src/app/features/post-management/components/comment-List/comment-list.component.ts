import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommentItemComponent } from "../comment-item/comment-item.component";
import { CommentService } from "../../service/comment.service";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/internal/Observable";
import { Comment } from "../../model/comment.model";
import {
  AppState,
  CommentState,
} from "projects/web-app/src/app/state/app.state";
import * as reducer from "projects/web-app/src/app/state/comments/comment.reducer";

@Component({
  selector: "comment-list",
  templateUrl: "./comment-list.component.html",
  styleUrls: ["./comment-list.component.scss"],
  standalone: true,
  imports: [CommonModule, CommentItemComponent],
  providers: [CommentService],
})
export class CommentListComponent implements OnInit {
  @Input() postId: number;
  comments$: Observable<Comment[]>;
  constructor(
    public commentService: CommentService,
    private store: Store<AppState>
  ) {
    this.comments$ = this.store.select(reducer.getComments);
  }
  ngOnDestroy(): void {}

  ngOnInit(): void {
    this.commentService.getComments(this.postId).subscribe();
    this.comments$.subscribe(console.log);
  }

  trackBy(index: any, item: Comment) {
    return item?.id;
  }
}
