import conn from "../config/conn.js";

const tabelaPalestrante = /*sql*/ `
CREATE TABLE IF NOT EXISTS palestrantes(
    palestrante_id VARCHAR(60) PRIMARY KEY, 
    nome_palestrante VARCHAR(255) NOT NULL, 
    expertise VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`

conn.query(tabelaPalestrante, (error) => {
    if(error){
        console.error("Erro ao criar tabela de Palestrante" + error.stack)
    }
    console.log("Tabela [palestrante] criada com sucesso")
})