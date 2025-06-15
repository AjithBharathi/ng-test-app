import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-r-fb2',
  templateUrl: './r-fb2.component.html',
  styleUrls: ['./r-fb2.component.scss']
})
export class RFb2Component {

  myForm: FormGroup;
  formSubmitted: boolean = false;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      sex: ['', [Validators.required]],
      married: ['']
    });

    this.myForm.get('age')?.valueChanges.subscribe(value => {
      const marriedControl = this.myForm.get('married');

      if (value >= 18) {
        marriedControl?.setValidators([Validators.required]);
      } else {
        // marriedControl?.clearAsyncValidators // what is the difference between clearAsyncValidators and clearValidators?
        marriedControl?.clearValidators();
      }
      marriedControl?.updateValueAndValidity();
    })
  }

  resetForm() {
    this.myForm.reset();
    this.formSubmitted = false;
  }

  submitForm() {
    if (this.myForm.valid) {
      this.formSubmitted = true;
      console.log('Form Submitted!', this.myForm.value);
    } else {
      console.log('Form is invalid');
    }
  }



}
