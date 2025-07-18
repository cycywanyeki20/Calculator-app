let display = document.querySelector('.display');
let numberInput = document.getElementById('numberInput');
let resultDiv = document.getElementById('result');

function handleInput(choice) {
    if (choice === 'yes') {
        display.style.display = 'none';
        numberInput.style.display = 'block';
    } else if (choice === 'no') {
        resultDiv.innerHTML = 'Goodbye!';
        setTimeout(() => location.reload(), 2000); // Reload after 2 seconds
    }
}

function calculate() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.innerHTML = 'Please enter valid numbers.';
        return;
    }

    let sum_result = num1 + num2;
    let difference_result = num1 - num2;
    let quotient_result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero!';
    let product_result = num1 * num2;

    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `
        Here are your results!<br>
        Sum: ${sum_result}<br>
        Difference: ${difference_result}<br>
        Quotient: ${quotient_result}<br>
        Product: ${product_result}
    `;
    numberInput.style.display = 'none';
}