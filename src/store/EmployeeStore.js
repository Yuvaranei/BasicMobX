import data from '../data/employeeData';
import { observable, decorate, action,computed } from 'mobx';

class EmployeeStore {
    employeeList = data;

    clearList() {
        this.employeeList = []
    }

    get totalSum() {
        let sum = 0
        this.employeeList.map( e => sum = sum + Number(e.salary))
        return sum
      }
    
    pushEmployee(employeeObj) {
        this.employeeList.push(employeeObj)
    }
}

decorate(EmployeeStore, {
    employeeList: observable,
    clearList: action,
    pushEmployee: action,
    totalSum: computed
  })

export default new EmployeeStore();
