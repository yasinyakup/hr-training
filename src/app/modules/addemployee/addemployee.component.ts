import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ControlContainer } from '@angular/forms';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit {

 formGroup!: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';

  constructor(private formBuilder: FormBuilder) {
    
   }

  ngOnInit() {
    this.createForm();
    this.setChangeValidate()
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'empCode': [null, [Validators.required, Validators.maxLength(11)]],
      'email': [null, [Validators.required, Validators.pattern(emailregex)]],
      'name': [null, Validators.required],
      'password': [null, [Validators.required, this.checkPassword]],
      'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      'validate': ''
    });
  }
  

  setChangeValidate() {
    this.formGroup.get('validate')!.valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.formGroup.get('name')!.setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = "You need to specify at least 3 characters";
        } else {
          this.formGroup.get('name')!.setValidators(Validators.required);
        }
        this.formGroup.get('name')!.updateValueAndValidity();
      }
    )
  }

  get name() {
    return this.formGroup.get('name') as FormControl
  }

  checkPassword(control: { value: any; }) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }

  /*
  checkInUseEmail(control: { value: string; }) {
    // mimic http database access
    let db = ['tony@gmail.com'];
    return new Observable((observer: { next: (arg0: { alreadyInUse: boolean; } | null) => void; complete: () => void; }) => {
      setTimeout(() => {
        let result = (db.indexOf(control.value) !== -1) ? { 'alreadyInUse': true } : null;
        observer.next(result);
        observer.complete();
      }, 4000)
    })
  }
  */

  getErrorEmail() {
    return this.formGroup.get('email')!.hasError('required') ? 'Field is required' :
      this.formGroup.get('email')!.hasError('pattern') ? 'Not a valid emailaddress' :
        this.formGroup.get('email')!.hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  }

  getErrorPassword() {
    return this.formGroup.get('password')!.hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
      this.formGroup.get('password')!.hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  }

  getErrorEmpCode() {
    return this.formGroup.get('empCode')!.hasError('required') ? 'Field is required (Max 11 charecters)' :
      this.formGroup.get('empCode')!.hasError('maxLength') ? '' : 'max 11 charachters';
  }

  onSubmit(post: any) {
    this.post = post;
  }

}