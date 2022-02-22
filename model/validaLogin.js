const db = require('../database/database')

class validaLogin{


    validaLogin(cpf, res){
        const sql = ` SELECT (SELECT COUNT(*) FROM usuario WHERE cpf = '${cpf}') > 0;`

        db.run(sql,(erro, resposta)=>{
            if(erro){
                console.log("endereco ERR")
                res.status(400).send(erro)
            }else{
                console.log(resposta)
                return resposta;
            }
        })

    }


}