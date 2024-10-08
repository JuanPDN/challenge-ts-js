import {
    arrayDiff, toCamelCase, pigIt, domainName,
    generateHashtag, countLetters, alphabetPosition,
    alphanumeric
} from "../novice";

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

describe("Simple Pig Latin", () => {
    describe("should return correct value", () => {
        it("should return correct value", () => {
            expect(pigIt('')).toEqual('')
        })
        it("should return igPay atinlay siay oolcay", () => {
            expect(pigIt('Pig latin is cool')).toEqual('igPay atinlay siay oolcay')
        })
        it("should return hisTay siay ymay tringsay", () => {
            expect(pigIt('This is my string')).toEqual('hisTay siay ymay tringsay')
        })
    })
})

describe("domainName", () => {
    describe("should return correct value", () => {
        it("should return google", () => {
            expect(domainName('http://google.com')).toEqual('google')
        })
        it("should return google", () => {
            expect(domainName('http://google.co.jp')).toEqual('google')
        })
        it("should return xakep", () => {
            expect(domainName('www.xakep.ru')).toEqual('xakep')
        })
        it("should return youtube", () => {
            expect(domainName('https://youtube.com')).toEqual('youtube')
        })
    })
})

describe("The Hashtag Generator", () => {
    it("Expected an empty string to return false", () => {
        expect(generateHashtag("")).toEqual(false)
    })
    it("Still an empty string", () => {
        expect(generateHashtag(" ".repeat(200))).toEqual(false)
    })
    it("Expected a Hashtag (#) at the beginning.", () => {
        expect(generateHashtag("Do We have A Hashtag")).toEqual("#DoWeHaveAHashtag")
    })
    it("Should handle a single word.", () => {
        expect(generateHashtag("Codewars")).toEqual("#Codewars")
    })
    it("Should remove spaces.", () => {
        expect(generateHashtag("Codewars Is Nice")).toEqual("#CodewarsIsNice")
    })
    it("Should capitalize first letters of words.", () => {
        expect(generateHashtag("codewars is nice")).toEqual("#CodewarsIsNice")
    })
    it("Should work", () => {
        expect(generateHashtag("code" + " ".repeat(140) + "wars")).toEqual("#CodeWars")
    })
    it("Should return false if the final word is longer than 140 chars.", () => {
        expect(generateHashtag("a".repeat(140))).toEqual(false)
    })
    it("Too long", () => {
        expect(generateHashtag("a".repeat(140))).toEqual(false)
    })
})

describe("countLetters", () => {
    it("should return correct value", () => {
        expect(countLetters('')).toEqual({})
        expect(countLetters('a')).toEqual({ a: 1 })
        expect(countLetters('ab')).toEqual({ a: 1, b: 1 })
        expect(countLetters('aba')).toEqual({ a: 2, b: 1 })
        expect(countLetters('ABC')).toEqual({ A: 1, B: 1, C: 1 })
    })
})

describe("Replace With Alphabet Position", () => {
    it("should return correct value to The sunset sets at twelve o' clock.", () => {
        expect(alphabetPosition("The sunset sets at twelve o' clock."))
            .toEqual("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")
    })
    it("should return correct value to The narwhal bacons at midnight.", () => {
        expect(alphabetPosition("The narwhal bacons at midnight."))
            .toEqual("20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20")
    })
})

describe("Alphanumeric", () => {
    it("should return true", () => {
        expect(alphanumeric('Mazinkaiser')).toEqual(true)
        expect(alphanumeric('PassW0rd')).toEqual(true)
    })
    it("should return false", () => {
        expect(alphanumeric('')).toEqual(false)
        expect(alphanumeric('hello world_')).toEqual(false)
    })
})
