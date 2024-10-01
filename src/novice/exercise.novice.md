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

4. **Extract the domain name from a URL**

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

Examples:

```
* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
```

5. **The Hashtag Generator**

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

- It must start with a hashtag (#).
- All words must have their first letter capitalized.
- If the final result is longer than 140 chars it must return false.
- If the input or the result is an empty string it must return false.

Examples:

```
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
```

6. **Count characters in your string**

The main idea is to count all the occurring characters in a string. If you have a string like `aba`, 
then the result should be `{'a': 2, 'b': 1}`.

What if the string is empty? Then the result should be empty object literal, {}.

