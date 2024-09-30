import { arrayDiff } from "../novice";

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
