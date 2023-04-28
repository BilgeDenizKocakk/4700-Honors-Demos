const { InputValidator } = require('../src/InputValidator.js');
const consoleValidator = new InputValidator();

describe("Input validator tests", () => {
    test('0 is valid', () => {
      expect(consoleValidator.isValidInput("0")).toBe(true);
    });
    test('Positive integers are valid', () => {
      expect(consoleValidator.isValidInput("1")).toBe(true);
    });
    test('Negative integers are invalid', () => {
      expect(consoleValidator.isValidInput("-1")).toBe(false);
    });
    test('Strings are invalid', () => {
      expect(consoleValidator.isValidInput("bilge")).toBe(false);
    });
    test('Strings in between spaces are invalid', () => {
      expect(consoleValidator.isValidInput("  bizzbuzz  ")).toBe(false);
    });
    test('Positive integers in between spaces are valid', () => {
      expect(consoleValidator.isValidInput("  21  ")).toBe(true);
    });
    test('An empty string is invalid', () => {
        expect(consoleValidator.isValidInput("")).toBe(false);
      });
      test('Positive integers followed by spaces are valid', () => {
        expect(consoleValidator.isValidInput("15  ")).toBe(true);
      });
      test('Floats are invalid', () => {
        expect(consoleValidator.isValidInput("5.6")).toBe(false);
      });
})