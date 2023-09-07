import { Component, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from "@angular/router";
import { SocialEnvironment } from "../../../shared/models/environment";
import { SideMenuComponent } from "../side-menu/side-menu.component";
import { BaseComponent } from "../base/base.component";
import { SvgIconComponent } from "../../../shared/component/svg-icon/svg-icon.component";

@Component({
  selector: "left-sidebar",
  templateUrl: "./left-sidebar.component.html",
  styleUrls: ["./left-sidebar.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    SideMenuComponent,
    SvgIconComponent,
  ],
})
export class LeftSidebarComponent extends BaseComponent implements OnDestroy {
  constructor() {
    super();

  }
  ngOnDestroy(): void {}
}
