import { getUsers } from "../controllers/user.js";
import { Router } from "express";

const router = Router();
//                 conecta ao user do controller
router.get("/", getUsers);

export default router;
