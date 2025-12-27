// 📜 Codewars Kata Description
// Title: Sort the Vowels!
// Description:
// In this kata, you will be given a string.
// You must return a string where:
// Each character is on a new line
// Vowels(a, e, i, o, u — both lowercase and uppercase)
// are prefixed with |
// All other characters are suffixed with |
// 📌 Rules:
// The order of characters must remain the same
// Treat uppercase and lowercase vowels the same
// The input will always be a string
// The output must be a single string with newline(\n) separators



function sortVowels(s) {
    s = s.split("");

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            s[i] = '|' + s[i];
        } else {
            s[i] = s[i] + '|';
        }
    }

    return s.join('\n');
}
