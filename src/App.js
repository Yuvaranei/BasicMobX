import React, { Component } from 'react';
import './App.scss';
import Table from './Table';
import employeeStore from './store/EmployeeStore';
import {observer} from 'mobx-react';

class App extends Component {

  addRecord = ()=> {
    const name = prompt("The name:")
    const salary = prompt("The salary:")
    console.log("employeeList",employeeStore.employeeList)
    // debugger;
    
    employeeStore.pushEmployee({name, salary});
  }


  clearTable = ()=> {
    // debugger;
    employeeStore.clearList();
  }


  render() {
    
    return (
      <div className="App">
        <h2>Mobx Table</h2>
        <hr/>
        <button onClick={this.clearTable}>Clear Table</button>
        <button onClick={this.addRecord}>Add Record</button>
        <Table store={employeeStore}/>
        
      </div>
    );
  }
}
App = observer(App)
export default App;
