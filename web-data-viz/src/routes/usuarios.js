//rota > controller > model > database

var express = require("express"); //conecta com o express (biblioteca de acesso ao SQL)
var router = express.Router(); //chamando a função do express que passa as rotas(router)

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

module.exports = router;