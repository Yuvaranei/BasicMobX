import React from 'react';
import Row from './Row';
import {observer} from 'mobx-react';

const getTableData = (store) => {
    console.log(store.employeeList)
    return <tbody>{
                store && store.employeeList.map(item =>{
                    return <Row key={item.name} name={item.name} price={item.salary}/>
                })
            }
        </tbody>
  }

const Table = (props) => {
    return(
        <table>
          <thead>
            <Row key='title' name='Name:' price='Price:'/>
          </thead>
          {getTableData(props.store)}
          <tfoot>
            <tr>
            <td>TOTAL:</td>
            <td>{props.store.totalSum}</td>
            </tr>
        </tfoot>
        </table>
    )
}
observer(Table)
export default observer(Table);