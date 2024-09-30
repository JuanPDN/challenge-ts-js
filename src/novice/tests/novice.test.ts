import { arrayDiff, toCamelCase } from "../novice";

describe("arrayDiff", () => {
    describe("should remove all values from list a, which are present in list b keeping their order", () => {
        it("a was [1,2], b was [1]", () => {
            expect(arrayDiff([1, 2], [1])).toEqual([2]);
        })
        it("a was [1,2,2], b was [1]", () => {
            expect(arrayDiff([1, 2, 2], [1])).toEqual([2, 2]);
        })
        it("a was [1,2,2], b was [2]", () => {
            expect(arrayDiff([1, 2, 2], [2])).toEqual([1]);
        })
        it("a was [1,2,2], b was []", () => {
            expect(arrayDiff([1, 2, 2], [])).toEqual([1, 2, 2]);
        })
        it("a was [], b was [1,2]", () => {
            expect(arrayDiff([], [1, 2])).toEqual([]);
        })
        it("a was [1,2,3], b was [1,2]", () => {
            expect(arrayDiff([1, 2, 3], [1, 2])).toEqual([3]);
        })
    })
});

describe("toCamelCase", () => {
    describe("should return correct value", () => {
        it("An empty string was provided but not returned", () => {
            expect(toCamelCase('')).toEqual('')
        })
        it("toCamelCase('the_stealth_warrior') did not return correct value", () => {
            expect(toCamelCase('the_stealth_warrior')).toEqual('theStealthWarrior')
        })
        it("toCamelCase('The-Stealth-Warrior') did not return correct value", () => {
            expect(toCamelCase('The-Stealth-Warrior')).toEqual('TheStealthWarrior')
        })
        it("toCamelCase('A-B-C') did not return correct value", () => {
            expect(toCamelCase('A-B-C')).toEqual('ABC')
        })
    })
});
