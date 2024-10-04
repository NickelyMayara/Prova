import conn from "../config/conn.js";
import { v4 as uuid } from "uuid"

export const cadastroEventos = (req, res) => {
    const { nome_evento, data_evento, palestranteId } = req.body

    if (!nome_evento) {
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
    const insertEventoSQL = `INSERT INTO eventos (evento_id, nome_evento, data_evento, palestranteId ) VALUES (?, ?, ?, ?)`;
    const insertEventoValues = [idEvento, nome_evento, data_evento, palestranteId];

    conn.query(insertEventoSQL, insertEventoValues, (err) => {
        if (err) {
            res.status(500).json({ message: "Erro ao cadastrar Evento" })
            return
        }

        res.status(200).json({ message: `Evento '${nome_evento}' Cadastrado para o dia: ${data_evento}` })
    })
}
export const listarEventos = (req, res) => {

    const sql = `
        SELECT 
        eventos.evento_id, 
        eventos.nome_evento, 
        eventos.data_evento, 
        palestrantes.nome_palestrante,
        palestrantes.expertise
        FROM eventos
        INNER JOIN palestrantes ON eventos.palestranteId = palestrantes.palestrante_id
    `;

    conn.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send('Erro ao buscar dados: ' + err);
        }

        res.json(results);
    })
}
export const editarEventos = (req, res) => {

    const { id } = req.params

    const { nome_evento, data_evento, palestranteId } = req.body

    const updateSql = /*sql*/ `UPDATE eventos SET ? WHERE ??=?`
    const updateData = [{ nome_evento, data_evento, palestranteId }, "evento_id", id]
    conn.query(updateSql, updateData, (err) => {
        if (err) {
            return res.status(500).json({ err: "Erro ao atualizar evento" })
        }
        res.status(200).json({ message: "Evento Atualizado" })
    })

    // const updateSql = `UPDATE eventos SET nome_evento = ?, data_evento = ?, palestranteId = ?, WHERE evento_id = ?`;
    // const updateData = [nome_evento, data_evento, palestranteId, id];

    // conn.query(updateSql, updateData, (err) => {
    //     if (err) {
    //         return res.status(500).json({ err: "Erro ao atualizar evento" }, err)
    //     }
    //     res.status(200).json({ message: "Evento Atualizado" })
    // });
}
export const deletarEventos = (req, res) => {
    const { id } = req.params;

    const deleteSql = /*sql*/ `DELETE FROM eventos WHERE ??=?`
    const deleteData = ["evento_id", id]
    conn.query(deleteSql, deleteData, (err) => {
        if (err) {
            res.status(500).json({ message: `Erro ao cadastrar Evento`})
            return
        }

        res.status(200).json({ message: "Evento Deletado" })
    })
}