/* 
Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.Be careful,
there shouldn't be a space at the beginning or the end of the sentence!

Example:

['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'*/

const smash = (words: Array<string>): string => {
    const sentence = words.join(" ")
    return sentence
}

/*
How good are you really?
You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return true if you're better, else false!

Note:
Your points are not included in the array of your class's points. Do not forget them when calculating the average score!
*/

const betterThanAverage = (classPoints: number[], yourPoints: number): boolean => {

    classPoints.push(yourPoints)
    const average = classPoints.reduce((prev, num) => prev + num) / classPoints.length

    return yourPoints > average
}

export { smash, betterThanAverage }
