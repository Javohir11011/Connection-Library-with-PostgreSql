import {Router} from "express"
import { loginUser, registerUsers } from "../controllers/users.controller.js";

export const routerUser = Router()

routerUser.post('/regis', registerUsers);
routerUser.post('/login', loginUser);