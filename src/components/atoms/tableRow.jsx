
import React from 'react';
import '../../assets/common.css';
/*
*[
  {
    progress: string
    count: number
    time: datetime
  }
]
*/
const tableRow = (props) => {
  let list = []
  props.forEach((value, index) => {
    list.push(
      <tr
        key={`tr-${index}`}
        className='tb-row'
        style={{
          'backgroundColor': !(index % 2) ? '#fbfbfb' : '#ebebeb'
        }}
      >
        <td 
          key={`first-${index}`}
          className='tx-center'
        >
          {value.progress}
        </td>
        <td 
          key={`second-${index}`}
          className='tx-center'
        >
          {value.count}
        </td>
        <td 
          key={`third-${index}`}
          className='tx-center'
        >
          {value.time}
        </td>
      </tr>
    )
  })
  return list
}

export default tableRow