let currentPrice = prompt("Insira a cotação atual do dólar:");

let convertButton = document.getElementById('botao-converter');

convertButton.addEventListener('click', () => {
    let walletMoney = prompt("Com quantos reais você está na carteira?");
    let paragraphEl = document.getElementById('res');

    paragraphEl.innerHTML = `Com base no dinheiro da sua carteira, você poderá comprar US$${(walletMoney / currentPrice).toFixed(2)} doláres!`;
});