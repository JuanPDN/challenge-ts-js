# Exercises

1. **Array.diff**

Your goal in this exercise is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.

```
arrayDiff([1,2],[1]) == [2]
```

If a value is present in b, all of its occurrences must be removed from the other:

```
arrayDiff([1,2,2,2,3],[2]) == [1,3]
```

2. **Convert string to camel case**

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples:

`"the-stealth-warrior" gets converted to "theStealthWarrior"`

`"The_Stealth_Warrior" gets converted to "TheStealthWarrior"`

`"The_Stealth-Warrior" gets converted to "TheStealthWarrior"`

3. **Simple Pig Latin**

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples:

```
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
```