# Book Directory API

Welcome to the Book Directory API, a simple application for managing books. This README provides an overview of the API's functionalities and how to use them effectively.

### Prerequisites

Before you begin, make sure you have the following installed on your system:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/suraj719/books-dir.git
   ```
2. Navigate to the project directory:

   ```bash
   cd books-dir
   ```
3. Install the project dependencies:
    ```bash
    npm install
    ```
4. Configure the environment variables:
Create a `.env` file in the project root and add the following variables:
```bash
PORT=5000
MONGO_URI=your-mongodb-connection-string
SECRET_KEY=your-secret-key-for-JWT
```
The API will be running at http://localhost:5000.

# API End-Points
 - POST http://localhost:5000/auth/signup (Creates a new user account)
 - POST http://localhost:5000/auth/login (Logs in an existing user and returns jwt)
 - GET http://localhost:5000/books (Retrieves a list of all books)
 - POST http://localhost:5000/books (Creates a new book entry)
 - GET http://localhost:5000/books/:id (Retrieves a specific book by its ID)
 - PUT http://localhost:5000/books/:id (Updates a specific book by its ID)
 - DELETE http://localhost:5000/books/:id (Deletes a specific book by its ID)