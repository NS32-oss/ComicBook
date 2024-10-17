# Comic Book Store Backend

This is the backend API for the Comic Book Store application. It provides functionalities for managing comic books, including adding, updating, deleting, and searching for comic books.

## Features
- Add new comic books with details like book name, author name, genre, and more.
- Update and delete existing comic books.
- Search comic books by different fields such as book name, author name, genre, etc.
- Paginate and sort comic books results.

## Getting Started

### Prerequisites
- Node.js and npm installed
- MongoDB for the database

### Installation
1. Clone the repository:

2. Install dependencies:

3. Create a `.env` file in the root directory and add your environment variables (e.g., MongoDB URI, API keys).

### Running the Server


## API Endpoints
- `POST /api/v1/comicBook` - Add a new comic book
- `GET /api/v1/comicBook` - Get all comic books with filters and sorting
- `PUT /api/v1/comicBook/:id` - Update a comic book by ID
- `DELETE /api/v1/comicBook/:id` - Delete a comic book by ID

## Technologies Used
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication (if applicable)

## License
This project is licensed under the MIT License.
