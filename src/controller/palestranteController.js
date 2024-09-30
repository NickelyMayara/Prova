import conn from "../config/conn.js";
import { v4 as uuid } from "uuid"

export const cadastroPalestrante = (req, res) => {
    const { nome, expertise } = req.body

    if (!nome) {
        res.status(400).json({ message: "dados no campo de NOME é obrigatório" })
        return
    }
    if (!expertise) {
        res.status(400).json({ message: "dados no campo de EXPERTISE é obrigatório" })
        return
    }

    const id = uuid();
    const insertPalestranteSQL = `INSERT INTO palestrantes (palestrante_id, nome, expertise ) VALUES (?, ?,?)`;
    const insertPalestranteValues = [id, nome, expertise];

    conn.query(insertPalestranteSQL, insertPalestranteValues, (err, data) => {
        if (err) {
            console.error(err)
            res.status(500).json({ message: "Erro ao cadastrar Palestrante" })
            return
        }

        res.status(200).json({ message: "Palestrante Cadastrado!" })
    })
}
export const listarPalestrantes = (req, res) => {

    const sql = /*sql*/ `SELECT * FROM palestrantes`;
    conn.query(sql, (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ err: "Erro ao listar Palestrantes" });
            return;
        }

        res.status(200).json(data);
    })
}