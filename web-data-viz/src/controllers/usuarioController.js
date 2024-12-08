//rota > controller > model > database

var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {

    var user = req.body.userServer;
    var senha = req.body.senhaServer;

    if (user == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(user, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.json({
                            id: resultadoAutenticar[0].idusuario,
                            nome: resultadoAutenticar[0].nome,
                            email: resultadoAutenticar[0].email,
                            usuario: resultadoAutenticar[0].usuario,
                            senha: resultadoAutenticar[0].senha,
                        });
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("User e/ou senha inválido(s)");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {

    console.log(req.body);

    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var usuario = req.body.userServer;
    var senha = req.body.senhaServer;

    console.log(nome, email, usuario, senha)

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (usuario == undefined) {
        res.status(400).send("Seu user está undefined!");
    } else {
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarModel(nome, email, usuario, senha)
            //Depois de inserir o cadastro no BD (BD > models > controllers)
            .then(
                function (resultado) {
                    res.json(resultado); //retorna o select como json
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.json(erro.sqlMessage);
                }
            );
    }
}

function inserirtentativa(req, res) {

    console.log(req.body);

    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var fkusuario = req.body.fkusuarioServer;
    var idquiz = req.body.idquizServer;

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.inserirtentativaModel(fkusuario,idquiz)
            //Depois de inserir o cadastro no BD (BD > models > controllers)
            .then(
                function (resultado) {
                    res.json(resultado); //retorna o select como json
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o insert! Erro: ",
                        erro.sqlMessage
                    );
                    res.json(erro.sqlMessage);
                }
            );
}

function inseriropcao(req, res) {

    console.log(req.body);

    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var fkperguntas = req.body.fkperguntaServer;
    var fkquiz = req.body.fkquizServer;
    var fkusuario = req.body.fkusuarioServer;
    var alternativa = req.body.alternativaServer;

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.inseriropcaoModel(fkperguntas,fkquiz,fkusuario,alternativa)
            //Depois de inserir o cadastro no BD (BD > models > controllers)
            .then(
                function (resultado) {
                    res.json(resultado); //retorna o select como json
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o insert das alternativas! Erro: ",
                        erro.sqlMessage
                    );
                    res.json(erro.sqlMessage);
                }
            );
    }
    

module.exports = {
    autenticar,
    cadastrar,
    inserirtentativa,
    inseriropcao
}