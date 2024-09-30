import { Router } from "express";
import { cadastroPalestrante, listarPalestrantes } from "../controller/palestranteController.js";

const router = Router()

router.post("/", cadastroPalestrante); //cadastrar
router.get("/", listarPalestrantes); //cadastrar

export default router;