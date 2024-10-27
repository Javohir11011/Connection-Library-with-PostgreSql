import {Router} from "express"
import { booksCommmet , booksReadComment} from "../controllers/commit.controller.js";

export const routerComment = Router()

routerComment.post('/res/:id', booksCommmet);
routerComment.get('/res/:id', booksReadComment);

// routerUser.post('/');