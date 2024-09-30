import conn from "../config/conn.js"

const tabelaEvento = /*sql*/`
    CREATE TABLE IF NOT EXISTS eventos(
    evento_id VARCHAR(60) PRIMARY KEY, 
    nome VARCHAR(255) NOT NULL, 
    data_evento DATE NOT NULL,  
    hora TIME NOT NULL,
    localizacao VARCHAR(255) NOT NULL, 
    tipo VARCHAR(255) NOT NULL,
    quantidade_pessoas INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)`

conn.query(tabelaEvento, (error) => {
    if(error){
        console.error("Erro ao criar tabela de evento" + error.stack)
    }
    console.log("Tabela [evento] criada com sucesso")
})