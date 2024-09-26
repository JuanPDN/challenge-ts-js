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
    // Your solution here
    return []
}



export { smash, betterThanAverage, rentalCarCost }
