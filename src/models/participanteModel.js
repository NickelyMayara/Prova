import conn from "../config/conn.js";

const tabelaParticipante = /*sql*/ `
    CREATE TABLE IF NOT EXISTS participantes(
        participante_id VARCHAR(60) PRIMARY KEY,
        nome_participante VARCHAR(255) NOT NULL,
        email VARCHAR(100) NOT NULL,
        eventoId VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (eventoId) REFERENCES eventos(evento_id)
    )`

conn.query(tabelaParticipante, (error) => {
    if(error){
        console.error("Erro ao criar tabela de participantes" + error.stack)
    }
    console.log("Tabela [participantes] criada com sucesso")
})