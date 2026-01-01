// Write a function to convert a name into initials.This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F





// solution one
function abbrevName(name) {
    name = name.toUpperCase();
    name = name.split(" ");
    return `${name[0][0]}.${name[1][0]}`;


}

// solution two
function abbrevName2(name) {
    let [first, last] = name.split(' ');
    return first[0].toUpperCase() + "." + last[0].toUpperCase();
}



// solution three
function abbrevName3(name) {

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}



console.log(abbrevName("Sam Harris"))