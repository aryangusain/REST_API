import React from 'react'

function Home() {
  return (
    <div className='home'>
        <h2>What is a REST API ?</h2>
        <p>
          A REST API (Representational State Transfer Application Programming Interface) is a set of rules that allows programs to communicate with each other over the web. It is widely used to build web services that enable interaction between a client (usually a web application or mobile app) and a server (backend). REST APIs operate over HTTP (Hypertext Transfer Protocol) and adhere to a stateless, client-server architecture.
        </p>
        <p>
          <b>Client-Server Architecture:</b> In REST APIs, the client (frontend) makes requests to the server (backend), which processes the requests and sends back the required information (response). They are independent of each other.
        </p>
        <p>
          <b>Uniform Interface:</b> REST APIs adhere to a uniform and standardized way of interacting. This typically involves specific methods (GET, POST, PUT, DELETE) and standard response formats (JSON, XML).
        </p>
        <p>
          <b>Stateless:</b> Every request from the client to the server must contain all the information needed to understand and process the request. The server does not store any state about the client between requests, meaning that each request is independent.
        </p>

        <h3>HTTP Methods in REST</h3>
        <p>
          REST APIs use standard HTTP methods to perform CRUD (Create, Read, Update, Delete) operations:
        </p>
        <ul>
          <li>
            <b>GET :</b> Used to retrieve data from the server. It is a read-only operation, meaning it doesn't alter any data on the server.
          </li>
          <li>
            <b>POST :</b> Used to create new resources or submit data to the server.
          </li>
          <li>
            <b>PUT : </b> Used to update an existing resource or create it if it doesn't exist.
          </li>
          <li>
            <b>PATCH :</b> Similar to PUT but used to partially update an existing resource.
          </li>
          <li>
            <b>DELETE :</b> Used to delete a resource from the server.
          </li>
        </ul>

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