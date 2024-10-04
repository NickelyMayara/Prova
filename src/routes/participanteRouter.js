import { Router } from "express";
import { cadastroParticipantes, feedbackParticipante, inscreverParticipante, listarEventosPorParticipante } from "../controller/participantesController.js";

const router = Router()

router.post("/participantes/registrar", cadastroParticipantes);
router.post("/inscrever", inscreverParticipante);
router.post("/feedback", feedbackParticipante);
router.get("/meus-eventos/?id=", listarEventosPorParticipante);

export default router;