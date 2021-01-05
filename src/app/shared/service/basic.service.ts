import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicService {

  private baseURL= "http://localhost:8080/basic/";

  constructor(private httpClien: HttpClient) { }

  getDept(): Observable<any[]>{
    return this.httpClien.get<any[]>(this.baseURL+'dept');
  }

  getTitle(): Observable<any[]>{
    return this.httpClien.get<any[]>(this.baseURL+'title');
  }

  getTraining(): Observable<any[]>{
    return this.httpClien.get<any[]>(this.baseURL+'training');
  }
}
