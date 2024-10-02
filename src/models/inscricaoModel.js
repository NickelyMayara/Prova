import conn from "../config/conn.js";

const tabelaInscritos = /*sql*/ `
CREATE TABLE IF NOT EXISTS inscritos(
    participanteID VARCHAR(60), 
    eventoID VARCHAR(60),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY participanteID REFERENCES participantes(participante_id),
    FOREIGN KEY eventoID REFERENCES eventos(evento_id)
)`

conn.query(tabelaInscritos, (error) => {
    if(error){
        console.error("Erro ao criar tabela de Inscritos" + error.stack)
    }
    console.log("Tabela [Inscritos] criada com sucesso")
})