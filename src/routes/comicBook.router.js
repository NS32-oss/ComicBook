import { Router } from "express";
import {
  createComicBook,
  deleteComicBook,
  getComicBook,
  getComicBooks,
  updateComicBook,
} from "../controllers/comicBook.controller.js";
const router = Router();

router.route("/").post(createComicBook).get(getComicBooks);
router.route("/:id").patch(updateComicBook).delete(deleteComicBook).get(getComicBook);


export default router;