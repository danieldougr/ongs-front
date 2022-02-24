const cadastraUsuario = require('../model/cadastraUsuario.js')

module.exports = app => {
    app.post('/html/cadastrar', (req,res) => {

        var newUser = {
            cpf: req.body.cpf,
            nome: req.body.nome,
            endereco: req.body.endereco,
            email: req.body.email,
            senha: req.body.senha,
            permissao: 0
        }

        var confirmaSenha = req.body.confirmaSenha

        if(newUser.cpf == '' || newUser.nome == '')
        {
            res.send("NOME E CPF OBRIGATÓRIOS")
        }
        else if(newUser.senha != confirmaSenha)
        {
            res.send("SENHA NÃO CONFERE COM A CONFIRMAÇÃO")
        }
        else
        {
            cadastraUsuario.cadastrar(newUser, res);
        }
    })
}