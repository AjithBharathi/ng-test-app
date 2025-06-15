import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, computed, ElementRef, inject, OnChanges, OnInit, signal, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { OrderService } from './order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges, AfterViewInit, AfterViewChecked, 
AfterContentChecked, AfterContentInit {
  @ViewChild('f', {static: false}) temForm!:NgForm;
  
  @ViewChild('myButton') myButtonRef!: ElementRef<HTMLButtonElement>;
  // myForm:FormGroup = new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required, Validators.minLength(8)])
  // })

  myForm:FormGroup;

  namee = signal('ajth')

  name2 = computed

  changename() {
    // this.namee.set("ajith bharathi")
    this.namee.update(name => {
      console.log(name)
      return name = name+' gunasekaran'
    })
  }

  constructor(private fb:FormBuilder){
    console.log('app constructor')
    this.myForm = this.fb.group({
      name: '',
      email: '',
      password: '',
      hobbies: this.fb.array([])
    })
  }

  onSubmit(){
    console.log(this.myForm.value);
    console.log(this.myForm.controls);
    console.log(this.myForm);
  }

  // get getmyForm(){
  //   return this.myForm.controls;
  // }

  get formHobbies() {
    return this.myForm.get('hobbies') as FormArray
  }

  addHobby() {
    const newHobby = this.fb.group({
      title: '',
      checked: false
    })

    this.formHobbies.push(newHobby)
  }

  remoeveHobby(i: number) {
    // 
    this.formHobbies.removeAt(i)
  }
  removeAllHobbies() {
    this.formHobbies.clear()
  }

  

  onSubmitt(){
    // console.log(this.temForm.value);
  }

  name = 'ajith';
  email = 'ajith@mail.com';
  password = 'ajith123';
  hobbies = 'cricket, football, badminton';

  service = inject(OrderService);

  ngOnInit() {
    console.log('app oninit')
    this.service.name.subscribe((name: string) => {
      // console.log(name);
      this.name = name;
    });
    this.service.email.subscribe((name: string) => {
      // console.log(name);
      this.email = name;
    });
    this.service.password.subscribe((name: string) => {
      // console.log(name);
      this.password = name;
    });
    this.service.hobbies.subscribe((name: string) => {
      // console.log(name);
      this.hobbies = name;
    });
  }

  ngOnChanges() {
    console.log('app on changes')
  }

  ngAfterContentInit(): void {
    console.log('app after content init')
  }
  ngAfterContentChecked(): void {
    console.log('app after content checked')

  }

  ngAfterViewChecked(): void {
    console.log('app after view checked')
  }

  ngAfterViewInit(): void {
    console.log('app after view init')
    // this.myButtonRef.nativeElement.style.backgroundColor = 'red';
    // this.myButtonRef.nativeElement.style.color = 'white';
    // this.myButtonRef.nativeElement.style.fontSize = '20px';
    // this.myButtonRef.nativeElement.style.padding = '10px';
  }
}
