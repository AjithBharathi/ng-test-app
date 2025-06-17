
import { 
  Component, 
  Input, 
  OnChanges, 
  OnInit, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-child-a-one',
  templateUrl: './child-a-one.component.html',
  styleUrls: ['./child-a-one.component.scss']
})
export class ChildAOneComponent implements  
  OnChanges, 
  OnInit, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  
  @Input() inputValue: string = '';
  counter: number = 0;
  private intervalId: any;

  constructor() {
    console.log('Child - Constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Child - ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('Child - ngOnInit');
    this.intervalId = setInterval(() => {
      this.counter++;
      console.log('Child - Counter updated:', this.counter);
    }, 1000);
  }

  ngDoCheck() {
    console.log('Child - ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('Child - ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Child - ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('Child - ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('Child - ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('Child - ngOnDestroy');
    clearInterval(this.intervalId);
  }

  increment() {
    this.counter++;
  }
}
