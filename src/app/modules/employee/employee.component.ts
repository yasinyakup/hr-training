import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/shared/model/employee';
import { EmployeeService } from 'src/app/shared/service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employee: Employee = new Employee; 
  emp : any[] = [];
  errorMessage?: string;
  dataSource!: MatTableDataSource<Employee>;
  employees: Employee[] = [];
 displayedColumns: String[]=['id','empNo', 'fullName', 'dept', 'title', 'hireDate', 'dob', 'gender', 'actions'];
 @ViewChild(MatSort, { static: false })  
 sort: MatSort = new MatSort;
 @ViewChild(MatPaginator, { static: false })
 paginator!: MatPaginator;

  constructor(private employeeService: EmployeeService) {
   // this.getEmployee();
    this.getEmployees();
   
   }

  ngOnInit(): void {
   
  }

  ngAfterViewInit() {
 
  }
  applyFilter(event: any){
    const userFilterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = userFilterValue.trim().toLocaleLowerCase();
 }

 getEmployee(){
  this.employeeService.getEmployee().subscribe(data=>{
    this.employee = data;
    console.log(this.employee);
  },
  err=>{
        this.errorMessage =  JSON.parse(err.error).message;
        console.log(this.errorMessage);
        
  }
    );
 }

 getEmployees(){
   this.employeeService.getEmployees().subscribe(
     data=>{
  this.employees = data;
  
   this.dataSource = new MatTableDataSource(data);
   //console.log(this.dataSource);
   this.dataSource.sort = this.sort;
   this.dataSource.paginator = this.paginator;

  }
    )
 }

}
