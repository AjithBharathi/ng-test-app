import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-inbuilt-pipes',
  templateUrl: './inbuilt-pipes.component.html',
  styleUrls: ['./inbuilt-pipes.component.scss']
})
export class InbuiltPipesComponent implements OnInit {
  user = { name: 'Ajith', age: 30 };

  // This Observable will be used with the async pipe in the template
  user$!: Observable<{ name: string, email: string }>;

  today = new Date();

  messages = {
    '=0': 'No messages.',
    '=1': 'One message.',
    'other': '# messages.'
  };

  messageCount = 2;


  genderMap = {
    male: 'Mr.',
    female: 'Ms.',
    other: 'Mx.'
  };

  userGender = 'female';

  ngOnInit(): void {
    // Simulate async API call (you can replace with HttpClient.get())
    this.user$ = of({ name: 'Ajith', email: 'ajith@example.com' }).pipe(
      delay(1000) // Simulate network delay
    );
  }


}
