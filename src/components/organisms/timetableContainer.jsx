import React from 'react'

import progress from '../molecules/progress'

const timetableContainer = (timetableList) => {
  return (
    <>
      <h2>進捗</h2>
      {progress(timetableList)}
    </>
  )
}

export default timetableContainer