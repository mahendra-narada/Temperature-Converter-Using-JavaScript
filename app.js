const text_input = document.getElementById('user_input');
let submit = document.getElementById('submit');
let toCelcius = document.getElementById('toCelcius');
let toFahrenheit = document.getElementById('toFahrenheit');
let result = document.getElementById('result');

submit.onclick = convert;

function convert() {
    let inputvalue = parseFloat(text_input.value);
    if (isNaN(inputvalue)) {
        result.innerHTML = "Please enter a valid number";
        return;
    }
    if (toCelcius.checked) {
        result.innerHTML = ((inputvalue - 32) * 5 / 9).toFixed(2) + " °C";
    }

    else if (toFahrenheit.checked) {
        result.innerHTML = ((inputvalue * 9 / 5) + 32).toFixed(2) + " °F";
    }
    else{
        result.innerHTML = "Select the unit";
    }

}