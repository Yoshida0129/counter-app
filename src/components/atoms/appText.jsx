import React from 'react';
import '../../assets/common.css';
/*
* content => string : number
* size => number
*/
const appText = (content, size) => (
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