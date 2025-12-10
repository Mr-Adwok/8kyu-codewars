// You will be given a list of strings.You must sort it alphabetically(case -sensitive, and based on the ASCII values of the chars) and then return the first value.
// The returned value must be a string, and have "***" between each of its letters.
// You should not remove or add elements from / to the array.

// first solution
function twoSort(s) {
    s = s.sort()
    let f = s[0]
    result = []
    for (let i = 0; i < f.length; i++) {
        result.push(f[i])
        if (f.length - 1 == i) {
            break
        }
        result.push("***")
    }
    return result.join("")
}
console.log(twoSort("banana", "apple", "orange", "grape"))

// second solution

function twoSort2(s) {
    return s.sort().split("")[0].join("***")
}


