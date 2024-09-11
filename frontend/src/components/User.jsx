import React from 'react'

function User({user}) {
  return (
    <div className='user-card'>
        <p><b>Name :</b> {user.fname} {user.lname}</p>
        <p><b>Email :</b> {user.email}</p>
        <p><b>Gender :</b> {user.gender}</p>
    </div>
  )
}

export default User