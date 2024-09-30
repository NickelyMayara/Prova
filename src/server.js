import "dotenv/config"
import express from "express"
import { fileURLToPath } from "node:url"

import conn from "./config/conn.js"

import palestranteRouter from "./routes/palestranteRoutes.js"

const PORT = process.env.PORT || 3334
const app = express()

app.use(express.json())

//models
import "./models/eventoModel.js"
import "./models/palestranteModel.js"
import "./models/participanteModel.js"

app.use("/eventos/palestrantes", palestranteRouter)

app.get("*", (req, res) => {
    res.status(404).json({message: "Rota não encontrada"})
}) 

app.listen(PORT, ()=> {
    console.log(`Servidor on PORT ${PORT}🟢`)
})
