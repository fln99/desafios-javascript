let readjustButton = document.getElementById('botao-reajustar');

readjustButton.addEventListener('click', () => {
    let employeeName = prompt("Qual o nome do funcionário?");
    let employeeSalary = Number(prompt(`Salário de ${employeeName}:`));
    let readjustValue = Number(prompt(`O salário de ${employeeName} será reajustado em quantos %?`));

    let paragraphEl = document.getElementById('res');

    let finalSalary = employeeSalary + (employeeSalary * (readjustValue / 100));

    paragraphEl.innerHTML = `<h1>${employeeName} recebeu um aumento salarial!</h1>`;
    paragraphEl.innerHTML += `<p>O salário atual era R$${employeeSalary}.</p>`;
    paragraphEl.innerHTML += `<p>Com um aumento de ${readjustValue}%, o salário do próximo mês terá R$${employeeSalary * (readjustValue / 100)} de acréscimo.`;
    paragraphEl.innerHTML += `<p>Com base nisso, ${employeeName} passará a ganhar R$${finalSalary} reais!</p>`;
});