let discountButton = document.getElementById('botao-desconto');

discountButton.addEventListener('click', () => {
    let product = prompt("Qual é o produto que você está comprando?");
    let price = prompt("Quanto custa o produto desejado?");

    let paragraphEl = document.getElementById('res');

    paragraphEl.innerHTML = `<h1>Calculando desconto para ${product}</h1>`;
    paragraphEl.innerHTML += `<p>O preço original do produto é R$${price} reais.</p>`;
    paragraphEl.innerHTML += `<p>Você acaba de ganhar R$${(price * 0.10).toFixed(2)} (-10%) de desconto!</p>`;
    paragraphEl.innerHTML += `<p>Você irá pagar R$${price - ((price * 0.10).toFixed(2))} pelo produto.</p>`;
});