function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotaoReiniciar(ativo) {
    const botao = document.getElementById('btn-reiniciar');
    if (ativo) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
        botao.disabled = false;
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
        botao.disabled = true;
    }
}

function sortear() {
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const de = parseInt(document.getElementById('de').value);
    const ate = parseInt(document.getElementById('ate').value);

    if (isNaN(quantidade) || isNaN(de) || isNaN(ate) || quantidade <= 0 || de > ate) {
        alert("Verifique os valores inseridos.");
        return;
    }

    if (quantidade > (ate - de + 1)) {
        alert("Quantidade maior que o intervalo disponível.");
        return;
    }

    const sorteados = [];

    while (sorteados.length < quantidade) {
        const numero = gerarNumeroAleatorio(de, ate);
        if (!sorteados.includes(numero)) {
            sorteados.push(numero);
        }
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(', ')}</label>`;

    alterarStatusBotaoReiniciar(true); // Ativa o botão de reinício
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;

    alterarStatusBotaoReiniciar(false); // Desativa o botão de reinício
}
