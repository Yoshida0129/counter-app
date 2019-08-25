import React from 'react';
/*
* content => string : number
* size => number
*/
export const appText = (content, size) => {
  return(
    <p
      style={{
        'fontSize': size
      }}
    >
      {content}
    </p>
  )
}