const sqlite3 = require('sqlite3')
const Tabelas = require('./tabelas')


let db = new sqlite3.Database('./database/ong.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
            (err) => {
               if(err){
                   console.error(err.message)
               } else{
                   console.log('Conectado ao Banco de Dados!!')
               }
            }
)

Tabelas.init(db)

module.exports = db