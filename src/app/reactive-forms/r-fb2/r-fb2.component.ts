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

  myForm2: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      sex: ['', [Validators.required]],
      married: ['']
    });

    // this.myForm.controls['name'].valueChanges.subscribe(value => { // this also can be used
      

    this.myForm.get('age')?.valueChanges.subscribe(value => {
      const marriedControl = this.myForm.get('married');
      console.log(marriedControl)

      if (value >= 18) {
        marriedControl?.setValidators([Validators.required]); // difference between setValidators and addValidators is that setValidators will replace any existing validators, while addValidators will add to the existing ones.
        // marriedControl?.addAsyncValidators([Validators.required]); // this is used for async validators, but we are not using it here
        // marriedControl?.setAsyncValidators([Validators.required]); // this is used for async validators, but we are not using it here
        // console.log(marriedControl?.validator) // this will show the current validators
        // console.log(marriedControl?.asyncValidator) // this will show the current async validators
        // console.log(marriedControl?.hasValidator(Validators.required)) // this will check if the control has the required validator
        // console.log(marriedControl?.hasAsyncValidator(Validators.required)) // this will check if the control has the required async validator
        // console.log(marriedControl?.hasValidator(Validators.required) && marriedControl?.hasAsyncValidator(Validators.required)) // this will check if the control has both the required and async validators
        // console.log(marriedControl?.hasValidator(Validators.required) || marriedControl?.hasAsyncValidator(Validators.required)) // this will check if the control has either the required or async validators
        // console.log(marriedControl?.hasValidator(Validators.required) && marriedControl?.hasAsyncValidator(Validators.required)) // this will check if the control has both the required and async validators
        // console.log(marriedControl?.hasValidator(Validators.required) || marriedControl?.hasAsyncValidator(Validators.required)) // this will check if the control has either the required or async validators
        // console.log(marriedControl?.hasValidator(Validators.required) && marriedControl?.hasAsyncValidator(Validators.required)) // this will check if the control has both the required and async validators    

        

      } else {
        // marriedControl?.clearAsyncValidators // what is the difference between clearAsyncValidators and clearValidators?
        marriedControl?.clearValidators();
      }
      marriedControl?.updateValueAndValidity();
    })


    ////////////////////////////////////////////////////////
    this.myForm2 = this.fb.group({
      name: ['', Validators.required]
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
      console.log('Form is invalid', this.myForm);
      this.myForm.markAllAsTouched();
    }
  }


  toggleValidators() {
    const control = this.myForm2.get('name');
    // console.log(control?.validator ,Validators.required)
    if(control?.hasValidator && control.hasValidator(Validators.required)) {
      // console.log('removing validators');
      control?.clearValidators();
    } else {
      control?.setValidators([Validators.required])
    }
    control?.updateValueAndValidity();
    console.log(control?.errors);
  }



}


