const body = document.body;
const codigoCorSpan = document.getElementById('codigoCor');
const container = document.querySelector('.container');

function gerarNovaCor() {
    const R = gerarNumeroAleatorio(255);
    const G = gerarNumeroAleatorio(255);
    const B = gerarNumeroAleatorio(255);

    const corHex = converterRGBParaHex(R, G, B);

    body.style.backgroundColor = corHex;
    codigoCorSpan.textContent = corHex;

    ajustarContrasteSimples(R, G, B);
}

function gerarNumeroAleatorio(maximo) {
    return Math.floor(Math.random() * (maximo + 1));
}

function decimalParaHex(decimal) {
    let hex = decimal.toString(16);
    
    if (hex.length === 1) {
        hex = '0' + hex;
    }
    return hex.toUpperCase();
}

function converterRGBParaHex(r, g, b) {
    const hexR = decimalParaHex(r);
    const hexG = decimalParaHex(g);
    const hexB = decimalParaHex(b);

    return '#' + hexR + hexG + hexB;
}

function ajustarContrasteSimples(r, g, b) {
    const media = (r + g + b) / 3;

    if (media < 127) {
        body.style.color = '#fff';
        container.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    } else { 
        body.style.color = '#333';
        container.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    }
}

gerarNovaCor();