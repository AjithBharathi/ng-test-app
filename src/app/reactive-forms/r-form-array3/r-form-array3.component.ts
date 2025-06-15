import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray, Form } from '@angular/forms';

@Component({
  selector: 'app-r-form-array3',
  templateUrl: './r-form-array3.component.html',
  styleUrls: ['./r-form-array3.component.scss']
})
export class RFormArray3Component {
  myForm: FormGroup;
    formSubmitted: boolean = false;
  
    constructor(private fb: FormBuilder) {
      this.myForm = this.fb.group({
        industry: ['', Validators.required],
        companies: this.fb.array([])  // Initialize with an empty array
      });
    }
  
    get companies(): FormArray {
      return this.myForm.get('companies') as FormArray;
    }
  
    getemployees(i:number): FormArray | null {
      // const company = this.companies.at(i) as FormGroup;
      // return company ? (company.get('employees') as FormArray) : null;
      return (this.companies.at(i) as FormGroup)?.get('employees') as FormArray || null;
    }
  
    addCompany() {
      const companyGroup = this.fb.group({
        companyName: ['', Validators.required],
        employees: this.fb.array([])  // Initialize with an empty array for employees
      });
      this.companies.push(companyGroup);
    }
  
    addEmployee(i:number) {
      const employeeGroup = this.fb.control(
        ''
        // ['', Validators.required],
      );
     this.getemployees(i)?.push(employeeGroup);
      // const employeesArray = this.getemployees(i);
      // if (employeesArray) {
      //   employeesArray.push(employeeGroup);
      // }
    }
  
    removeCompany(index: number) {
      this.companies.removeAt(index);
    } 
  
    removeEmployee(index: number, idx:number) {
      // const employeesArray = this.getemployees(index);
      // if (employeesArray) {
      //   employeesArray.removeAt(index);
      // }
      this.getemployees(index)?.removeAt(idx);
  
    }
  
  
    ngOnInit() {
      // You can add some initial employees if needed
      this.addCompany(); // Uncomment to add an initial company
      this.addEmployee(0); // Uncomment to add an initial employee to the first company
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
