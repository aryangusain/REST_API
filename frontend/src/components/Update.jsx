import React, { useState } from 'react'
import axios from 'axios';

function Update() {
  const [message, setMessage] = useState("");

  const [user, setUser] = useState({
    email: "",
    newEmail: "",
    fname: "",
    lname: ""
  });

  function handleSubmit(e) {
    e.preventDefault();

    axios.patch(`/api/users/${user.email}`, user)
    .then((response) => {
      setMessage(response.data);
    })
    .catch(error => console.log(error));

    setUser({
      email: "",
      newEmail: "",
      fname: "",
      lname: ""
    })
  }

  return (
    <div className='update'>
      <form onSubmit={handleSubmit}>
        <input type='email' name='email' required placeholder='Existing Email' value={user.email} onChange={(e) => {setUser({...user, email: e.target.value})}}/>
        <input type='email' name='newEmail' placeholder='New Email' value={user.newEmail} onChange={(e) => {setUser({...user, newEmail: e.target.value})}}/>
        <input type='text' name='fname' placeholder='First Name' value={user.fname} onChange={(e) => {setUser({...user, fname: e.target.value})}}/>
        <input type='text' name='lname' placeholder='Last Name' value={user.lname} onChange={(e) => {setUser({...user, lname: e.target.value})}}/>
        <button type='submit' className='submit-btn'>Update</button>
      </form>
      {(message != "") && <h3>{message}</h3>}
    </div>
  )
}

export default Update;