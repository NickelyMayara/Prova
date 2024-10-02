import conn from "../config/conn.js";
import { v4 as uuid } from "uuid"

export const cadastroEventos = (req, res) => {
    const {nome, data_evento, palestranteId} = req.body

    if (!nome) {
        res.status(400).json({ message: "dados no campo de NOME é obrigatório" })
        return
    }
    if (!data_evento) {
        res.status(400).json({ message: "dados no campo de DATA é obrigatório" })
        return
    }
    if (!palestranteId) {
        res.status(400).json({ message: "dados no campo de PALESTRANTEID é obrigatório" })
        return
    }

    const idEvento = uuid();
    const insertEventoSQL = `INSERT INTO eventos (evento_id, nome, data_evento, palestranteId ) VALUES (?, ?, ?, ?)`;
    const insertEventoValues = [idEvento, nome, data_evento, palestranteId];

    conn.query(insertEventoSQL, insertEventoValues, (err, data) => {
        if (err) {
            console.error(err)
            res.status(500).json({ message: "Erro ao cadastrar Evento" })
            return
        }

        res.status(200).json({ message:`Evento '${nome}' Cadastrado para o dia: ${data_evento}` })
    })
}

export const listarEventos = (req, res) => {

    const sql = /*sql*/ `SELECT * FROM eventos`;
    conn.query(sql, (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ err: "Erro ao listar Eventos" });
            return;
        }

        

        res.status(200).json(data);
    })
}