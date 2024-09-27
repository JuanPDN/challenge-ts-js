# Exercises

1. **Sentence Smash**

Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.Be careful,
there shouldn't be a space at the beginning or the end of the sentence!

Example:

```
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

```
35231 => [1,3,2,5,3]
0 => [0]
```

6. **Rock Paper Scissors**

Let's play! You have to return which player won! In case of a draw return `Draw!`.

Examples(Input1, Input2 --> Output):

```
"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
```
7. **List Filtering**

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

```
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
```

8. **Create Phone Number**

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

```
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
```

The returned format must be correct in order to complete this challenge.

Don't forget the space after the closing parentheses!

9. **Number of People in the Bus**

There is a bus moving in the city which takes and drops some people at each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

10. **Find The Parity Outlier**

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" `N`.

Examples

```
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
```