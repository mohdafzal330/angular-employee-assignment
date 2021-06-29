export class EmployeeService {
  // Static data for employees
  private employees = [
    {
      firstName: 'Mo',
      lastName: 'Abjal',
      contactNumber: '9012114316',
      email: 'mohdafzal330@gmail.com',
      dob: '08/01/1997',
      address: 'Bareilly - UP, India',
    },
  ];

  // Service method to get all employee records
  getAllEmployees() {
    return this.employees ? this.employees : [];
  }

  //  Service method to insert the employees records
  insertEmployee(employee: any) {
    if (!employee) throw new Error('No data found');

    this.employees.push(employee);
    return employee;
  }
}
