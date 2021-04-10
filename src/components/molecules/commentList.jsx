import React from 'react';
import comments from '../atoms/comments'
import '../../assets/common.css';

/**
 * 
 * @param {array} props 
 */
const commentList = (props) => {
  return(
    <section>
      <h2>観戦者からのコメント</h2>
      <ul>{comments(props)}</ul>
    </section>
  )
}

export default commentList