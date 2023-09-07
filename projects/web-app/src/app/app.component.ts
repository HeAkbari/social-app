import { AfterViewInit, Component } from '@angular/core';
import { BaseComponent } from './system/layout/base/base.component';
import { SWService } from './shared/service/sw.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent extends BaseComponent implements AfterViewInit {
  constructor(private SWService: SWService) {
    super()
    
  }
}
