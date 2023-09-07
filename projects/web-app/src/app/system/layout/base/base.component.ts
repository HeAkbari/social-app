import { AfterViewInit, Component, inject } from "@angular/core";
import { LoadingService } from "../../../shared/service/loading.service";

@Component({
  selector: "base",
  template: "",
  standalone: true,
  imports: [],
})
export class BaseComponent implements AfterViewInit {
  element: HTMLElement | null;
  loadingService: LoadingService;
  constructor() {
    this.loadingService = inject(LoadingService);
  }
  ngAfterViewInit(): void {}
}
