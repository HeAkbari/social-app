import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

import { PostService } from "../../service/post.service";
import { tap } from "rxjs";
import { PostRequest } from "../../model/post.model";
import { NumbersOnlyDirective } from "projects/web-app/src/app/shared/directives/numbers-only.directive";

@Component({
  selector: "post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NumbersOnlyDirective,
  ],
})
export class PostComponent {
  postForm = this.fb.group({
    userId: new FormControl<number | null>(null, [
      Validators.required,
      Validators.maxLength(3),
    ]),
    title: new FormControl<string | null>("", [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(30),
    ]),
    body: new FormControl<string | null>("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(200),
    ]),
  });
  constructor(public postService: PostService, private fb: FormBuilder) {}
  submit() {
    if (this.postForm.invalid) return;
    this.postService
      .createPost(this.postForm.value as PostRequest)
      .pipe(
        tap(() => {
          this.postForm.reset();
        })
      )
      .subscribe();
  }
  isFieldInValid(field: string) {
    return (
      !this.postForm?.controls[field]?.valid &&
      (this.postForm?.controls[field]?.touched ||
        this.postForm?.controls[field]?.dirty)
    );
  }
}
