const db = require('../database/database')

class CadastrarOng{


    cadastrarOng(valores, res){
        const sql = `INSERT INTO endereco (local) VALUES (${valores.endereco})`

        db.run(sql,(erro, resposta)=>{
            if(erro){
                console.log("endereco ERR")
                res.status(400).send(erro)
            }else{
                var chaves = {
                    cpf: valores.cpf, 
                }
            }
        })

    }


}