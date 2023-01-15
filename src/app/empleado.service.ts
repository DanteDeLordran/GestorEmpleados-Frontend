import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //Get all employees
  private baseUrl : string = 'http://localhost:8080/api/v1/empleados';
  constructor  ( private httpClient : HttpClient ) { }

  public getEmployeeList() : Observable<Empleado[]> {
    return this.httpClient.get<Empleado[]>(`${this.baseUrl}`);
  }

}
