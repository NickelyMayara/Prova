import conn from "../config/conn.js";
import { v4 as uuid } from "uuid"

export const cadastroParticipantes = (req, res) => {
    const { nome, email, eventoId } = req.body

    if (!nome) {
        res.status(400).json({ message: "dados no campo de NOME é obrigatório" })
        return
    }
    if (!email) {
        res.status(400).json({ message: "dados no campo de NOME é obrigatório" })
        return
    }
    if (!eventoId) {
        res.status(400).json({ message: "dados no campo de EVENTOID é obrigatório" })
        return
    }

    if (!email.includes("@")) {
        res.status(409).json({ message: "Deve conter '@' no email" })
        return
    }

    const idParticipante = uuid();
    const insertParticipanteSQL = `INSERT INTO participantes (participante_id, nome, email, eventoId ) VALUES (?, ?, ?, ?)`;
    const insertParticipanteValues = [idParticipante, nome, email, eventoId];

    conn.query(insertParticipanteSQL, insertParticipanteValues, (err) => {
        if (err) {
            console.error(err)
            res.status(500).json({ message: "Erro ao cadastrar Participante" })
            return
        }

        res.status(200).json({ message: `Participante Cadastrado!` })
    })
}

export const inscreverParticipante = (req, res) => {
    const {participanteID, eventoID} = req.body

    if (!participanteID) {
        res.status(400).json({ message: "dados no campo de PARTICIPANTE-ID é obrigatório" })
        return
    }
    if (!eventoID) {
        res.status(400).json({ message: "dados no campo de EVENTO-ID é obrigatório" })
        return
    }

    const insertInscricaoSQL = `INSERT INTO participantes (participanteID, eventoID ) VALUES (?, ?)`;
    const insertInscricaoValues = [participanteID, eventoID];

    conn.query(insertInscricaoSQL, insertInscricaoValues, (err) => {
        if (err) {
            console.error(err)
            res.status(500).json({ message: "Erro ao inscrever Participante" })
            return
        }

        res.status(200).json({ message: `Participante Inscrito!` })
    })
}
