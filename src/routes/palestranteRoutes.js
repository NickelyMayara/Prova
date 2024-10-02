import { Router } from "express";
import { cadastroPalestrante, listarPalestrantes } from "../controller/palestranteController.js";

const router = Router()

router.post("/", cadastroPalestrante);
router.get("/", listarPalestrantes); 

export default router;