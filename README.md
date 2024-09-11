# REST API

This project is a web application that provides a REST API for managing users. It includes five main features: Fetch, Create, Search, Update, and Delete.

## Features

1. **Fetch Users**: Retrieve a list of all users from the database.
2. **Create User**: Add a new user to the database by providing the required details.
3. **Search User**: Search for a specific user by name or ID.
4. **Update User**: Modify the details of an existing user.
5. **Delete User**: Permanently remove a user from the database.

## Technologies Used

- Frontend: React
- Backend: Node.js, Express
- Database: MongoDb
- API Format: JSON
  
## API Endpoints
- GET /api/users : Fetch all users.
- POST /api/users : Create a new user.
- GET /api/users/:email : Search for a user by ID.
- PATCH /api/users/:email : Update an existing user's information.
- DELETE /api/users/:email : Delete a user by ID.

## Usage
- Use the Fetch section to view the list of users.
- Use the Create form to add a new user.
- Use the Search form to find a specific user.
- Use the Update form to modify a user's information.
- Use the Delete form to remove a user from the list.

## Live Demo
Check out the live version of the application [here](https://rest-api-frontend-ivory.vercel.app/).
