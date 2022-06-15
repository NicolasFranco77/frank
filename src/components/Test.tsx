import React from 'react'

import Test2 from './Test2'

function Test() {

  const users = [
    {name: 'nico',
    id: 1
  
  }
  ]


  return (
    <>
    <div>Test</div>
    <Test2 users = {users} />
    </>
  )
}

export default Test