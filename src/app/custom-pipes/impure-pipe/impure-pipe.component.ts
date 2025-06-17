import { Component, OnDestroy, OnInit } from '@angular/core';
import { CustomPipesService } from '../custom-pipes.service';

@Component({
  selector: 'app-impure-pipe',
  templateUrl: './impure-pipe.component.html',
  styleUrls: ['./impure-pipe.component.scss']
})
export class ImpurePipeComponent implements OnInit, OnDestroy {
  todos: any[] = []
  todoInterval: any;
  userInterval: any;

  searchText: string = '';
  users = [
    { name: 'Ajith', role: 'Admin' },
    { name: 'John', role: 'User' },
    { name: 'Alice', role: 'Moderator' },
    { name: 'Bob', role: 'User' }
  ];

  user = {
    name: 'Ajith',
    age: 25
  };


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

    this.userInterval = setInterval(() => {
      this.user.age++;  // 👈 Internal change, not a new object
    }, 2000);

    /////////////////////////////////////////////

  }


  addNewUser() {
    this.users.push({ name: 'Charlie', role: 'Guest' });
  }

  ngOnDestroy() {
    clearInterval(this.todoInterval)
    clearInterval(this.userInterval)
  }
}
