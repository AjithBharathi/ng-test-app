import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-child-a-one',
  templateUrl: './child-a-one.component.html',
  styleUrls: ['./child-a-one.component.scss']
})
export class ChildAOneComponent implements OnInit, OnChanges {
  @Input() name = 'Child A One Component';
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.parentname.subscribe((data: string) => {  
      this.name = data;
    }
    );
   
  }

  ngOnChanges(changes: SimpleChanges): void {
      
  }

  onNameChange(e:any) {
    const value = e.target.value;
    this.appService.setData(value);
  }

}
