import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostService } from './service/post.service';

@Component({
  selector: 'post-management',
  templateUrl: './post-management.component.html',
  styleUrls: ['./post-management.component.scss'],
  standalone: true,
  imports: [CommonModule, PostListComponent],
})
export class PostManagementComponent {
  constructor(private postService: PostService) {}

  userListScrolled(event: any): void {
    const { offsetHeight, scrollTop, scrollHeight } = event.target;
    const isScrolledToBottom = offsetHeight + scrollTop >= +scrollHeight - 150;
    if (isScrolledToBottom) {
      this.postService.nextPage()
    }
  }
}
