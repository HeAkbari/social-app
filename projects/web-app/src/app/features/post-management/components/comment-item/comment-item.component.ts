import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Comment } from "../../model/comment.model";

@Component({
  selector: "comment-item",
  templateUrl: "./comment-item.component.html",
  styleUrls: ["./comment-item.component.scss"],
  standalone: true,
  imports: [CommonModule],
})
export class CommentItemComponent {
  @Input() item: Comment;

  constructor() {}

}
