import React, { useState } from 'react';
import axios from 'axios';

function Create() {
  const [user, setUser] = useState({
    fname: '',
    lname: '',
    email: '',
    gender: ''
  });

  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    axios.post('/api/users', user)
    .then(response => {
      setMessage(response.data);
    })
    .catch(error => console.log(error));

    setUser({
      fname: '',
      lname: '',
      email: '',
      gender: ''
    });
  }

  return (
    <div className='create'>
      <form onSubmit={handleSubmit}>
          <input type='text' id='fname' name='fname' placeholder='First Name' required value={user.fname} onChange={(e) => setUser({...user, fname: e.target.value})} />
          <input type='text' id='lname' name='lname' placeholder='Last Name' required value={user.lname} onChange={(e) => setUser({...user, lname: e.target.value})}/>
          <input type='email' id='email' name='email' placeholder='Email' required value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
          <input type='text' id='gender' name='gender' placeholder='Gender' required value={user.gender} onChange={(e) => setUser({...user, gender: e.target.value})}/>
          <button type='submit' className='submit-btn'>Create</button>
      </form>
      {(message != "") && <h3>{message}</h3>}
    </div>
  )
}

export default Create;