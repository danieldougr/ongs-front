const db = require('../database/database')

class CadastraUsuario{
    cadastrar(newUser, res){

        //POST novo usuário

        console.log(newUser)
        
        var colunas = Object.keys(newUser).join(',')
        var valores = Object.values(newUser)
                                .map((v) => `"${v}"`)
                                .join(',')

        var sql = `INSERT INTO usuario(${colunas}) VALUES (${valores})`

        console.log(sql)

        db.run(sql,(erro, resposta)=>{
            if(erro){
              var infoErr = {
                  msg: `ESTE CPF JÁ ESTÁ CADASTRADO NO SITE`
              }
                res.status(400).json(infoErr)
            }else{
                var info = {
                    msg: `USUÁRIO CADASTRADO COM SUCESSO.`
                }
               res.status(200).json(info);
            }
        })

    }



   

    

    
    retornaTodos(res){
        const sql = 'SELECT * FROM usuario'

        db.all(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else{
                res.status(200).json(resultados)
            }
        })
    }

    obterPorId(id, res){
        const sql = `SELECT * FROM Atendimentos WHERE id = ${id}`

        db.get(sql, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                
                res.status(200).json(resultado)
            }
        })
    }

    alteraAtendimento(id, status, res){
        
        var value = `"${Object.values(status)}"`
  
        console.log(value)
        const sql = `UPDATE Atendimentos SET status = ${value} WHERE id = ${id}`
        console.log(sql)
        
        db.exec(sql, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }


    deletaAtendimento(id, res){
        const sql = `DELETE FROM Atendimentos WHERE id = ${id}`

        db.run(sql, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(400).json(resultado)
            }
        })
    }
}

module.exports = new CadastraUsuario