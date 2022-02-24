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
                res.status(400).json(infoErr.msg)
            }else{
                res.redirect('http://localhost:8080/index.html');
            }
        })

    }
}

module.exports = new CadastraUsuario