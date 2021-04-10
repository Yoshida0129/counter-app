import React from 'react';

import progress from '../molecules/progress'
import commentList from '../molecules/commentList'

import Loading from '../organisms/Loading'

import '../../assets/common.css';
import '../../assets/index.css';

const top = ({data}) => {
  if(!data.reason){
    return(
      <Loading/>
    )
  }
  return (
    <div 
      className="app"
    >
      <section
        className="title-container"
      >
        <h1>現在のdeath count</h1>
        <p
          className='count-font'
        >
          {data.count}
        </p>
      </section>
      <p
        className="comment"
      >
        {`最近の死は.........${data.reason}`}
      </p>
      <section
        className="progress-container"
      >
        <h2>進捗</h2>
        {progress(data.progress)}
      </section>
      {commentList(data.comment)}
    </div>
  );
}

export default top