let sectionParent = document.querySelector('.button-section');
let divConvertResult = document.createElement('div');

function convertTemperature() {
    let iT = Number(prompt("Insira uma temperatura em ºC (Celsius):")).toFixed(1);

    let kelvin = iT;

    divConvertResult.innerHTML = `${}ºK (Kelvin)`;
    divConvertResult.innerHTML += `${}ºF (Fahrenheit)`;
}