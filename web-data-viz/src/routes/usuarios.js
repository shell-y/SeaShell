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

router.post("/inserirtentativa", function (req, res) {
    usuarioController.inserirtentativa(req, res);
});

router.post("/inseriropcao", function (req, res) {
    usuarioController.inseriropcao(req, res);
});

router.post("/updatetentativa", function (req, res) {
    usuarioController.updatetentativa(req, res);
});

//POST para inserir, GET para select

router.get("/selectperfil/:idusuario", function (req, res) {
    usuarioController.selectperfil(req, res);
});

router.get("/coletarperfisgeral", function (req, res) {
    usuarioController.coletarperfisgeral(req, res);
});

module.exports = router;