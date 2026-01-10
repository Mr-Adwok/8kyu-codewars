// Remove First and Last Character
// Task
// Your goal is to write a function that removes the first and last characters of a string.You're given one parameter, the original string.

// Important: Your function should handle strings of any length ≥ 2 characters.For strings with exactly 2 characters, return an empty string.

//     Examples
// 'eloquent' -- > 'loquen'
// 'country'  -- > 'ountr'
// 'person'   -- > 'erso'
// 'ab'       -- > ''(empty string)
// 'xyz'      -- > 'y'
// Requirements
// The input string will always have at least 2 characters
// For strings with exactly 2 characters, return an empty string
// For strings with 3 or more characters, remove the first and last character
// The function should handle strings containing letters, numbers, and special characters
// Test Cases
// Your solution will be tested against:

// Basic functionality with common words
// Edge cases with 2 - character and 3 - character strings
// Strings containing numbers and special characters
// Random test cases of varying lengths

// solution one
function removeChar(str) {
    //You got this!
    var input_str = str;
    var output_str = '';

    for (var i = 1; i < input_str.length - 1; i++) {
        output_str += input_str[i];
    }

    return output_str;
};

// solution two
function removeChar(str) {
    arr = str.slice(1, str.length - 1)
    return arr
}



// solution three
function removeChar(str) {
    let result = '';

    if (str.length <= 2) return '';

    for (let i = 0; i < str.length; i++) {
        // skip first and last character by POSITION
        if (i === 0 || i === str.length - 1) {
            continue;
        }
        result += str[i];
    }

    return result;
}






console.log(removeChar("What"))

