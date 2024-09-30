import conn from "../config/conn.js";

const tabelaParticipante = /*sql*/ `
    CREATE TABLE IF NOT EXISTS participantes(
        participante_id VARCHAR(60) PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        idade INT NOT NULL,
        email VARCHAR(255) NOT NULL,
        cpf INT NOT NULL,
        nome_evento VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`

conn.query(tabelaParticipante, (error) => {
    if(error){
        console.error("Erro ao criar tabela de participantes" + error.stack)
    }
    console.log("Tabela [participantes] criada com sucesso")
})