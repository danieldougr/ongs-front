const cadastraUsuario = require('../model/cadastraUsuario.js')

module.exports = app => {
    app.post('/html/cadastrar', (req,res) => {

        var newUser = {
            cpf: req.body.cpf,
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            permissao: 0
        }

        var endereco = req.body.endereco;

        cadastraUsuario.cadastrar(newUser, endereco, res);
    })

    
















    app.post('/atendimentos', (req,res) => {
        const atendimento = req.body
        cadastraUsuario.adiciona(atendimento,res)
    })

    app.get('/cadastrar', (req,res) => {
        
        cadastraUsuario.retornaTodos(res);
    })

    app.patch('/atendimentos/:id', (req,res) => {
       
        var text = req.body
        var id = req.params.id
        console.log(req.body.status, req.params.id)
        cadastraUsuario.alteraAtendimento(id, text, res)
    })

    app.delete('/atendimentos/:id', (req,res) => {
        cadastraUsuario.deletaAtendimento(req.params.id, res)
    })
}