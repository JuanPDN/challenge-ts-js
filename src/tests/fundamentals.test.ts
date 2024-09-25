import { smash } from '../fundamentals'


describe("Smash words", () => {
    test('One word example should return the word.', () => {
        expect(smash(["hello"])).toMatch("hello")
    })

    test("Should return empty string for empty array.", () => {
        expect(smash([])).toMatch("")
    })

    test("Multiple words should be separated by spaces.", () => {
        expect(smash(["hello", "world"])).toMatch("hello world")
        expect(smash(["hello", "amazing", "world"])).toMatch("hello amazing world")
        expect(smash(["this", "is", "a", "long", "sentence"])).toMatch("this is a long sentence")
    })
})