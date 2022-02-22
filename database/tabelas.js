class Tabelas {
    init(db){
        this.db = db;
        // this.criarEndereco();
        this.criarOng();
        this.criarUsuario();
    }

    criarUsuario(){
        const sql = 'CREATE TABLE IF NOT EXISTS \
            usuario(cpf BIGINT primary key , \
            nome varchar(200) NOT NULL, \
            email varchar(50) NOT NULL, \
            senha varchar(32) NOT NULL, \
            permissao int NOT NULL, \
            endereco varchar(200)) \
            '
        this.db.run(sql, (erro) => {
            if(erro){
                console.log(erro);
            }else{
                console.log('Tabela USUÁRIO criada com sucesso!');
            }
        })
    }

    // criarEndereco(){
    //     const sql = 'CREATE TABLE IF NOT EXISTS \
    //         endereco(id integer primary key, \
    //         local varchar(200) NOT NULL) \
    //         '
    //         this.db.run(sql, (erro) => {
    //             if(erro){
    //                 console.log(erro)
    //             }else{
    //                 console.log('Tabela ENDEREÇO criada com sucesso!')
    //             }
    //         })
    //     }

        //contato = 31 9 8888-8888
        criarOng(){
            const sql = 'CREATE TABLE IF NOT EXISTS \
                ong(cnpj BIGINT primary key, \
                nome varchar(300) NOT NULL, \
                contato varchar(11) NOT NULL,  \
                coordenada varchar(10) NOT NULL, \
                endereco varchar(200) NOT NULL) \
                '
                this.db.run(sql, (erro) => {
                    if(erro){
                        console.log(erro)
                    }else{
                        console.log('Tabela ONG criada com sucesso!')
                    }
                })
            }
}

module.exports = new Tabelas