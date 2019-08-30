import React, {Component} from 'react';
import {tableRow, comments} from './atoms'
import '../assets/common.css';

const twttr = require('twitter-widgets')

export const eventContainer = () => {
  return(
    <section>
      <h2>時間及び結果</h2>
      <details>
        <summary>1日目: 2019/08/25 22:19 ~ 2019/08/26 8:30</summary>
      playerが寝落ち、PS4をdが持って帰った為、終了
      <ItemTweet/>
      </details>
      <details>
        <summary>2日目: 2019/08/30 21:00 ~ 進行中</summary>
        ふぁいと
      </details>
    </section>
  )
}

/**
* @param {array} props
*/
export const progress = (props) => {
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

/**
 * 
 * @param {array} props 
 */
export const commentList = (props) => {
  return(
    <section>
      <h2>観戦者からのコメント</h2>
      <ul>{comments(props)}</ul>
    </section>
  )
}

export class ItemTweet extends Component {
  componentDidMount() {
    twttr.load()
  }
  render(){
    return (
      <div>
        <blockquote className="twitter-tweet">
          <p lang="ja" dir="ltr">大木選手<br/>エミーリアの後ヘムウィックを討伐したのち<br/>8:30で休憩にはいったまま起きません。
          </p>&mdash; dai💸 (@dainbe1231) 
          <a href="https://twitter.com/dainbe1231/status/1165811141395664896?ref_src=twsrc%5Etfw">August 26, 2019</a>
        </blockquote>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </div>
  )}
}