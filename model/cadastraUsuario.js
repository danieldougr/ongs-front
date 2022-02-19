const db = require('../database/database')

class CadastraUsuario{
    cadastrar(newUser, endereco, res){

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
                console.log("usuario ERR")
                res.send(erro)
            }else{
                var aux = { 
                    cpf: newUser.cpf,
                    endereco: endereco
                }
                console.log(aux)
               res.status(200).send(aux);
            }
        })

    }



   cadastraEndereco(values, res){
        const sql = `SELECT cpf FROM usuario where id = ${cpf}`

        db.run(sql,(erro, resposta)=>{
            if(resposta != null){
                console.log("Achou o user")
                res.status(200).json(resposta)
            }else{
               res.status(400).json(erro)
               console.log("não cadastrou ainda")
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