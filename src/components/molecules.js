import React from 'react';
import {appText, tableRow} from './atoms'
import '../assets/common.css';

export const eventContainer = () => {
  return(
    <section>
      <h2>開始時間</h2>
      {appText('2019/08/25 22:19 ~ ', 18)}
      {appText('~ 2019/08/26 8:30', 18)}
      {appText('playerが寝落ち、PS4をdが持って帰った為、終了', 18)}
    </section>
  )
}

/*
* props => array
*/
export const progress = (props) => {
  console.log(props)
  return(
    <table>
      <thead>
        <tr
          className='th-row'
        >
          <th>進行度</th>
          <th>デス数</th>
          <th>かかった時間</th>
        </tr>
      </thead>
      <tbody>
        {tableRow(props)}
      </tbody>
    </table>
  )
}

export const finishTweet = () => {
  return (
    <div>
      <blockquote className="twitter-tweet">
        <p lang="ja" dir="ltr">大木選手<br/>エミーリアの後ヘムウィックを討伐したのち<br/>8:30で休憩にはいったまま起きません。
        </p>&mdash; dai💸 (@dainbe1231) 
        <a href="https://twitter.com/dainbe1231/status/1165811141395664896?ref_src=twsrc%5Etfw">August 26, 2019</a>
      </blockquote>
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"/>
    </div>
  )
}