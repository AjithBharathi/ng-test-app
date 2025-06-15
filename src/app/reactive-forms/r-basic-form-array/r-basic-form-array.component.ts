import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray, Form } from '@angular/forms';

@Component({
  selector: 'app-r-basic-form-array',
  templateUrl: './r-basic-form-array.component.html',
  styleUrls: ['./r-basic-form-array.component.scss']
})
export class RBasicFormArrayComponent {
  myForm: FormGroup;
  formSubmitted: boolean = false;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      company: ['', Validators.required],
      employees: this.fb.array([])  // Initialize with an empty array
    });
  }

  get employees(): FormArray {
    return this.myForm.get('employees') as FormArray;
  }

  addEmployee() {
    const employeeGroup = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required]
    });
    this.employees?.push(employeeGroup);
    // const array = this.myForm.get('employees') as FormArray; // Ensure the type is correct
    // array.push(employeeGroup); // Add the new employee group to the FormArray
  }

  removeEmployee(index: number) {
    this.employees.removeAt(index);
  }


  ngOnInit() {
    // You can add some initial employees if needed
    this.addEmployee(); // Uncomment to add an initial employee
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



}
