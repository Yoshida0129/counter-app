
import React, {Component} from 'react';
import '../../assets/common.css';

const twttr = require('twitter-widgets')

export default class ItemTweet extends Component {
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
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </div>
  )}
}
