import { EmployeeService } from 'src/services/employee.service';
import { EmployeeComponent } from './employee.component';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let service: EmployeeService;

  beforeEach(() => {
    component = new EmployeeComponent(new EmployeeService());
    service = new EmployeeService();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with 6 controls', () => {
    expect(component.form.contains('firstName')).toBeTruthy();
    expect(component.form.contains('lastName')).toBeTruthy();
    expect(component.form.contains('contactNumber')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('dob')).toBeTruthy();
    expect(component.form.contains('address')).toBeTruthy();
  });

  it('should create the controls as required', () => {
    let firstName = component.form.get('firstName');
    let lastName = component.form.get('lastName');
    let contactNumber = component.form.get('contactNumber');
    let email = component.form.get('email');
    let dob = component.form.get('dob');
    let address = component.form.get('address');

    firstName?.setValue('');
    lastName?.setValue('');
    contactNumber?.setValue('');
    email?.setValue('');
    dob?.setValue('');
    address?.setValue('');

    expect(component.isValidControl('firstName')).toBeFalsy();
    expect(component.isValidControl('lastName')).toBeFalsy();
    expect(component.isValidControl('contactNumber')).toBeFalsy();
    expect(component.isValidControl('email')).toBeFalsy();
    expect(component.isValidControl('dob')).toBeFalsy();
    expect(component.isValidControl('address')).toBeFalsy();
  });

  it('should get the employees and push into existing records', () => {
    let employees = [
      {
        firstName: 'Mo',
        lastName: 'Abjal',
        contactNumber: '9012114316',
        email: 'mohdafzal330@gmail.com',
        dob: '08/01/1997',
        address: 'Bareilly - UP, India',
      },
    ];
    spyOn(service, 'getAllEmployees').and.callFake(() => {
      return employees;
    });

    component.ngOnInit();

    expect(component.employeeRecords).toEqual(employees);
  });
});
