import { reverseString, endsWith } from "../beginner";

describe("Reverse String", function () {
    it("Should return a string reversed", function () {
        expect(reverseString('world')).toEqual('dlrow');
        expect(reverseString('hello')).toEqual('olleh');
        expect(reverseString('')).toEqual('');
        expect(reverseString('h')).toEqual('h');
    });
});

describe("String ends with?", () => {
    it("Should return true or false", () => {
        expect(endsWith('abcde', 'cde')).toBe(true)
        expect(endsWith('abcde', 'abc')).toBe(false)
        expect(endsWith('abc', '')).toBe(true)
    })
})