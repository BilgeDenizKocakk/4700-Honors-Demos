const { Transformer } = require('../src/Transformer.js');
const consoleTransformer = new Transformer();

describe("Transformer tests", () => {
    test('0 should remain 0', () => {
      expect(consoleTransformer.transform(0)).toBe(0);
    });
    test('Not divisible by 3,5, and 7 shoud remain as it is', () => {
      expect(consoleTransformer.transform(2)).toBe(2);
    });
    test('If divisible by only 3, should become foo', () => {
      expect(consoleTransformer.transform(3)).toBe("foo");
    });
    test('If divisible by only 5, should become bar', () => {
      expect(consoleTransformer.transform(5)).toBe("bar");
    });
    test('If divisible by only 7, should become baz', () => {
      expect(consoleTransformer.transform(7)).toBe("baz");
    });
    test('If divisible by 3 and 5, but not 7, should become foobar', () => {
      expect(consoleTransformer.transform(15)).toBe("foobar");
    });
    test('If divisible by 3 and 7, but not 5, should become foobaz', () => {
      expect(consoleTransformer.transform(21)).toBe("foobaz");
    });
    test('If divisible by 5 and 7, but not 3, should become barbaz', () => {
      expect(consoleTransformer.transform(35)).toBe("barbaz");
    });
    test('If divisible by 3, 5, and 7, should become foobarbaz', () => {
      expect(consoleTransformer.transform(105)).toBe("foobarbaz");
    });
})
