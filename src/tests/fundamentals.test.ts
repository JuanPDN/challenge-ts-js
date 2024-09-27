import {
    smash, betterThanAverage, rentalCarCost,
    reverseList, digitize, rps, filter_list,
    createPhoneNumber, numberOfPeopple, findOutlier
} from '../fundamentals'


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

describe("reverseList", function () {
    it("should reverse some sample arrays", function () {
        expect(reverseList([1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
        expect(reverseList([3, 1, 5, 4])).toEqual([4, 5, 1, 3]);
    });
});

describe("Convert number to reversed array of digits", () => {
    it("Convert number to array", () => {
        expect(digitize(35231)).toEqual([1, 3, 2, 5, 3]);
        expect(digitize(0)).toEqual([0]);
    });
});

describe('rock paper scissors', function () {
    const getMsg = (n: number) => `Player ${n} won!`;

    it('player 1 win', function () {
        expect(rps('rock', 'scissors')).toBe(getMsg(1));
        expect(rps('scissors', 'paper')).toBe(getMsg(1));
        expect(rps('paper', 'rock')).toBe(getMsg(1));
    });

    it('player 2 win', function () {
        expect(rps('scissors', 'rock')).toBe(getMsg(2));
        expect(rps('paper', 'scissors')).toBe(getMsg(2));
        expect(rps('rock', 'paper')).toBe(getMsg(2));
    });

    it('draw', function () {
        expect(rps('rock', 'rock')).toBe('Draw!');
        expect(rps('scissors', 'scissors')).toBe('Draw!');
        expect(rps('paper', 'paper')).toBe('Draw!');
    });
});

describe("Filter list", () => {
    it("Should return filtered list", () => {
        expect(filter_list([1, 2, 'a', 'b'])).toEqual([1, 2]);
        expect(filter_list([1, 'a', 'b', 0, 15])).toEqual([1, 0, 15]);
        expect(filter_list([1, 2, 'aasf', '1', '123', 123])).toEqual([1, 2, 123]);
    });
});

describe('Create Phone Number', () => {
    it('Should create phone number', () => {
        expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe("(123) 456-7890");
        expect(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])).toBe("(111) 111-1111");
        expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe("(123) 456-7890");
    });
});

describe("Number of People in the Bus", () => {
    it("Should return number of people in the bus", () => {
        expect(numberOfPeopple([[10, 0], [3, 5], [5, 8]])).toBe(5);
        expect(numberOfPeopple([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]])).toBe(17);
        expect(numberOfPeopple([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]])).toBe(21);
        expect(numberOfPeopple([[0, 0]])).toBe(0);
    });
});

describe("Find The Parity Outlier", () => {
    it('Should return the outlier', function () {
        expect(findOutlier([0, 1, 2])).toBe(1);
        expect(findOutlier([1, 2, 3])).toBe(2);
        expect(findOutlier([2, 6, 8, 10, 3])).toBe(3);
        expect(findOutlier([0, 0, 3, 0, 0])).toBe(3);
        expect(findOutlier([1, 1, 0, 1, 1])).toBe(0);
    });
})
