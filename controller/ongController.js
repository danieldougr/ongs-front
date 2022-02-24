const cadastraOng = require('../model/cadastraOng.js')
const db = require('../database/database')

module.exports = app => {
    app.post('/html/cadastraong', (req,res) => {

        var newOng = {
            cnpj: req.body.cnpj,
            nome: req.body.nome,
            contato: req.body.contato,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            descricao: req.body.descricao,
            endereco: req.body.endereco
        }
        cadastraOng.cadastrar(newOng, res);
    })
    
    app.get('/marks', (req, res) => {

        const sql = `SELECT latitude, longitude, nome, endereco FROM ong`
        var valor
        db.all(sql,(erro, row)=>{
            
            // console.log(row)
            // console.log("row")
            if(erro){
                var info = {
                    msg: 'ERRO MARK'
                }
                console.log("erro no mark")
                console.log(erro)
    
            }else{
                valor = JSON.stringify(row)
                res.status(200).json(row)
            }
        })
    })
}
