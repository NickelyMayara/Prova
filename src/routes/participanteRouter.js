import { Router } from "express";
import { cadastroParticipantes } from "../controller/participantesController.js";

const router = Router()

router.post("/participantes/registrar", cadastroParticipantes);

export default router;