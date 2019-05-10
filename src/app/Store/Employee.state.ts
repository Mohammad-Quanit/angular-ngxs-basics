import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Employee } from '../Employee.model';
import { AddEmployee } from '../Actions/Employee.action';


export class EmployeeStateModel {
  employees: Employee[]
}

// Employee state model where name prop is the name of our store
@State<EmployeeStateModel>({
  name: 'employees',
  defaults: {
    employees: []
  }
})
export class EmployeeState {
  @Selector()
  static getEmployees(state: EmployeeStateModel) {
    return state.employees;
  }

  @Action(AddEmployee)
  addEmployee({ getState, patchState }: StateContext<EmployeeStateModel>, { payload }: AddEmployee) {
    const state = getState();
    patchState({ employees: [...state.employees, payload] });
  }
}
