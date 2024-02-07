import React from 'react'
import UserList from './UserList'

function Users(props) {
    console.log(props.users)
    const userStyle={
        display:"grid",
        gridTemplateColumns:'repeat(3,1fr)',
        gridGap:'1rem'
      }
  return (
    <div style={userStyle}>
        {props.users.map((user)=>(
            // <p>{user.login}</p>
            <UserList user={user}/>
            
        )
        )}
      
    </div>
  )
 
}

export default Users
