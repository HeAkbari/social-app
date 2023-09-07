import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommentService } from "../../service/comment.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.scss"],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class CommentComponent implements OnInit {
  @Input() postId: number;
  @Output() onSubmit = new EventEmitter<boolean>(false);
  file: any;
  content = "";
  constructor(
    public commentService: CommentService  ) { }

  ngOnInit(): void { }
  submit() {

  }

}
