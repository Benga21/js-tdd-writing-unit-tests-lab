// src/utils.js
export function isPalindrome(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }
  if (str.length === 0) {
    return false; 
  }
  if (/[^a-zA-Z]/.test(str)) {
    throw new Error('Input must only contain alphabetic characters');
  }
  
  const cleanedStr = str.toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  
  return cleanedStr === reversedStr;
}
