import { Component, OnInit } from '@angular/core';
import { AppService, User } from './app.service';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users: User[] = [];
  errorMsg: string = '';
  loading$ = this.spinnerService.loading$;

  constructor(private userService: AppService,
    private spinnerService: SpinnerService
  ) { }
  ngOnInit(): void {
    this.loadUsers();
  }

  // loadUsers(): void {
  //   this.userService.getUsersWithErrorHandling().subscribe({
  //     next: users => this.users = users,
  //     error: err => this.errorMsg = err.message
  //   });
  // }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data
        console.log(data)
      },
      error: (err) => this.errorMsg = err.message
    });
  }

  loadWithHeaders(): void {
    this.userService.getWithHeaders().subscribe(data => console.log('Headers data:', data));
  }

  loadFullResponse(): void {
    this.userService.getFullResponse().subscribe(res => console.log('Full response:', res));
  }

  loadTextResponse(): void {
    this.userService.getTextResponse().subscribe(text => console.log('Text response:', text));
  }

  loadWithRetry(): void {
    this.userService.getWithRetry().subscribe(data => console.log('Retry response:', data));
  }

  loadCombinedData(): void {
    this.userService.getCombinedData().subscribe(data => console.log('Combined data:', data));
  }

  uploadFile(event: any): void {
    const file = event.target.files[0];
    this.userService.uploadFile(file).subscribe(result => console.log('Upload result:', result));
  }

  downloadFile(): void {
    this.userService.downloadFile().subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }

  addUser(): void {
    const newUser: User = { name: 'New User', email: 'new@example.com' };
    this.userService.createUser(newUser).subscribe(user => {
      this.users.push(user);
    });
  }

  updateUser(user: User): void {
    const updated = { ...user, name: user.name + ' Updated' };
    this.userService.updateUser(updated).subscribe();
  }

  patchUser(user: User): void {
    const patchData = { name: 'Patched Name' };
    this.userService.patchUser(user.id!, patchData).subscribe();
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(u => u.id !== id);
    });
  }
}
