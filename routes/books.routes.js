import {Router} from "express"
import {getAllBooks, createBook, getByIdBooks, updateBook, deleteBook} from "../controllers/index.js"

export const router = Router();

router.get('/by/:id',getByIdBooks);
router.get('/',getAllBooks);
router.post('/create',createBook);
router.put('/:id',updateBook);
router.delete('/:id',deleteBook);

