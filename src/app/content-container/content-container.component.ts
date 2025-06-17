import { 
  Component, 
  ContentChild, 
  AfterContentInit, 
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  DoCheck,
  OnChanges,
  OnInit,
  OnDestroy,
  SimpleChanges,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-content-container',
  template: `
    <div class="container">
      <h2>Container Component</h2>
      <div class="projected-content">
        <ng-content></ng-content>
      </div>
      <p>Container Data: {{ containerData }}</p>
      <button (click)="updateData()">Update Data</button>
    </div>
  `,
  styles: [`
    .container {
      border: 2px solid #4285f4;
      padding: 20px;
      margin: 20px;
    }
    .projected-content {
      border: 1px dashed #4285f4;
      padding: 10px;
      margin: 10px 0;
    }
  `]
})
export class ContentContainerComponent implements 
  OnChanges, 
  OnInit, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @ContentChild('projectedHeader', { static: false }) projectedHeader!: ElementRef;
  containerData: string = 'Initial Value';
  changeCount: number = 0;

  constructor() {
    console.log('Container - Constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Container - ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('Container - ngOnInit');
  }

  ngDoCheck() {
    console.log('Container - ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('Container - ngAfterContentInit');
    console.log('Projected header content:', this.projectedHeader?.nativeElement?.textContent);
  }

  ngAfterContentChecked() {
    console.log('Container - ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('Container - ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('Container - ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('Container - ngOnDestroy');
  }

  updateData() {
    this.changeCount++;
    this.containerData = `Updated Value ${this.changeCount}`;
  }
}