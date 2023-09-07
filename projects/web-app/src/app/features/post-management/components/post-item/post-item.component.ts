import { Component, Input, OnInit, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostComponent } from "../post/post.component";

import { PostService } from "../../service/post.service";
import { Router, RouterLink } from "@angular/router";
import { RoutingPath } from "projects/web-app/src/app/shared/models/routing.constants";
import { SvgIconComponent } from "projects/web-app/src/app/shared/component/svg-icon/svg-icon.component";
import { Post } from "../../model/post.model";

@Component({
  selector: "post-item",
  templateUrl: "./post-item.component.html",
  styleUrls: ["./post-item.component.scss"],
  standalone: true,
  imports: [CommonModule, PostComponent, SvgIconComponent, RouterLink],
})
export class PostItemComponent implements OnInit {
  @Input() item: Post;
  @Input() haseDetail = true;
  routingPath = RoutingPath;

  constructor(private postService: PostService) {}
  ngOnInit(): void {}
  deletePost() {
    const confirmed = window.confirm("آیا از حذف این پست اطمبنان دارید؟ ");
    if (confirmed) this.postService.deletePost(this.item.id).subscribe();
  }
}
