import conn from "../config/conn.js";
import { v4 as uuid } from "uuid"

export const cadastroParticipantes = (req, res) => {
    const { nome_participante, email, eventoId } = req.body

    if (!nome_participante) {
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
    const insertParticipanteSQL = `INSERT INTO participantes (participante_id, nome_participante, email, eventoId ) VALUES (?, ?, ?, ?)`;
    const insertParticipanteValues = [idParticipante, nome_participante, email, eventoId];

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

    const insertInscricaoSQL = `INSERT INTO inscritos (participanteID, eventoID ) VALUES (?, ?)`;
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
export const feedbackParticipante = (req, res) => {
    const { participante_ID, evento_ID, nota, comentario } = req.body

    if (!participante_ID) {
        res.status(400).json({ message: "dados no campo de PARTICIPANTE-ID é obrigatório" })
        return
    }
    if (!evento_ID) {
        res.status(400).json({ message: "dados no campo de EVENTO-ID é obrigatório" })
        return
    }
    if (!nota) {
        res.status(400).json({ message: "dados no campo de NOTA é obrigatório" })
        return
    }
    if (!comentario) {
        res.status(400).json({ message: "dados no campo de COMENTARIO é obrigatório" })
        return
    }

    const idFeedback = uuid();
    const insertFeedbackSQL = `INSERT INTO feedback (feedback_id, participante_ID, evento_ID, nota, comentario ) VALUES (?, ?, ?, ?, ?)`;
    const insertFeedbackValues = [idFeedback, participante_ID, evento_ID, nota, comentario];

    conn.query(insertFeedbackSQL, insertFeedbackValues, (err) => {
        if (err) {
            console.error(err)
            res.status(500).json({ message: "Erro ao enviar Feedback" })
            return
        }

        res.status(200).json({ message: `Feedback Enviado!` })
    })
}
export const listarEventosPorParticipante = (req, res) => {
    
    const sql = `
        SELECT 
        eventos.nome_evento, 
        FROM eventos
        INNER JOIN inscritos ON eventos.participanteId = inscritos.participanteID
    `;

    conn.query(sql, (err, results) => {
        if (err) {
            return res.status(500).send('Erro ao buscar dados: ' + err);
        }

        res.json(results);
    })
}
