import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomPipesService } from '../custom-pipes.service';

@Component({
  selector: 'app-pure-pipe',
  templateUrl: './pure-pipe.component.html',
  styleUrls: ['./pure-pipe.component.scss']
})
export class PurePipeComponent implements OnInit, OnDestroy {
  todos: any[] = []
  todoInterval: any;

  constructor(private customPipesService: CustomPipesService) {
  
    }
  
    ngOnInit() {
      this.customPipesService.getTodos().subscribe(res => {
        this.todos = res;
  
        // To demonstrate impure behavior, mutate data periodically
        this.todoInterval = setInterval(() => {
          if (this.todos.length > 0) {
            const index = Math.floor(Math.random() * this.todos.length);
            this.todos[index].completed = !this.todos[index].completed;
          }
        }, 2000);
      });
  
      /////////////////////////////////////////////
  
   
  
    }

     ngOnDestroy() {
    clearInterval(this.todoInterval)
   
  }

}
