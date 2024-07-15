document.getElementById('calculation-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const totalPower = parseFloat(document.getElementById('total-power').value);
    const selfConsumptionPercentage = parseFloat(document.getElementById('self-consumption').value);
    const inputPower = parseFloat(document.getElementById('input-power').value);
    const outputPower = parseFloat(document.getElementById('output-power').value);

    if (isNaN(totalPower) || isNaN(selfConsumptionPercentage) || isNaN(inputPower) || isNaN(outputPower)) {
        document.getElementById('self-consumption-result').textContent = 'Please enter valid numbers.';
        document.getElementById('losses-result').textContent = '';
        return;
    }

    // Menghitung Pemakaian Sendiri
    const selfConsumption = (selfConsumptionPercentage / 100) * totalPower;
    document.getElementById('self-consumption-result').textContent = `Pemakaian Sendiri: ${selfConsumption.toFixed(2)} kW`;

    // Menghitung Rugi-Rugi Daya pada Transformer
    const losses = inputPower - outputPower;
    document.getElementById('losses-result').textContent = `Rugi-Rugi Daya pada Transformer: ${losses.toFixed(2)} kW`;
});
