import React from 'react';
import {appText} from '../atoms/appText'

export const eventContainer = () => {
  return(
    <section>
      <h2>開始時間</h2>
      {appText('2019/08/25 22:19', 18)}
      {appText('~現在プレイ中~', 18)}
    </section>
  )
}