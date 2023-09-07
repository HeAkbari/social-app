import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'ng2-tooltip-directive';
import { RoutingPath } from '../../../shared/models/routing.constants';
import { SocialEnvironment } from '../../../shared/models/environment';
import { SvgIconComponent } from '../../../shared/component/svg-icon/svg-icon.component';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  imports: [CommonModule, TooltipModule, RouterModule, SvgIconComponent],
  standalone: true,
})
export class SideMenuComponent {
  routingPath = RoutingPath;
  constructor(
    public environment: SocialEnvironment,
  ) {
  }

}
