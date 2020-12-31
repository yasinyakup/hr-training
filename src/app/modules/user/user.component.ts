import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmpWithHour } from 'src/app/shared/model/emp-with-hour';
import { EmployeeService } from 'src/app/shared/service/employee.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
 dataSource!: MatTableDataSource<EmpWithHour>;
 users: EmpWithHour[] = [];
 displayedColumns: String[]=['id','empNo', 'fullname', 'dept', 'title', 'actions'];
 @ViewChild(MatSort, { static: true })  sort: MatSort = new MatSort;
 @ViewChild(MatPaginator, { static: true })
 paginator!: MatPaginator;

  constructor(private employeeService: EmployeeService) {
    this.getEmpWithHour();
   }

  ngOnInit(): void {
   
    this.dataSource = new MatTableDataSource(this.users);
    console.log(this.users);
  }

  getEmpWithHour(){
    this.employeeService.getEmpWithHour().subscribe(data => {
          this.users = data;
    })
  }

  applyFilter(event: any){
    const userFilterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = userFilterValue.trim().toLocaleLowerCase();
 }

}
