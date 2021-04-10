import React from 'react';

import tableRow from '../atoms/tableRow'

import '../../assets/common.css';

/**
* @param {array} props
*/
const progress = (props) => {
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

export default progress