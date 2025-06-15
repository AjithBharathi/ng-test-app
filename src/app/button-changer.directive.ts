import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appButtonChanger]'
})

export class ButtonChangerDirective {

  @HostListener('mouseover', ['$event'])
  onMouseOver(event: Event) {
    const target = event.target as HTMLButtonElement;
    target.style.backgroundColor = 'blue';
    target.style.color = 'white';
  }
  @HostListener('mouseout', ['$event'])
  onMouseOut(event: Event) {
    const target = event.target as HTMLButtonElement;
    target.style.backgroundColor = 'white';
    target.style.color = 'black';
  }

  @HostBinding('style.backgroundColor') backgroundColor = 'red';
  @HostBinding('style.color') color = 'black';
  @HostBinding('style.border') border = '1px solid black';

  constructor() {

  }
}