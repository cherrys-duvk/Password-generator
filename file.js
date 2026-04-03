// Character sets for password generation
const characterSets = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

// Get DOM elements
const lengthSlider = document.getElementById('length');
const lengthValue = document.getElementById('lengthValue');
const uppercaseCheck = document.getElementById('uppercase');
const lowercaseCheck = document.getElementById('lowercase');
const numbersCheck = document.getElementById('numbers');
const symbolsCheck = document.getElementById('symbols');
const generateBtn = document.getElementById('generateBtn');
const passwordInput = document.getElementById('password');
const copyBtn = document.getElementById('copyBtn');

// Update length display when slider changes
lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value;
});

// Generate password function
function generatePassword() {
    const length = parseInt(lengthSlider.value);
    let availableChars = '';
    
    // Build character set based on checkboxes
    if (uppercaseCheck.checked) {
        availableChars += characterSets.uppercase;
    }
    if (lowercaseCheck.checked) {
        availableChars += characterSets.lowercase;
    }
    if (numbersCheck.checked) {
        availableChars += characterSets.numbers;
    }
    if (symbolsCheck.checked) {
        availableChars += characterSets.symbols;
    }
    
    // Check if at least one character set is selected
    if (availableChars === '') {
        alert('Please select at least one character type!');
        return;
    }
    
    // Generate random password
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        password += availableChars[randomIndex];
    }
    
    // Display the password
    passwordInput.value = password;
}

// Copy password to clipboard
function copyPassword() {
    if (passwordInput.value === '') {
        alert('Generate a password first!');
        return;
    }
    
    passwordInput.select();
    document.execCommand('copy');
    
    // Visual feedback
    copyBtn.textContent = '✅ Copied!';
    setTimeout(() => {
        copyBtn.textContent = '📋 Copy';
    }, 2000);
}

// Event listeners
generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);

// Generate initial password
generatePassword();
