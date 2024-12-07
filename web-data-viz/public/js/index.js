var telaAtual = document.getElementById('home')

function trocarTela(idProxTela) {
    telaAtual.classList.add('esconder') //adiciona a classe

    var proxTela = document.getElementById(idProxTela)

    proxTela.classList.remove('esconder') //remove a classe

    telaAtual = proxTela
}

