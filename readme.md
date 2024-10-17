# Comic Book Store Backend

The Comic Book Store Backend is a RESTful API built using Node.js, Express.js, and MongoDB. It provides a comprehensive set of functionalities for managing comic book inventory, including adding, updating, deleting, and retrieving comic book records. This backend is designed to be easily integrated with a front-end interface and supports various features such as pagination, filtering, and sorting.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
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
2. Navigate to the project directory:
    ```bash
    cd Comic_Book_Store_Backend
3. Install dependencies:
    ```bash
    npm install

## Environment Variables

Create a `.env` file in the root directory of the project and configure the following environment variables:

```bash
PORT=5000
MONGODB_URI=<Your MongoDB connection URI>
```

## Usage
1. Start the development server:
    ```bash
    npm run dev
    ```
2. Use Postman or any other API testing tool to interact with the API endpoints.


## API Endpoints
- `POST /api/v1/comicBook` - Add a new comic book
- `GET /api/v1/comicBook` - Get all comic books with filters and sorting
- `PUT /api/v1/comicBook/:id` - Update a comic book by ID
- `DELETE /api/v1/comicBook/:id` - Delete a comic book by ID
- `GET /api/v1/comicBook/:id` - Fetch details of single comic by its ID

## License
This project is licensed under the MIT License. See the LICENSE file for details.



