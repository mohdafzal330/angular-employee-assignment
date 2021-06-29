import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  public employeeRecords: any[] = [];

  //  Preparing Reactive form froup object
  public form = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
    ]),
    contactNumber: new FormControl('', [
      Validators.required,
      Validators.maxLength(15),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.maxLength(200),
    ]),
    dob: new FormControl('', [Validators.required]),
    address: new FormControl('', [
      Validators.required,
      Validators.maxLength(500),
    ]),
  });
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getAllEmployee();
  }

  //  To get all employees
  getAllEmployee() {
    try {
      this.employeeRecords = this.employeeService.getAllEmployees();
    } catch (error) {
      console.log(error);
    }
  }

  // To insert employee
  addEmployee() {
    try {
      this.employeeService.insertEmployee(this.form.value);
    } catch (error) {
      console.log(error);
    }
  }

  //  Method to detect weather a control is valid or not
  isValidControl(controlName: string) {
    let control = this.getControl(controlName);
    return control && control.touched && control.invalid;
  }

  //  Private method to get perticular control object
  private getControl(controlName: string) {
    return this.form.get(controlName);
  }
}
