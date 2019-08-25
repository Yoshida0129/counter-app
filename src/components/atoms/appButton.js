import React from 'react';
import '../../assets/style.css';
/*
* action => function
* title => string
* style => {{key: string}: string}
*/
export const appButton = (action, title, style) => {
  return(
    <button
      onClick={action}
      style={style}
    >
      {title}
    </button>
  )
}