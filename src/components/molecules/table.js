import React from 'react';
import {tableRow} from '../atoms/tableRow';

import '../../assets/common.css';
/*
* props => array
*/
export const progress = (props) => {
  console.log(props)
  return(
    <table>
      <thead>
        <tr
          className='th-row'
        >
          <th>進行度</th>
          <th>デス数</th>
          <th>かかった時間</th>
        </tr>
      </thead>
      <tbody>
        {tableRow(props)}
      </tbody>
    </table>
  )
}