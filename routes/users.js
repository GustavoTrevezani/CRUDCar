import { getUsers } from "../controllers/user.js";
import { getUniqueUsers } from "../controllers/user.js";
import { postUsers } from "../controllers/user.js";
import { putUsers } from "../controllers/user.js";
import { deleteUsers } from "../controllers/user.js";
import { Router } from "express";

const router = Router();
//Rota de pesquisa Todos os usuarios
router.get("/", getUsers);
//Rota de pesquisa único usuário
router.get("/:id", getUniqueUsers);
//Rotas de criação de um usuário
router.post("/", postUsers);
//Rota de atualização de um usuário
router.put("/:id", putUsers);
//Rota de deletar um usuário
router.delete("/:id", deleteUsers);

export default router;
