const db = require('../database/database')

class validaLogin{

    validarLogin(auth, res){
        const sql = `SELECT cpf, senha FROM usuario WHERE cpf = "${auth.cpf}" and senha = "${auth.senha}";`
        
        db.all(sql,(erro, row)=>{
            
            // console.log(row[0].cpf)
            // console.log("row")
            if(erro){
                var info = {
                    msg: 'ERRO LOGIN'
                }
                res.status(400).send(info.msg)
            }else{

                // console.log("else")
                // console.log(row)
                if(row[0]){
                        res.redirect('http://localhost:8080/html/registroOng.html')
                    }
                    else
                    {
                        var info2 = {
                            msg: 'USUÁRIO NÃO CADASTRADO.'
                        }
                        res.status(400).send(info2.msg)
                    }
                }
            })
                
    }
}
module.exports = new validaLogin