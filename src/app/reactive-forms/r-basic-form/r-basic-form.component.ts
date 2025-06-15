import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-r-basic-form',
  templateUrl: './r-basic-form.component.html',
  styleUrls: ['./r-basic-form.component.scss']
})
export class RBasicFormComponent {

  myForm:FormGroup;
  formSubmitted:boolean = false;

  constructor() {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, this.passwordMatchValidator.bind(this)]) 
    });
  }

  submitForm() {
    console.log(this.myForm)
    if (this.myForm.valid) {
      this.formSubmitted = true;
      console.log('Form Submitted!', this.myForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  passwordMatchValidator(control: FormControl): { [key: string]: boolean } | null {
    if (this.myForm && control.value !== this.myForm.get('password')?.value) {
      return { 'passwordMismatch': true };
    }
    return null;
  }

  resetForm() {
    this.myForm.reset();
    this.formSubmitted = false;
  }

}
