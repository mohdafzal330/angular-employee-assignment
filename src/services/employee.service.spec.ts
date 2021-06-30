import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { Employee } from 'src/app/employee/Employee';
import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let http: HttpClient;

  beforeEach(() => {
    service = new EmployeeService(http); //tobe used with mock with employee service
  });

  it('should creat the service', () => {
    expect(service).toBeTruthy();
  });

  it('should return employee records', () => {
    let employeeRecords = [
      {
        firstName: 'Mo',
        lastName: 'Abjal khan',
        contactNumber: '9012114316',
        email: 'mh@gmail.com',
        dob: '2021-06-04',
        address: '44-Dahiya',
        id: 3,
      },
      {
        firstName: 'Noorul',
        lastName: 'Hassan',
        contactNumber: '9012114318',
        email: 'mo@gail.com',
        dob: '2021-06-12',
        address: '44-Daia',
        id: 4,
      },
    ];
    spyOn(service, 'getAllEmployees').and.callFake(() => {
      return of(employeeRecords);
    });
    let returnedEmployees: Employee[] = [];

    service.getAllEmployees().subscribe((response) => {
      returnedEmployees = response;
    });
    expect(service.getAllEmployees).toHaveBeenCalled();
    expect(returnedEmployees).toEqual(employeeRecords);
  });

  it('should insert a new employee and return the inserted employee record', () => {
    let employee: Employee = {
      id: 0,
      firstName: 'Mo',
      lastName: 'Abjal',
      contactNumber: '9012114316',
      email: 'mohdafzal330@gmail.com',
      dob: '08/01/1997',
      address: 'Bareilly - UP, India',
    };
    spyOn(service, 'saveUpdateEmployee').and.returnValue(of(employee));
    let newInsertedEmployee;
    service
      .saveUpdateEmployee(0, employee)
      .subscribe((r) => (newInsertedEmployee = r));

    expect(newInsertedEmployee).not.toBeNull();
  });

  it('should delete a employee from existing records', () => {
    spyOn(service, 'deleteEmployee').and.returnValue(of(true));
    let deleteStatus;

    service.deleteEmployee(1).subscribe((r) => (deleteStatus = r));

    expect(deleteStatus).toBeTruthy();
  });
});
