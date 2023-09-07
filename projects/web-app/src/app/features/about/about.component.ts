import {
  Component,
  effect
} from "@angular/core";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { CommonModule } from "@angular/common";
import { TooltipModule } from "ng2-tooltip-directive";
import { SvgIconComponent } from "../../shared/component/svg-icon/svg-icon.component";



@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule,
    TooltipModule,
    SvgIconComponent,
  ],
})
export class AboutComponent{

  constructor() {

  }

}
