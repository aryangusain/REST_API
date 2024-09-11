import React from 'react'

function Home() {
  return (
    <div className='home'>
        <h2>About This Project</h2>
        <p>
            This project was built to enhance my understanding of REST APIs and how to integrate the frontend with the backend.
            <br></br>It provides an API for managing user data, which includes the following features:
        </p>
        <ul>
            <li><strong>Fetch :</strong> Retrieve list of all users stored in the database.</li>
            <li><strong>Create :</strong> Add new users to the database.</li>
            <li><strong>Search :</strong> Get information about a particular user</li>
            <li><strong>Update :</strong> Modify the details of an existing user.</li>
            <li><strong>Delete :</strong> Remove a user from the database permanently.</li>
        </ul>

        <p>This project helped me learn how to work with RESTful APIs and how to connect the frontend and backend efficiently.</p>
    </div>
  )
}

export default Home