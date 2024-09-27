//Exercise 1

const smash = (words: Array<string>): string => {
    const sentence = words.join(" ")
    return sentence
}

//Exercise 2

const betterThanAverage = (classPoints: number[], yourPoints: number): boolean => {

    classPoints.push(yourPoints)
    const average = classPoints.reduce((prev, num) => prev + num) / classPoints.length

    return yourPoints > average
}

//Exercise 3

const rentalCarCost = (d: number): number => {
    const total = d * 40
    const discount = (d >= 7) ? 50 : (d >= 3) ? 20 : 0

    return total - discount
}

//Exercise 4


const reverseList = (list: number[]): number[] => {
    const reversed = list.reverse()

    return reversed
}

// Exercise 5

const digitize = (n: number): Array<number> => {
    const convertToArray = Array.from(String(n), (n) => Number(n))
    const reversed = convertToArray.reverse()

    return reversed
}

//Exercise 6

const rps = (p1: string, p2: string): string => {

    const rules: { [key: string]: string } = { rock: "scissors", scissors: "paper", paper: "rock" }
    const result = p1 === p2 ? "Draw!" : rules[p1] === p2 ? "Player 1 won!" : "Player 2 won!"

    return result
};
export { smash, betterThanAverage, rentalCarCost, reverseList, digitize, rps }
