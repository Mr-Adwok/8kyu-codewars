// Write a function that returns a string in which firstname is swapped with last name.
//     Example(Input-- > Output)

// solution one
function nameShuffler(str) {
    let [first, last] = str.split(' ');
    return `${last} ${first}`
    // return last + " " + first
}

// solution two
function nameShuffler2(str) {
    return str.split(' ').reverse().join(" ");
}

console.log(nameShuffler("2pac shakur"));