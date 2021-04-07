import { Injectable } from '@angular/core';
import { IemployeeSettings } from './employee.model';
import { Observable, of } from 'rxjs';
import {  HttpClient } from '@angular/common/http';
import { EmployeeComponent } from '../employee/employee.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor(private http:HttpClient) { }

  getQualification():Observable<string[]>{
    return of(['B.Tech','M.Tech','BCA','MCA']);
  }

  getExperience():Observable<string[]>{
    return of(['0-2 years','3-4 years','4-6 years','6-12 years','above 12 years']);
  }




}

