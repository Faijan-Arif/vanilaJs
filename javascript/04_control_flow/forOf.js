// ++++++++++++++++++++++++++++   for of   +++++++++++++++++++++++
 /**
  For Of loop is basically used for Array, map, Set, String to itrate over values
  For Of is usde to itrate over the values in an objets, such as an Array or a String.
  it always alow to access the values of the objects directly, without having to 
  used an index
  */

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

//Example :-
const myName = "Faijan";
for (const char of myName) {
    // console.log(`cahractor of my name is ${char}`); 
}

const myLuckyNumber = [234,5234,234,4,444,223,23232,6878];
for (const num of myLuckyNumber) {
    // console.log(`my lucky number => ${num}`);
}