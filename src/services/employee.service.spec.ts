import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;
  beforeEach(() => {
    service = new EmployeeService();
  });

  it('should return employee records', () => {
    let employees = service.getAllEmployees();

    expect(employees.length).toBeGreaterThan(0);
  });

  it('should insert a new employee and return the inserted employee record', () => {
    let employee = {
      firstName: 'Mo',
      lastName: 'Abjal',
      contactNumber: '9012114316',
      email: 'mohdafzal330@gmail.com',
      dob: '08/01/1997',
      address: 'Bareilly - UP, India',
    };
    let returnedNmployee = service.insertEmployee(employee);

    expect(returnedNmployee).toEqual(employee);
  });
});
