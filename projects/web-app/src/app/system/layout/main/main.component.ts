import {
  Component,
  OnDestroy,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {RouterModule, RouterOutlet } from "@angular/router";
import {  } from "../../../../environments/environment";
import { RoutingPath } from "../../../shared/models/routing.constants";
import { SocialEnvironment } from "../../../shared/models/environment";
import { SideMenuComponent } from "../side-menu/side-menu.component";
import { BaseComponent } from "../base/base.component";

import {LoaderComponentComponent} from "../loader-component/loader-component.component";
import { LeftSidebarComponent } from "../left-sidebar/left-sidebar.component";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    SideMenuComponent,
    LoaderComponentComponent,
    LeftSidebarComponent  ],
})
export class MainComponent extends BaseComponent implements OnDestroy {
  routingPath = RoutingPath;
  constructor(
    public environment: SocialEnvironment,
  ) {
    super();
  }
  ngOnDestroy(): void {}

}
