import React, { useState } from 'react';
import { isPalindrome } from './utils';

const App = () => {
    const [word, setWord] = useState('');
    const [result, setResult] = useState('');

    const checkPalindrome = () => {
        try {
            const isPalin = isPalindrome(word);
            setResult(isPalin ? 'The word is a palindrome!' : 'The word is not a palindrome.');
        } catch (error) {
            setResult(`Error: ${error.message}`);
        }
    };

    return (
        <div>
            <h1>Palindrome Checker</h1>
            <input
                type="text"
                value={word}
                onChange={(e) => setWord(e.target.value)}
                placeholder="Enter a word"
            />
            <button onClick={checkPalindrome}>Check</button>
            <p>{result}</p>
        </div>
    );
};

export default App;
