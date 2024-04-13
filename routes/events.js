import { getEvents } from "../controllers/events.js";
import { getUniqueEvents } from "../controllers/events.js";
import { postEvents } from "../controllers/events.js";
import { putEvents } from "../controllers/events.js";
import { deleteEvents } from "../controllers/events.js";
import { Router } from "express";

const routerEvent = Router();
//Rota de pesquisa Todos os usuarios
routerEvent.get("/events", getEvents);
//Rota de pesquisa único usuário
routerEvent.get("/events/:id", getUniqueEvents);
//Rotas de criação de um usuário
routerEvent.post("/events", postEvents);
//Rota de atualização de um usuário
routerEvent.put("/events/:id", putEvents);
//Rota de deletar um usuário
routerEvent.delete("/events/:id", deleteEvents);

export default routerEvent;
