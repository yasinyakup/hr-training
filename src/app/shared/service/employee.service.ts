import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpWithHour } from '../model/emp-with-hour';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL= "http://localhost:8080/logictest/";

  constructor(private httpClien: HttpClient) { }

  getEmpWithHour(): Observable<EmpWithHour[]> {
    return this.httpClien.get<EmpWithHour[]>(this.baseURL+"trainings");
  }

  getEmployees(): Observable<Employee[]> {
    return this.httpClien.get<Employee[]>(this.baseURL+"employees");
  }

  getEmployee(): Observable<Employee> {
    return this.httpClien.get<Employee>(this.baseURL+"employees/1000");
  }
}
