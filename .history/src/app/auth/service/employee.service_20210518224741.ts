import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'environments/environment';
import { Employee } from '../models/Employee';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  /**
   *
   * @param {HttpClient} _http
   */
  constructor(private _http: HttpClient) {}

  /**
   * Get all employees
   */
  getAll() {
    return this._http.get<Employee[]>(`${environment.apiUrl}/employees`);
  }

  /**
   * Get employee by id
   */
  getById(id: number) {
    return this._http.get<Employee>(`${environment.apiUrl}/Employee/${id}`);
  }
}
