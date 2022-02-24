const validaLogin = require('../model/validaLogin')

module.exports = app => {
    app.post('/html/logar', (req,res) => {

        var auth = {
            cpf: req.body.cpf,
            senha: req.body.senha
        }

        // console.log(auth)
        if(auth.cpf == '' || auth.senha == '')
        {
            res.send("CPF E SENHA OBRIGATÓRIOS.")
        }
        else
        {
            validaLogin.validarLogin(auth, res);
        }
    })
}
