import { Employee } from '../Employee.model';

export class AddEmployee {
  static readonly type = '[Employee] AddEmployee';
  constructor(public payload: Employee) { }
}

export class RemoveEmployee {
  static readonly type = '[Employee] RemoveEmployee';
  constructor(public id: Employee) { }
}


