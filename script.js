document.addEventListener('DOMContentLoaded', () => {
    const output = document.querySelector('.output');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonValue = button.textContent;

            if (button.classList.contains('number')) {
                currentInput += buttonValue;
                output.textContent = currentInput;
            } else if (button.classList.contains('operation')) {
                if (currentInput === '') return;

                if (previousInput !== '') {
                    currentInput = calculate(previousInput, operator, currentInput);
                }

                operator = buttonValue;
                previousInput = currentInput;
                currentInput = '';
            } else if (button.classList.contains('equal')) {
                if (previousInput === '' || currentInput === '') return;

                output.textContent = calculate(previousInput, operator, currentInput);
                previousInput = '';
                currentInput = '';
                operator = '';
            } else if (button.classList.contains('clear')) {
                currentInput = '';
                previousInput = '';
                operator = '';
                output.textContent = '';
            } else if (button.classList.contains('delete')) {
                currentInput = currentInput.slice(0, -1);
                output.textContent = currentInput;
            }
        });
    });

    function calculate(a, operator, b) {
        const num1 = parseFloat(a);
        const num2 = parseFloat(b);
        if (isNaN(num1) || isNaN(num2)) return;

        switch (operator) {
            case '+':
                return (num1 + num2).toString();
            case '-':
                return (num1 - num2).toString();
            case '*':
                return (num1 * num2).toString();
            case '/':
                return (num1 / num2).toString();
            default:
                return;
        }
    }
});