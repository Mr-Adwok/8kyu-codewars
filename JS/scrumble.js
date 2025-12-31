// 🧠 Kata: Scramble a String by Index Mapping
// Description
// You are given a string and an array of integers of the same length.

// Each number in the array represents the new position of the character at the same index in the string.

// Your task is to rearrange the characters of the string according to the index mapping and return the resulting string.

//     Rules

// str and arr will always have the same length

// arr will contain all integers from 0 to str.length - 1

// Each index appears exactly once

// Do not modify the original inputs

// Example
// scramble("abcd", [0, 3, 1, 2]) // "acdb"


// Explanation:

// Character	Original Index	New Index
// a	0	0
// b	1	3
// c	2	1
// d	3	2
// Function Signature
// function scramble(str, arr) {
//     // your code here
// }

// More Examples
// scramble("hello", [1, 0, 4, 3, 2]) // "eholl"
// scramble("code", [3, 2, 1, 0])    // "edoc"
// scramble("abc", [2, 1, 0])        // "cba"
// Notes
// Think in terms of index mapping
// The value at arr[i] tells you where str[i] should go