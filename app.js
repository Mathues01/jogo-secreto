let listaDeNumerosSorteados = []
let numeroLimite = 10
let numeroSecreto = gerarNumero()
let tentativas = 1
 

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portugues Female',
     {rate:1.2})
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto')
    exibirTextoNaTela('p', 'escolha um número entre 1 e 10')
}

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value
    console.log(chute == numeroSecreto)

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let menssagemTentativas = `Parabéns Você acertou o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('p', menssagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled')

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'Burro O número secreto é menor')
        } else {
            exibirTextoNaTela('p', 'Burro O número secreto é maior')

        }

        tentativas++
        limparCampo()
    }

}

function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length 

    if (quantidadeDeElementosNaLista == numeroLimite) { 
        listaDeNumerosSorteados = []
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumero()
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido
    }
}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = ''
}

function reiniciarJogo() {
    numeroSecreto = gerarNumero()
    limparCampo()
    tentativas = 1
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}