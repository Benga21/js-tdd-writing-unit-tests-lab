import { isPalindrome } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('wordInput');
    const button = document.getElementById('checkButton');
    const result = document.getElementById('result');

    // Ensure elements exist before adding event listeners
    if (input && button && result) {
        button.addEventListener('click', () => {
            const word = input.value;
            try {
                const isPalin = isPalindrome(word);
                result.textContent = isPalin ? 'The word is a palindrome!' : 'The word is not a palindrome.';
            } catch (error) {
                result.textContent = `Error: ${error.message}`;
            }
        });
    } else {
        console.error('Required elements not found in the DOM.');
    }
});
