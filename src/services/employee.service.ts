import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../app/employee/Employee';

@Injectable()
export class EmployeeService {
  private configUrl = 'http://localhost:3000/employees';
  constructor(private httpService: HttpClient) {}

  // Service method to get all employee records
  getAllEmployees(): Observable<Employee[]> {
    try {
      return this.httpService.get<Employee[]>(this.configUrl);
    } catch (error) {
      console.log(error);
      return new Observable<Employee[]>();
    }
  }

  //  Service method to insert/update the employees records
  saveUpdateEmployee(id: number, employee: Employee): Observable<Employee> {
    if (!employee) throw new Error('No data found');

    if (id > 0) return this.updateEmployee(id, employee);
    else return this.insertEmployee(employee);
  }

  //  To insert a new employee
  private insertEmployee(employee: Employee) {
    try {
      return this.httpService.post<Employee>(this.configUrl, employee);
    } catch (error) {
      console.log(error);
      return new Observable<Employee>();
    }
  }

  //  To update the existing employee
  private updateEmployee(id: number, employee: Employee) {
    try {
      return this.httpService.put<Employee>(
        this.configUrl + '/' + id,
        employee
      );
    } catch (error) {
      console.log(error);
      return new Observable<Employee>();
    }
  }

  //  Service method to delete the employees record
  deleteEmployee(id: number) {
    if (!id) throw new Error('No employee specified');

    try {
      return this.httpService.delete(this.configUrl + '/' + id);
    } catch (error) {
      console.log(error);
      return new Observable<Employee>();
    }
  }
}
