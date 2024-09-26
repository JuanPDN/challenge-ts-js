/* 
Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.Be careful,
there shouldn't be a space at the beginning or the end of the sentence!

Example:

['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'*/

const smash = (words: Array<string>): string => {
    // Your code here
    return ""
}

/*
How good are you really?
You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return true if you're better, else false!

Note:
Your points are not included in the array of your class's points. Do not forget them when calculating the average score!
*/

const betterThanAverage = (classPoints: number[], yourPoints: number): boolean => {
    // Your code here
    return true
}


/*
Transportation on vacation

After a hard quarter in the office you decide to get some rest on a vacation.
So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. 
The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. 
Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).
*/

const rentalCarCost = (d: number): number => {
    // Your solution here
    return 0
}


export { smash, betterThanAverage, rentalCarCost }
