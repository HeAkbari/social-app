import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
	standalone: true,
	selector: 'input[numbersOnly]'
})
export class NumbersOnlyDirective {
	constructor(private _el: ElementRef) {}
	@HostListener('input', ['$event']) onInputChange(event: any) {
		const initalValue = this._el.nativeElement.value;
		const value = initalValue.replace(/([^0-9۰-۹]*)/g, '');
		this._el.nativeElement.value = value;
		if (initalValue !== this._el.nativeElement.value) {
			event.stopPropagation();
		}
	}
}
