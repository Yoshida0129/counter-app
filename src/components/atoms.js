import React from 'react';
import '../assets/common.css';
/*
* content => string : number
* size => number
*/
export const appText = (content, size) => (
  <p
    style={{
      'fontSize': size,
      'textAlign': 'center'
    }}
  >
    {content}
  </p>
)

/*
*[
  {
    progress: string
    count: number
    time: datetime
  }
]
*/
export const tableRow = (props) => {
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

/**
 * 
 * @param array comment 
 */
export const comments = (comment) => comment.map((val, index) => <li key={`comment${index}`}>{ val }</li>)

