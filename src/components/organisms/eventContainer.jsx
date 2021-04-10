
import React from 'react';
import '../../assets/common.css';

import ItemTweet from '../molecules/ItemTweet'

const eventContainer = () => {
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

export default eventContainer