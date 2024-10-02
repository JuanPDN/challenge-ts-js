import { reverseString } from "../beginner";

describe("Reverse String", function () {
    it("Should return a string reversed", function () {
        expect(reverseString('world')).toEqual('dlrow');
        expect(reverseString('hello')).toEqual('olleh');
        expect(reverseString('')).toEqual('');
        expect(reverseString('h')).toEqual('h');
    });
});