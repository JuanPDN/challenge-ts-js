import { smash, betterThanAverage, rentalCarCost } from '../fundamentals'


describe("Smash words", () => {
    it("One word example should return the word.", () => {
        expect(smash(["hello"])).toMatch("hello")
    })

    it("Should return empty string for empty array.", () => {
        expect(smash([])).toMatch("")
    })

    it("Multiple words should be separated by spaces.", () => {
        expect(smash(["hello", "world"])).toMatch("hello world")
        expect(smash(["hello", "amazing", "world"])).toMatch("hello amazing world")
        expect(smash(["this", "is", "a", "long", "sentence"])).toMatch("this is a long sentence")
    })
})

describe("Better Than Average", () => {
    it("betterThanAverage([2, 3], 5) should return True", () => {
        expect(betterThanAverage([2, 3], 5)).toBe(true)
    })
    it("betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) should return True", () => {
        expect(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)).toBe(true)
    })
    it("betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9) should return False", function () {
        expect(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)).toBe(false);
    });

    it("betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50) should return False", function () {
        expect(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)).toBe(false);
    });

    it("betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21) should return False", function () {
        expect(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21)).toBe(false);
    });
})

describe("Rental Car Cost", () => {
    it("Should work for under 3 days:", function () {
        expect(rentalCarCost(1)).toBe(40);
        expect(rentalCarCost(2)).toBe(80);
    });

    it("Should work for under 7 days:", function () {
        expect(rentalCarCost(3)).toBe(100);
        expect(rentalCarCost(4)).toBe(140);
        expect(rentalCarCost(5)).toBe(180);
        expect(rentalCarCost(6)).toBe(220);
    });

    it("Should work for 7 or more days:", function () {
        expect(rentalCarCost(7)).toBe(230);
        expect(rentalCarCost(8)).toBe(270);
        expect(rentalCarCost(9)).toBe(310);
        expect(rentalCarCost(10)).toBe(350);
    });
});