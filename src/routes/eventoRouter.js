import { Router } from "express";
import { cadastroEventos, deletarEventos, editarEventos, listarEventos } from "../controller/eventoController.js";

const router = Router()

router.post("/criar", cadastroEventos);
router.get("/agenda", listarEventos);
router.put("/editar/:id", editarEventos);
router.delete("/cancelar/:id", deletarEventos);

export default router;