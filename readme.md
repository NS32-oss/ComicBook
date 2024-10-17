Here's the complete README file in a single, well-structured format:

```markdown
# Comic Book Store Backend

The Comic Book Store Backend is a RESTful API built using Node.js, Express.js, and MongoDB. It provides a comprehensive set of functionalities for managing comic book inventory, including adding, updating, deleting, and retrieving comic book records. This backend is designed to be easily integrated with a front-end interface and supports various features such as pagination, filtering, and sorting.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Error Handling](#error-handling)
- [License](#license)

## Features

- **Add Comic Books**: Add new comic book records to the database with details such as book name, author, year of publication, price, genre, and more.
- **Update Comic Books**: Modify existing comic book information.
- **Delete Comic Books**: Remove comic books from the inventory based on their ID.
- **Fetch Comic Books**: Retrieve all comic books with options for pagination, filtering (by name, author, genre, etc.), and sorting.
- **Fetch Single Comic Book**: Retrieve details of a single comic book using its ID.

## Tech Stack

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for building APIs and handling HTTP requests.
- **MongoDB**: NoSQL database for storing comic book records.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.

## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:NS32-oss/ComicBook.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Comic_Book_Store_Backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Environment Variables

Create a `.env` file in the root directory of the project and configure the following environment variables:

```env
PORT=5000
MONGODB_URI=<Your MongoDB connection URI>
JWT_SECRET=<Your JWT secret key>
CLOUDINARY_URL=<Your Cloudinary API URL> # If using Cloudinary for image uploads
```

Ensure these variables are correctly set up before running the application.

## API Endpoints

### Comic Book Routes

1. **Add Comic Book**: `POST /api/v1/comicBook`
   - Adds a new comic book to the inventory.
   - **Body**: 
     ```json
     {
       "bookName": "Example Comic",
       "authorName": "Author Name",
       "yearOfPublication": 2020,
       "price": 19.99,
       "discount": 0,
       "numberOfPages": 120,
       "condition": "New",
       "description": "A brief description of the comic",
       "genre": "Adventure",
       "stockQuantity": 50,
       "language": "English"
     }
     ```

2. **Update Comic Book**: `PUT /api/v1/comicBook/:id`
   - Updates an existing comic book's details based on its ID.
   - **Body**: Partial or complete comic book details as required.

3. **Delete Comic Book**: `DELETE /api/v1/comicBook/:id`
   - Deletes a comic book from the inventory by its ID.

4. **Get All Comic Books**: `GET /api/v1/comicBook`
   - Fetches all comic books with support for:
     - **Pagination**: `?page=1&limit=10`
     - **Filtering**: `?filterBy=<search term>` (searches by book name, author name, genre, etc.)
     - **Sorting**: `?sortBy=field&sortType=asc|desc`

5. **Get Comic Book Details**: `GET /api/v1/comicBook/:id`
   - Fetches a single comic book by its ID.

## Usage

To run the application locally:

1. Start the development server:
   ```bash
   npm run dev
   ```
   The server will run on `http://localhost:5000` (or the port specified in your `.env` file).

2. Use Postman or any other API testing tool to interact with the API endpoints.

## Error Handling

The application uses centralized error handling to provide consistent responses:

- **400 Bad Request**: Missing or invalid input fields.
- **404 Not Found**: Resource (e.g., comic book) not found.
- **409 Conflict**: Duplicate resources (e.g., comic book name already exists).
- **500 Internal Server Error**: General server error.

Error responses are returned in the following format:

```json
{
  "status": 400,
  "message": "Error message",
  "errors": []
}
```

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
```

This version is formatted correctly, easy to read, and covers each aspect of the backend API thoroughly. You can copy this directly into your `README.md` file. Let me know if you need any more adjustments!