import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/Employee.model';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  employees: Observable<Employee>

  constructor(private store: Store) {
    this.employees = this.store.select(state => state.employees.employees);
    this.employees.forEach(data => console.log(data));
  }

  ngOnInit() {
  }

}
