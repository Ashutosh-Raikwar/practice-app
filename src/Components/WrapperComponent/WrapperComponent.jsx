import React from 'react'
import UserList from '../UserList/UserList'

function WrapperComponent(props) {
  return (
    <div style={{backgroundColor:"cyan"}}>
      <UserList />
    </div>
  )
}

export default WrapperComponent