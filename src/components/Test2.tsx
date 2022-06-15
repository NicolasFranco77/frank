import React from 'react'

function Test2({users}) {

  

  return (
 <div>


{users.map(user => (
    <div key={user.id}>{user.name}</div>
))}
 </div>
  )
}

export default Test2