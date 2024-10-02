import { Router } from "express";
import { cadastroEventos, listarEventos } from "../controller/eventoController.js";

const router = Router()

router.post("/criar", cadastroEventos);
router.get("/agenda", listarEventos);

export default router;