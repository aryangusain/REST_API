import React, { useState, useEffect } from 'react'
import axios from 'axios';
import User from './User';

function Fetch() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/api/users')
        .then(response => {
            if(Array.isArray(response.data)) {
                setUsers(response.data);
            }
        })
        .catch(error => console.log(error));
    }, [])
    
    return (
        <div className='fetch'>
            {   
                (users.length == 0)? <h2>No Users Exist!</h2>:
                users.map((user) => {
                    return <User key={user._id} user={user} />
                })       
            }
        </div>
    )
}

export default Fetch;