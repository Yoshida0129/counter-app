import React from 'react';
import '../../assets/common.css';
/**
 * 
 * @param array comment 
 */
const comments = (comment) => comment.map((val, index) => <li key={`comment-${index}`}>{ val }</li>)

export default comments