let listaNumerosSorteados = [];
let numeroLimite = 10;
let numereoSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function gerarNumeroAleatorio() {
    let numeroEcolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite) {
        listaNumerosSorteados = []
    }

    if(listaNumerosSorteados.includes(numeroEcolhido)){
        return gerarNumeroAleatorio();

    }else{
        listaNumerosSorteados.push(numeroEcolhido)
        return numeroEcolhido;
    }
}

function limparCampo() {
    chute.document.querySelector('input');
    chute.value = '';
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numereoSecreto) {
        exibirTextoNaTela('h1', 'Acertou!!!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu com ${tentativas} ${palavraTentativas}`
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numereoSecreto) {
            exibirTextoNaTela('p', 'o número é menor');
        } else {
            exibirTextoNaTela('p', 'o número é maior');
        }
        tentativas++
    }
}

function reiniciarJogo() {
    numereoSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}