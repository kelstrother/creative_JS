let bank = 250;
let newBank = bank;
newBank = 500;

console.log(bank, newBank)


//! OBJECTS AND ARRAYS REFFERENCE TYPES

const names = ["Kel", "Rachel", "Joe", "Jorge"]

const newNames = names
//!   THE ORIGINAL ARRAY WILL BE EFFECTED EVEN WHEN YOU CREATE A NEW ARRAY
newNames.push("Jess");
console.log(newNames)
console.log(names)