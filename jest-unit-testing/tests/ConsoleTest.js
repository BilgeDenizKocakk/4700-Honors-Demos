const { Console } = require('../src/Console.js');
const console = new Console();

describe("Console tests", () => {
    const consoleSpy = jest.spyOn(global.console, 'log');
    test('Loops until a given number, from 0 to loop limit, printing the transformed numbers', () => {
      console.loopUntil(5);
      expect(consoleSpy.mock.calls).toStrictEqual([[0],[1],[2],["foo"], [4], ["bar"]]);
    });
    test('Prints out Invalid input. for an invalid input', () => {
      console.judgeUserInput("bilge");
      expect(consoleSpy.mock.calls).toStrictEqual([["Invalid input."]]);
    });
})