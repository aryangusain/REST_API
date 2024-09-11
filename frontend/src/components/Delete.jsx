import React from 'react'
import { useState } from 'react'
import axios from 'axios';

function Delete() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    axios.delete(`/api/users/${email}`)
    .then((response) => {
      setMessage(response.data);
    })
    .catch(error => console.log(error));

    setEmail("");
  }

  return (
    <div className='delete'>
      <form onSubmit={handleSubmit}>
        <input type='email' required value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        <button className='submit-btn' type='submit'>Delete</button>
      </form>
      {
        (message != "") && <h3>{message}</h3>
      }
    </div>
  )
}

export default Delete;