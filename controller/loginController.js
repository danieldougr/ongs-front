const cadastraUsuario = require('../model/cadastraOng.js')

module.exports = app => {
    app.post('/html/cadastrarOng', (req,res) => {

        var newOng = {
            cnpj: req.body.cpf,
            nome: req.body.nome,
            // endereco = req.body.endereco,
            contato: req.body.email,
            senha: req.body.senha,
            permissao: 0
            
        }

        cadastraUsuario.cadastrar(newUser, res);
    })
}
