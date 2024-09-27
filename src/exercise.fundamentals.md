# Exercises

1. **Sentence Smash**

Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.Be careful,
there shouldn't be a space at the beginning or the end of the sentence!

Example:

```bash
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
```

2. **How good are you really?**

You receive an array with your peers' test scores. Now calculate the average and compare your score!
Return true if you're better, else false!

Note:
Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

3. **Transportation on vacation**

After a hard quarter in the office you decide to get some rest on a vacation.
So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. 
The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. 
Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).

4. **Reverse list**

In this exercise you will create a function that takes in a list and returns a list with the reverse order.

5. **Convert number to reversed array of digits**

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):

```bash
35231 => [1,3,2,5,3]
0 => [0]
```

6. **Rock Paper Scissors**

Let's play! You have to return which player won! In case of a draw return `Draw!`.

Examples(Input1, Input2 --> Output):

```bash
"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
```
7. **List Filtering**

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

```bash
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
```

8. **Create Phone Number**

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

```bash
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
```

The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!