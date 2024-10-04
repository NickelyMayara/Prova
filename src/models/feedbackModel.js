import conn from "../config/conn.js"

const tabelaFeedback = /*sql*/`
    CREATE TABLE IF NOT EXISTS feedback(
    feedback_id VARCHAR(60) PRIMARY KEY, 
    participante_ID VARCHAR(60),
    evento_ID VARCHAR(60),
    nota INT NOT NULL, 
    comentario VARCHAR(255) NOT NULL, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (participante_ID) REFERENCES participantes(participante_id),
    FOREIGN KEY (evento_ID) REFERENCES eventos(evento_id)
    )`

conn.query(tabelaFeedback, (error) => {
    if(error){
        console.error("Erro ao criar tabela de evento" + error.stack)
    }
    console.log("Tabela [feedback] criada com sucesso")
})