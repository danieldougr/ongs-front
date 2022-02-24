
const ongController = require('../controller/ongController')
const db = require('../database/database')


class CadastrarOng{


    cadastrar(newOng, res){
        
        var colunas = Object.keys(newOng).join(',')
        var valores = Object.values(newOng)
                                .map((v) => `"${v}"`)
                                .join(',')

        var sql = `INSERT INTO ong(${colunas}) VALUES (${valores})`

        console.log(sql)

        db.run(sql,(erro, resposta)=>{
            if(erro){
              var infoErr = {
                  msg: `ESTE CNPJ JÁ ESTÁ CADASTRADO NO SITE`
              }
                res.status(400).json(erro)
            }else{

                res.redirect('http://localhost:8080/index.html')
            }
        })

    }
    
}
module.exports = new CadastrarOng