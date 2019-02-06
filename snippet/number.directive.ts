import { Directive, ElementRef, HostListener, Input  } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[appNumber]'
})
export class NumberDirective {

  constructor(private _el: ElementRef,private ngModel: NgModel) { }

  @HostListener('input', ['$event']) onInputChange(event) {
    const initalValue = this._el.nativeElement.value;
    var clean = initalValue.replace(/[^-0-9\.]/g, '');
    var negativeCheck = clean.split('-');
    var decimalCheck = clean.split('.');

    if(typeof initalValue === 'undefined'){
      clean='';
    }
    if(typeof negativeCheck[1] != 'undefined'){
      negativeCheck[1] = negativeCheck[1].slice(0, negativeCheck[1].length);
      clean = negativeCheck[0] + '-' + negativeCheck[1];
      if (negativeCheck[0].length > 0) {
          clean = negativeCheck[0];
      }
    }
    if (typeof decimalCheck[1] != 'undefined') {
        decimalCheck[1] = decimalCheck[1].slice(0, 2);
        clean = decimalCheck[0] + '.' + decimalCheck[1];
    }

    this._el.nativeElement.value = clean;

    if ( initalValue !== this._el.nativeElement.value) {
      this.ngModel.update.emit(clean);
      event.stopPropagation();
    }
  }
}