import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/model/employee';
import { EmployeeService } from 'src/app/shared/service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employee: Employee = new Employee; 
  errorMessage?: string;

  constructor(private employeeService: EmployeeService) {
    
   }

  ngOnInit(): void {
    
    this.employeeService.getEmployee().subscribe(data=>{
      this.employee = data
    },
    err=>{
          this.errorMessage =  JSON.parse(err.error).message;
          
    }
      );

      console.log(this.employee);

  }

}
