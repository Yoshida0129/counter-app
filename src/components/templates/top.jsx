import React from 'react';

import timetableContainer from '../organisms/timetableContainer';
import commentList from '../molecules/commentList'
import loading from './loading'
import deathCount from '../organisms/deathCount';
import reason from '../organisms/reason'

import '../../assets/common.css';
import '../../assets/index.css';

const top = ({data}) => {
  if(!data.reason){
    return(
      <>
        {loading()}
      </>
    )
  }
  return (
    <div className="app">
      <section className="title-container">
        {deathCount(data.count)}
      </section>
      <section>
        {reason(data.reason)}
      </section>
      <section className="progress-container">
        {timetableContainer(data.progress)}
      </section>
      <section>
        {commentList(data.comment)}
      </section>
    </div>
  );
}

export default top