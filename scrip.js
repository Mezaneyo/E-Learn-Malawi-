const display = document.getElementById('display');
        const clearButton = document.getElementById('clear');
        const equalsButton = document.getElementById('equals');
        const addButton = document.getElementById('add');
        const subtractButton = document.getElementById('subtract');
        const multiplyButton = document.getElementById('multiply');
        const divideButton = document.getElementById('divide');
        const sqrtButton = document.getElementById('sqrt');
        const powerButton = document.getElementById('power');
        const openParenButton = document.getElementById('open-paren');
        const closeParenButton = document.getElementById('close-paren');
        const numberButtons = document.querySelectorAll('button[id^="num-"]');

        // Add event listeners to buttons
        clearButton.addEventListener('click', clearDisplay);
        equalsButton.addEventListener('click', calculateResult);
        addButton.addEventListener('click', () => appendOperator('+'));
        subtractButton.addEventListener('click', () => appendOperator('-'));
        multiplyButton.addEventListener('click', () => appendOperator('*'));
        divideButton.addEventListener('click', () => appendOperator('/'));
        sqrtButton.addEventListener('click', () => appendOperator('Math.sqrt('));
        powerButton.addEventListener('click', () => appendOperator('**'));
        openParenButton.addEventListener('click', () => appendOperator('('));
        closeParenButton.addEventListener('click', () => appendOperator(')'));
        numberButtons.forEach(button => button.addEventListener('click', () => appendNumber(button.textContent)));

        function clearDisplay() {
            display.value = '';
        }

        function calculateResult() {
            try {
                const result = eval(display.value);
                display.value = result;
            } catch (error) {
                display.value = 'Error';
            }
        }

        function appendNumber(number) {
            display.value += number;
        }

        function appendOperator(operator) {
            display.value += operator;
        }

        // Add event listener for keyboard input
        window.addEventListener('keydown', (event) => {
            if (event.key >= 0 && event.key <= 9) {
                appendNumber(event.key);
            } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
                appendOperator(event.key);
            } else if (event.key === 'Enter') {
                calculateResult();
            } else if (event.key === 'Backspace') {
                clearDisplay();
            }
        });