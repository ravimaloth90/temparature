document.addEventListener('DOMContentLoaded', function() {
    const convertButton = document.getElementById('convertButton');
    const celsiusInput = document.getElementById('celsiusInput');
    const result = document.getElementById('result');

    convertButton.addEventListener('click', function() {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            const fahrenheit = (celsius * 9 / 5) + 32;
            result.textContent = `${celsius.toFixed(2)}°C is ${fahrenheit.toFixed(2)}°F`;
        } else {
            result.textContent = 'Please enter a valid temperature';
        }
    });
});