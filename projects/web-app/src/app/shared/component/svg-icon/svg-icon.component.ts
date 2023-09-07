import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  Injectable,
  Input,
  OnInit,
} from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { IconNames } from './svg-icon.constants';

@Component({
  selector: 'svg-icon',
  template: `<ng-template>{{ src }}</ng-template>`,
  standalone: true,
})
export class SvgIconComponent implements OnInit {
  src = '';
  @Input() width: string;
  @Input() height: string;
  _iconName: IconNames | string;
  @Input() set iconName(value: IconNames | string) {
    this.src = `/assets/img/${value}.svg`;
    this._iconName = value;
  }

  constructor(
    private el: ElementRef,
    private http: HttpClient,
    private svgIcon: SvgIconService
  ) {}

  ngOnInit(): void {
    const svg = this.svgIcon.get(this._iconName);
    if (svg) return this.prepareSvg(svg);
    this.http
      .get(this.src, { responseType: 'text' })
      .pipe(
        tap((svg) => this.svgIcon.set(this._iconName, svg)),
        catchError((error) => {
          console.log(error);
          return of(undefined);
        })
      )
      .subscribe(this.prepareSvg);
  }
  prepareSvg = (svg: string | undefined) => {
    if (!svg) return;
    this.width = this.width ? 'width=' + this.width : '';
    this.height = this.height ? 'height=' + this.height : '';

    svg = svg.replace('<svg', `<svg  ${this.width} ${this.height} `);

    this.el.nativeElement.innerHTML = svg;
  };
}

@Injectable({
  providedIn: 'root',
})
export class SvgIconService {
  private images = new Map<string, string>();
  get(key: string) {
    return this.images.get(key);
  }
  set(key: string, value: string) {
    this.images.set(key, value);
  }
}
