import React from 'react'

import Flag from '@iamvinitk/world-flags'

const App = () => {
  return (
    <div>
      <h3>India Flag</h3>
      <Flag
        code='IN'
        fallback={<span>Unknown</span>}
        style={{ height: '100px' }}
      />
    </div>
  )
}

export default App
