import mongoose from "mongoose";

const comicBookSchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      text: true,
    },

    authorName: {
      type: String,
      required: true,
      trim: true,
      index: true,
      text: true,
    },

    yearOfPublication: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    discount: {
      type: Number,
      default: 0, // Discount can be optional
    },

    numberOfPages: {
      type: Number,
      required: true,
    },

    condition: {
      type: String,
      lowercase: true,
      enum: ["new", "used"],
      default: "new",
      text: true,
    },

    description: {
      type: String,
      trim: true,
      text: true,
    },

    // avatar: {
    //   type: String,
    //   required: true, // Assuming avatar refers to a book thumbnail or image
    // },

    // New fields added
    genre: {
      type: [String], // Array of genres, as a comic book might belong to multiple genres
      required: true,
      text: true,
    },

    stockQuantity: {
      type: Number,
      required: true,
      min: 0, // Ensures the stock quantity cannot be negative
    },

    language: {
      type: String,
      default: "English", // Default language is English, but can be modified
      text: true,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// userSchema.pre("save", async function (next) {
//   if (this.isModified("password")) {
//     this.password = await bcrypt.hash(this.password, 8);
//   }
//   next();
// });

// userSchema.methods.isPasswordMatch = async function (password) {
//   const user = this;
//   return await bcrypt.compare(password, user.password);
// };

// userSchema.methods.generateAccessToken = function () {
//   return jwt.sign(
//     {
//       id: this.id,
//       username: this.username,
//       fullname: this.fullname,
//       email: this.email,
//     },
//     process.env.ACCESS_TOKEN_SECRET,
//     {
//       expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
//     }
//   );
// };

// userSchema.methods.generateRefreshToken = function () {
//   return jwt.sign({ id: this.id }, process.env.REFRESH_TOKEN_SECRET, {
//     expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
//   });
// };

export const ComicBook = mongoose.model("ComicBook", comicBookSchema);
