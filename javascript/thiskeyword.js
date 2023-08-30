//Q => find the output;
/*
const user = {
    firstName : 'faijan',
    getName(){
        const firstName = 'faijanArif';
        return this.firstName;
    },
};

console.log(user.getName());  //its always pointing parent ojrcts line no => 1, instead of line 4
*/

//Q => what is the result of accessing its ref and why ?
/*
function makeUser() {
    return {
        name : 'faijan',
        ref : this,
    };
}

let user = makeUser();
// console.log(user.ref().name);
console.log(user);
*/

// Q =>  what is the output
/*
const user = {
    name : 'faijan Arif',
    logMessage(){
        console.log(this.name);//what is logged
    },
};
// setTimeout(user.logMessage, 10000); //its throw undefined 
//But how could you fix this?

setTimeout(function(){
    user.logMessage();

}, 10000);
*/

//Q => what would be output
/*
const user ={
    name : 'jack SPARROW',
    greet(){                //Normal function
    return `Helllo, ${this.name}!`;
},


farewell : ()=>{            //Arrow function
    return `GoodBye, ${this.name}!`;
},
}

console.log(user.greet());  //what is loggee? => hello jack sparrow
console.log(user.farewell()); // what is logged? => goodbye undefined
*/

//Q => create an Object calculator
  /*
let calculator ={

    read (){
        this.a = +prompt("a = ", 0);
        this.b = +prompt("b = ", 0);
    },

    sum(){
        return this.a + this.b;
    },

    mul(){
        return this.a * this.b;
    }, 
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
//This code will be run in console
*/
