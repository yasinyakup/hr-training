import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ControlContainer } from '@angular/forms';
import { BasicService } from 'src/app/shared/service/basic.service';
import { EmployeeService } from 'src/app/shared/service/employee.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit {

  formGroup!: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';
  depts: any[] = ['Bilgi işlem', 'Satın alma', 'Modül Hattı işletme', 'Cell hattı işletme'];
  titles: any[] = ['Mühendis', 'Operatör', 'Şef', 'Müdür'];
  genders: any = ['Erkek', 'Bayan', 'Bilinmiyor'];
  date = new FormControl(new Date());
  constructor(private formBuilder: FormBuilder, private basicService: BasicService, private employeeService: EmployeeService) {

   
    
   }

  ngOnInit() {
    this.createForm();
    this.setChangeValidate();
    this.getDeptData();
    this.getTitleData();
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'empNo': [null, [Validators.required, Validators.maxLength(11), this.checkEmp]],
      'email': [null, [Validators.required, Validators.pattern(emailregex)]],
      'fullName': [null, Validators.required],
      'hireDate': [null, Validators.required],
      'dob': [null, Validators.required],
      'dept': [null, Validators.required],
      'title': [null, Validators.required],
      'gender': [null, Validators.required],
     // 'password': [null, [Validators.required, this.checkPassword]],
     // 'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      'validate': ''
    });
  }


  getDeptData() {
    this.basicService.getDept().subscribe(data=>{
     this.depts = data
     console.log(this.depts);
    }
      )
  }

  saveEmployee(data: any){
    this.employeeService.sendPostEmp(data).subscribe(data=>
      console.log(data)
      );
  }

  getTitleData() {
    this.basicService.getTitle().subscribe(data=>{
     this.titles = data
     console.log(this.titles);
    }
      )
  }
  
  

  setChangeValidate() {
    this.formGroup.get('validate')!.valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.formGroup.get('fullName')!.setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = "You need to specify at least 3 characters";
        } else {
          this.formGroup.get('fullName')!.setValidators(Validators.required);
        }
        this.formGroup.get('fullName')!.updateValueAndValidity();
      }
    )
  }

  get name() {
    return this.formGroup.get('fullName') as FormControl
  }

  checkPassword(control: { value: any; }) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }

  checkEmp(control: { value: any;} ){
    let enteredEmp = control.value;
    let empCheck = /^(?=.*[0-9])/;
    return (!empCheck.test(enteredEmp) && enteredEmp) ? { 'requirements': true } : null;
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
    return this.formGroup.get('empNo')!.hasError('required') ? 'Field is required (Max 11 charecters)' :
      this.formGroup.get('empNo')!.hasError('maxLength') ? 'max 11 charachters':
      this.formGroup.get('empNo')!.hasError('requirements') ? 'EMP code must not include letter/special charechter' : '';
  }

  onSubmit(post: any) {
    //console.log(this.formGroup.value);
    this.saveEmployee(this.formGroup.value);
    this.succesALert();
    this.post = post;
    
  }


  succesALert(){
    Swal.fire(
      'Success!',
      'Employee saved successfully!',
      'success'
    )
  }

}