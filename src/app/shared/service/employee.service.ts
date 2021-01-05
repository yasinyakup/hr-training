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

  constructor(private httpClient: HttpClient) { }

  getEmpWithHour(): Observable<EmpWithHour[]> {
    return this.httpClient.get<EmpWithHour[]>(this.baseURL+"trainings");
  }

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseURL+"employees");
  }

  getEmployee(empNo: string): Observable<Employee> {
    return this.httpClient.get<Employee>(this.baseURL+"employees/"+empNo);
  }

  sendPostEmp(data: any): Observable<any> {
    return this.httpClient.post<any>(this.baseURL+"employee", data);
}
getEmployeeByDeptId(deptId: number): Observable<any> {
  return this.httpClient.get<any>(this.baseURL+"employees/dept/"+deptId);
}

}
