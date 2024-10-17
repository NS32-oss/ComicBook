import asyncHandler from "../utils/asyncHandler.js";
import apiError from "../utils/apiError.js";
import { ComicBook } from "../models/comicbook.model.js";
import apiResponse from "../utils/apiResponse.js";

// Add a new comic book
const createComicBook = asyncHandler(async (req, res) => {
  const {
    bookName,
    authorName,
    yearOfPublication,
    price,
    discount,
    numberOfPages,
    condition,
    description,
    genre,
    stockQuantity,
    language,
  } = req.body;

  // Check for required fields
  if (
    [
      bookName,
      authorName,
      yearOfPublication,
      price,
      numberOfPages,
      genre,
      stockQuantity,
    ].includes(undefined)
  ) {
    throw new apiError(400, "Please provide all the required fields");
  }

  // Check for existing comic book
  const existingComicBook = await ComicBook.findOne({ bookName });
  if (existingComicBook) {
    return res
      .status(409)
      .json(new apiResponse(409, "Comic book name already exists"));
  }

  // Create a new comic book
  const newComicBook = new ComicBook({
    bookName,
    authorName,
    yearOfPublication,
    price,
    discount,
    numberOfPages,
    condition,
    description,
    genre,
    stockQuantity,
    language,
  });

  // Check if comic book creation was successful
  if (!newComicBook) {
    throw new apiError(500, "Error creating the comic book");
  }

  // Save the new comic book
  await newComicBook.save();
  return res
    .status(200)
    .json(new apiResponse(200, "Comic book added successfully", newComicBook));
});

// Update an existing comic book
const updateComicBook = asyncHandler(async (req, res) => {
  const comicBookId = req.params.id;
  const {
    bookName,
    authorName,
    yearOfPublication,
    price,
    discount,
    numberOfPages,
    condition,
    description,
    genre,
    stockQuantity,
    language,
  } = req.body;

  // Create an object with the fields to update
  const objectField = {};
  if (bookName) objectField.bookName = bookName;
  if (authorName) objectField.authorName = authorName;
  if (yearOfPublication) objectField.yearOfPublication = yearOfPublication;
  if (price) objectField.price = price;
  if (discount) objectField.discount = discount;
  if (numberOfPages) objectField.numberOfPages = numberOfPages;
  if (condition) objectField.condition = condition;
  if (description) objectField.description = description;
  if (genre) objectField.genre = genre;
  if (stockQuantity) objectField.stockQuantity = stockQuantity;
  if (language) objectField.language = language;

  // Update the comic book and return the updated document
  const comicBook = await ComicBook.findByIdAndUpdate(
    comicBookId,
    objectField,
    { new: true }
  );

  // Check if the comic book was found and updated
  if (!comicBook) {
    throw new apiError(404, "Comic book not found");
  }

  return res
    .status(200)
    .json(new apiResponse(200, "Comic book updated successfully", comicBook));
});

// Delete a comic book
const deleteComicBook = asyncHandler(async (req, res) => {
  const comicBookId = req.params.id;
  
  // Find and delete the comic book by ID
  const comicBook = await ComicBook.findByIdAndDelete(comicBookId);
  
  // Check if the comic book was found
  if (!comicBook) {
    throw new apiError(404, "Comic book not found");
  }

  return res
    .status(200)
    .json(new apiResponse(200, "Comic book deleted successfully", comicBook));
});

// Get comic books with optional filters and pagination
const getComicBooks = asyncHandler(async (req, res) => {
  const {
    page = 1,
    limit = 10,
    filterBy,
    sortBy,
    sortType = "desc",
  } = req.query;

  const pageNumber = parseInt(page, 10);
  const limitNumber = parseInt(limit, 10);

  const filter = {};
  
  // If a filter is provided, set up a search for multiple fields
  if (filterBy) {
    const searchFields = ['bookName', 'authorName', 'genre', 'condition', 'description', 'language'];
    const searchRegex = new RegExp(filterBy, 'i'); // Create a case-insensitive regex

    // Build the filter object for the search
    filter.$or = searchFields.map(field => ({
      [field]: { $regex: searchRegex }
    }));
  }

  // Set sorting criteria based on query parameters
  let sortCriteria = {};
  if (sortBy) {
    sortCriteria[sortBy] = sortType === "desc" ? -1 : 1;
  } else {
    sortCriteria = { createdAt: -1 }; // Default sort by createdAt
  }

  // Fetch comic books based on filter, sort, and pagination
  const comicBooks = await ComicBook.find(filter)
    .sort(sortCriteria)
    .skip((pageNumber - 1) * limitNumber)
    .limit(limitNumber);
    
  // Calculate total items and pages for pagination
  const totalItems = await ComicBook.countDocuments(filter);
  const totalPages = Math.ceil(totalItems / limitNumber);

  // Check if any comic books were found
  if (!comicBooks || comicBooks.length === 0) {
    throw new apiError(404, "Comic books not found");
  }

  return res.status(200).json(
    new apiResponse(200, "Comic books found", {
      comicBooks,
      pagination: {
        currentPage: pageNumber,
        totalPages,
        totalItems,
      },
    })
  );
});

// Get a single comic book by ID
const getComicBook = asyncHandler(async (req, res) => {
  const comicBookId = req.params.id;

  // Find the comic book by ID
  const comicBook = await ComicBook.findById(comicBookId);

  // Check if the comic book was found
  if (!comicBook) {
    throw new apiError(404, "Comic book not found");
  }

  return res
    .status(200)
    .json(new apiResponse(200, "Comic book found", comicBook));
});

// Export the functions for use in routes
export { createComicBook, updateComicBook, deleteComicBook, getComicBooks, getComicBook };
