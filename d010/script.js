function calculateBhaskara() {
    let aValue = Number(prompt("Digite o valor de A:"));
    let bValue = Number(prompt("Digite o valor de B:"));
    let cValue = Number(prompt("Digite o valor de C:"));

    let paragrapEl = document.getElementById('res');

    let formula = bValue ** 2 - (4 * aValue * cValue);

    paragrapEl.innerHTML = `<h1>Resolvendo Bhaskara</h1>`;
    paragrapEl.innerHTML += `<p>A equação atual é &triangle; = ${bValue}² - 4.${aValue}.${cValue}</p>`;
    paragrapEl.innerHTML += `<p>O valor calculado foi <span style="background-color: yellow;">&triangle; = ${formula}</span></p>`;
}