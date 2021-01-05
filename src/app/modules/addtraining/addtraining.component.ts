import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/shared/model/employee';
//import { startWith, map } from 'rxjs/operators';
import { BasicService } from 'src/app/shared/service/basic.service';
import { EmployeeService } from 'src/app/shared/service/employee.service';

@Component({
  selector: 'app-addtraining',
  templateUrl: './addtraining.component.html',
  styleUrls: ['./addtraining.component.scss']
})
export class AddtrainingComponent implements OnInit {

  formGroup!: FormGroup;
  depts: any = ['Bilgi işlem', 'Satın alma', 'Modül Hattı işletme', 'Cell hattı işletme'];
  tns: any = ['MES Cell', 'MES Module', 'MES Wafer', 'MES Ingot'];

  dataSource!: MatTableDataSource<any>;
  empNo!: string;

  tData: any[] = [];
  dataSourceByDept: MatTableDataSource<Employee> = new MatTableDataSource(this.tData);

  post: any = '';
  options: any;
  filteredOptions!: any;
   myControl = new FormControl();

   displayedColumns: String[]=['id','empNo', 'fullName', 'dept', 'title', 'hireDate', 'dob', 'gender', 'delete'];
   @ViewChild(MatSort, { static: false })  
   sort: MatSort = new MatSort;

  constructor(private formBuilder: FormBuilder, private basicService: BasicService, private employeeService: EmployeeService) { }

  ngOnInit(): void {

    
    this.createForm();
    this.getDeptData();
    this.getTrainingData();
    this.getAllEmp();
   
/*
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    */
  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'tn': [null, Validators.required],
      'td': [null, Validators.required]
    });
  }

  getDeptData() {
    this.basicService.getDept().subscribe(data=>{
     this.depts = data
     console.log(this.depts);
    }
      )
  }

  getTrainingData() {
    this.basicService.getTraining().subscribe(data=>{
     this.tns = data
     console.log(this.tns);
    }
      )
  }

  getAllEmp(){
    this.employeeService.getEmployees().subscribe(data=>{
      this.options = data;
      console.log(this.options);
      this.dataSource = new MatTableDataSource(this.options);
    })
  }

  getEmpByDept(deptId: number){
    this.employeeService.getEmployeeByDeptId(deptId).subscribe(data=>{
    
      this.tData = data;
      this.dataSourceByDept = new MatTableDataSource(this.tData);
      this.dataSourceByDept.sort = this.sort;
    })
  }

  /*
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
*/

applyFilter(event: any){
  const userFilterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = userFilterValue.trim().toLocaleLowerCase();
  this.options = this.dataSource.filteredData;
}


  onSubmit(post: any) {
    console.log(this.formGroup.value);
    this.post = post;
    
  }
  
  getSelectedDept(e: any){
    console.log(e.value.id);
    this.getEmpByDept(e.value.id);
  }

  deleteEmp(e: any){
    console.log(e);
    this.tData.splice(this.tData.indexOf(e),1);
    this.dataSourceByDept._updateChangeSubscription();
  }
 
  addEmp(){
    console.log( this.myControl);
    this.empNo= this.myControl.value;
    this.empNo = this.empNo.substring(this.empNo.trim().indexOf(", ")+2);
    
    this.employeeService.getEmployee(this.empNo).subscribe(data=>{
      this.tData.push(data);
      this.dataSourceByDept._updateChangeSubscription();
    }
      );
      
   
   console.log(this.tData); 
  }

}
