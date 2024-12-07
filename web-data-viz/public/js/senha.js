    function verSenha(idcampo,idimagem) {
        var senhaInput = document.getElementById(idcampo)
        var visualizarIcone = document.getElementById(idimagem)

        if (senhaInput.type == "password") {
            senhaInput.type = "text"
            visualizarIcone.src = 'https://icons.veryicon.com/png/o/internet--web/property-2/closed-eyes.png'
        } else {
            senhaInput.type = "password"
            visualizarIcone.src = 'https://icons.veryicon.com/png/o/construction-tools/tool-1/eye-61.png'
        }
    }

    function verificarSenha() {
        var senhaInput = document.getElementById('inputSenhaCadastro')
        var senhaInputVerify = document.getElementById('inputSenhaVerificar')
        var label = document.getElementById('labelVerificar')

        if (senhaInputVerify.value != senhaInput.value) {
            // label.innerHTML='Confirme a senha <img src="https://64.media.tumblr.com/195aa4df5fec4cea6f5d597c695ef756/7cf915f60095705b-31/s75x75_c1/99901ca014db2811e368d6c30932ce8da362984b.gif" style="height:2vh; vertical-align: middle;">'
            label.innerHTML = 'Confirme a senha <img src="https://static.tumblr.com/rltvkjt/9lnlmr41u/th_k_atencao.gif" style="max-height:2vh; vertical-align: middle;">'
            // label.innerHTML='Confirme a senha <img src="http://i11.photobucket.com/albums/a168/evelynregly/minigifs/xiss.gif" style="max-height:2vh; vertical-align: middle;">'
        } else {
            // senhaInputVerify.style='initial-value'
            label.innerHTML = 'Confirme a senha'
        }

    }