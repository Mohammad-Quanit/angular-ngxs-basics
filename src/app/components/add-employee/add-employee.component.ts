import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from '@ngxs/store';
import { AddEmployee } from 'src/app/Actions/Employee.action';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  hasVehicle = false;
  employeeForm: FormGroup = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    age: ['', Validators.required],
    address: ['', Validators.required],
    hasOwnVehicle: [''],
    department: ['', Validators.required],
    cnic: ['', Validators.required],
  })

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit() {
  }

  getRandomId(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  hasVehicleChange() {
    this.hasVehicle = !this.hasVehicle;
  }

  submitData() {
    this.employeeForm.controls['id'].setValue(this.getRandomId(100000));
    this.store.dispatch(new AddEmployee(this.employeeForm.value));
    console.log(this.employeeForm.value);
  }
}
