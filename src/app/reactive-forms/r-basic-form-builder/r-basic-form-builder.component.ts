import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-r-basic-form-builder',
  templateUrl: './r-basic-form-builder.component.html',
  styleUrls: ['./r-basic-form-builder.component.scss']
})
export class RBasicFormBuilderComponent {

    myForm:FormGroup;
    formSubmitted:boolean = false;

     constructor(private fb: FormBuilder) {
        this.myForm = this.fb.group({
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', [Validators.required, this.passwordMatchValidator.bind(this)]]
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
