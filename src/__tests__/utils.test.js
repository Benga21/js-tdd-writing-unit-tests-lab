// src/__tests__/utils.test.js
import { isPalindrome } from '../utils';

describe('isPalindrome', () => {
  test('returns true for a palindrome word', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('returns false for a non-palindrome word', () => {
    expect(isPalindrome('car')).toBe(false);
  });

  test('returns true for a case-insensitive palindrome word', () => {
    expect(isPalindrome('Mom')).toBe(true);
  });

  test('returns false for an empty string', () => {
    expect(isPalindrome('')).toBe(false);
  });

  test('throws an error for non-alphabetic characters', () => {
    expect(() => isPalindrome('racecar123')).toThrow('Input must only contain alphabetic characters');
  });

  test('throws an error if the input is not a string', () => {
    expect(() => isPalindrome(123)).toThrow('Input must be a string');
  });
});
