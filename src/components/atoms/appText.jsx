import React from 'react';
import '../../assets/common.css';
/*
* content => string : number
* size => number
*/
const appText = ({content, size=11}) => (
  <p
    style={{
      'fontSize': size,
      'textAlign': 'center'
    }}
  >
    {content}
  </p>
)

export default appText