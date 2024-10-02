import { solution } from "../beginner";

describe("Reverse String", function () {
    it("Should return a string reversed", function () {
        expect(solution('world')).toEqual('dlrow');
        expect(solution('hello')).toEqual('olleh');
        expect(solution('')).toEqual('');
        expect(solution('h')).toEqual('h');
    });
});