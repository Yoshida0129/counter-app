import React from 'react'

import progress from '../molecules/progress'

const timetableContainer = (timetableList) => {
  return (
    <section>
      <h2>進捗</h2>
      {progress(timetableList)}
    </section>
  )
}

export default timetableContainer