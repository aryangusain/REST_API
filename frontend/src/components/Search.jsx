import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import User from '../components/User';

function Search() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    axios.get(`/api/users/${email}`)
    .then((response) => {
      if(response.data === "User does not exist!") {
        setMessage(response.data);
        setUser("");
      }
      else {
        setUser(response.data);
        setMessage("");
      }
    })
    .catch(error => console.log(error));


  }

  return (
    <div className='search'>
      <form onSubmit={handleSubmit}>
        <input type='email' required value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        <button className='submit-btn' type='submit'>Search</button>
      </form>
      {
        (message != "") && <h3>{message}</h3>
        || (user != "") && <User user={user} />
      }
    </div>
  )
}

export default Search;