import { AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
  }

}



@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highlightColor!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // If no value is passed, use default
    if (!this.highlightColor) {
      this.highlightColor = 'yellow';
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
  }
}

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }
}


@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
  @Output() appClickOutside = new EventEmitter<void>();

  constructor(private el: ElementRef) {
    document.addEventListener('click', this.onClick.bind(this), true);
  }

  onClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!this.el.nativeElement.contains(target)) {
      this.appClickOutside.emit();
    }
  }
}


@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective {
  @Input('appHasRole') role!: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const userRole = 'admin'; // Replace with actual logic
    if (userRole !== this.role) {
      this.el.nativeElement.style.display = 'none';
    }
  }
}


@Directive({
  selector: '[appDebounceClick]'
})
export class DebounceClickDirective {
  @Output() appDebounceClick = new EventEmitter();
  @Input() debounceTime = 500;

  private clicks = new Subject<void>();

  constructor() {
    this.clicks.pipe(debounceTime(this.debounceTime)).subscribe(() => {
      this.appDebounceClick.emit();
    });
  }

  @HostListener('click', ['$event'])
  onClick() {
    this.clicks.next();
  }

  
}



@Directive({
  selector: '[appAddClass]'
})
export class AddClassDirective {
  @Input('appAddClass') className!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, this.className);
  }
}
