var telaAtual = document.getElementById('home')

function trocarTela(idProxTela) {
    telaAtual.classList.add('esconder') //adiciona a classe
    var proxTela = document.getElementById(idProxTela)

    if(idProxTela == 'perfil' && sessionStorage.length==0){
        proxTela = document.getElementById('login')
    }

    proxTela.classList.remove('esconder') //remove a classe

    telaAtual = proxTela

}

function logout(){
    sessionStorage.clear()
    window.location.href='index.html'
}