// Initialize balance variable
let balance = 1000;

// Select DOM elements
const balanceDisplay = document.getElementById('balanceDisplay');
const amountInput = document.getElementById('amountInput');
const depositBtn = document.getElementById('depositBtn');
const withdrawBtn = document.getElementById('withdrawBtn');

// Function to update the balance display
function updateBalanceDisplay() {
    balanceDisplay.textContent = `Balance: $${balance}`; // Update displayed balance
}

// Event listener for deposit button
depositBtn.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value); // Get the amount from input
    if (amount > 0) { // Check if amount is valid
        balance += amount; // Increase balance
        updateBalanceDisplay(); // Update display
        amountInput.value = ''; // Clear input field
    } else {
        alert('Please enter a valid amount to deposit.'); // Alert for invalid input
    }
});

// Event listener for withdraw button
withdrawBtn.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value); // Get the amount from input
    if (amount > 0 && amount <= balance) { // Check if amount is valid and within balance
        balance -= amount; // Decrease balance
        updateBalanceDisplay(); // Update display
        amountInput.value = ''; // Clear input field
    } else {
        alert('Please enter a valid amount to withdraw or insufficient funds.'); // Alert for invalid input
    }
});

// Initialize the balance display on page load
updateBalanceDisplay();
