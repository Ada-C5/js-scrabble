Programs can do math, keep track of your bank account, or send a message to a friend.

use semicolons
Semicolons don't belong after if statements!
1. Confirm and prompt
We can make pop-up boxes appear!
confirm("I am ok");
prompt("Are you ok?");

User Input:
To do any of these actions, the program needs an input:
You can ask for input with a prompt.
prompt("What is your name?");

Data Types I & II
(1) Numbers
 a. numbers are quantities, just like you're used to. You can do math with them.
 numbers (e.g. 4.3, 134)

(2) Strings
 b. strings are sequences of characters, like the letters a-z, spaces, and even numbers. These are all strings: "Ryan", "4" and "What is your name?" Strings are extremely useful as labels, names, and content for your programs.
strings (e.g. "dogs go woof!", "JavaScript expert")

Data Type III: Booleans
(3) A boolean is either true or false
example:
I'm coding like a champ".length > 10

Using console.log:
This is commonly called printing out.
console.log() will take whatever is inside the parentheses and log it to the console below your code

Comparisons:
> Greater than
< Less than
<= Less than or equal to
>= Greater than or equal to
=== Equal to
!== Not equal to

Conditionals:
if (condition)
{
    // if condition is true
    // do this code
}
else // "otherwise"
{
    // do this code instead
}

if ("risha".length !== 5) {
    console.log("The condition is true");
} else {
    console.log("The condition is false");
}

Math:
Code-
1. ( ): control order of operations
2. * and /: multiplication and division
3. - and +: subtraction and addition

Examples:
1. 100/10 evaluates to 10
2. "Jane".length + 5 evaluates to 9
3. 5*(3+1) evaluates to 20

modulo
%, the computer will divide the first number by the second and then return the remainder of that division.

17 % 5 evaluates to 2
13 % 7 evaluates to 6

So why learn modulo?
- For one thing, it's good at testing divisibility.
- Consider 30 % 10. What does it return? There is nothing left over, so 0.
- How about 9 % 3? Also 0.

- We can use modulos in comparisons, like this:
  10 % 2 === 0 evaluates to true
  7 % 3 === 0 evaluates to false because there is 1 left over.

if/else modulo:
  if( 10 % 2 === 0  ) {
    console.log("The first number is even");
} else {
    console.log("The first number is odd");
}

Substrings:
Sometimes you don't want to display the entire string, just a part of it.
Code:
"some word".substring(x, y)
where x is where you start chopping and y is where you finish chopping the original string.
01234
 hello. substring(0, 2);
=> "he"
"wonderful day" .substring(3, 7)
=> "derf"

method that groups the score and the words together in ruby:
by_scores = word_array.group_by { |word| score(word) }
=> {3=>["cat", "dog"], 5=>["risha"]}
