document.addEventListener('DOMContentLoaded', function() {
    let balance = 0;
    const balanceDisplay = document.getElementById('balance');
    const addFundsInput = document.getElementById('addFunds');
    const spendFundsInput = document.getElementById('spendFunds');
    const addFundsButton = document.getElementById('addFundsButton');
    const spendFundsButton = document.getElementById('spendFundsButton');

    function updateBalance() {
        balanceDisplay.textContent = `Balance: $${balance.toFixed(2)}`;
    }

    addFundsButton.addEventListener('click', function() {
        const amount = parseFloat(addFundsInput.value);
        if (!isNaN(amount) && amount > 0) {
            balance += amount;
            updateBalance();
            addFundsInput.value = '';
        } else {
            alert('Please enter a valid amount to add.');
        }
    });

    spendFundsButton.addEventListener('click', function() {
        const amount = parseFloat(spendFundsInput.value);
        if (!isNaN(amount) && amount > 0 && amount <= balance) {
            balance -= amount;
            updateBalance();
            spendFundsInput.value = '';
        } else if (amount > balance) {
            alert('Insufficient funds.');
        } else {
            alert('Please enter a valid amount to spend.');
        }
    });

    updateBalance();
});
