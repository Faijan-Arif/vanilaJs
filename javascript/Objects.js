/**
 In JavaScript, an object is a standalone entity, with properties and type.
 for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc.
 The same way, JavaScript objects can have properties, which define their characteristics.
 */
/*
 let Person1 = {
    FirstNmame : "Faijan",
    LastName : 'Arif',
    "fullName" : "JackSparrow"
    age : 22,
    city : 'Gurgaon',
    email : "faizanansai558@gmail.com"
 };
//  console.log(Person1);
//  console.log("email");
//  console.log("fullName");

*/

// ++++++++++++++++++++Changer the property of any key value pair+++++++++++++++
/*
 let Person = {
    FirstNmame : "Faijan",
    LastName : 'Arif',
    age : 22,
    city : 'Gurgaon',
    email : "faizanansai558@gmail.com"
 };
 Person.email = "jack@google .com" //Change proprty
//  console.log(Person);
*/

// +++++++++++++++++++Add property in an objects++++++++++++++++++++++++
/*
let Person2 = {
    FirstNmame : "Faijan",
    LastName : 'Arif',
    age : 22,
    city : 'Gurgaon',
    email : "faizanansai558@gmail.com"
 };
 Person2.mobileNo = 324750552059; // For adding
//  console.log(Person2);
*/

// ++++++++++++++++++++++++=Delete property+++++++++++++
/*
let employee = {
    FirstNmame : "Faijan",
    LastName : 'Arif',
    age : 22,
    city : 'Gurgaon',
    email : "faizanansai558@gmail.com"
 };
 delete employee.email;// for Delete 
//  console.log(employee);
*/

//+++++++++++++++        in operator       +++++++++++++++
// Q => check the property whether is it available or not
/*
const car ={
    car : 'Gwagon',
    manufaturer : 'marcedese',
    prize : 30000000,
    Type : 'Off roading'

}
// console.log(car);
// console.log("prize" in car);
// console.log("seater" in car);
// console.log("4*4" in car);
// console.log("Type" in car);
// console.log("color" in car);

// in operator => basically check whether data available or not and show either True or False only 
*/


//++++++++++ ForIn loop/to show all the property  ++++++++++++++++++++++++
        /*
let company = {
    companyName : "Exicom",
    Location : 'Gurgaon',
    dateOfJoining : 'Nov 2020',
    email : 'faizanansari558@gmail.com',

};
for (let key in company){

    console.log(key + ':' + company[key]);
}

// console.log(company);
                */

//++++++++++++++++++How to declear Array in Objects :- ++++++++++++++++++++
        /*
let data = {
    firstName : 'faijan',
    lastName : 'sparrow',
    age : 10,
    home : 'dildarnagar',
    
    hobbies : ['shayri', 'cooking', 'debate'] //array declear in objects
};

    // console.log(data);
    // console.log(data.hobbies);
    // console.log(data.hobbies[2]);
    // console.log(data.hobbies[5]);
                */
    const tinderUser = new Object() //singleton objects
    const twitterUser = {}
    tinderUser.id = '123abc',
    tinderUser.name = "jack Sparrow",
    tinderUser.isLoggedIn = false

    // console.log(tinderUser);
    // console.log(twitterUser);
    //==============> combine object more than one<===================
    const target = {1:'a', 2:'b', 3:'c'}
    const source = {4:'d', 5:'e', 6:'f'}
    const returnTarget = Object.assign({},target, source)
    // console.log(returnTarget);
    // console.log(target);
    // console.log(returnTarget === target);

    const obj1 ={1:'x', 2:'y', 3:'z'}
    const obj2 = {6:'jack', 7:'sparrow', 8:'dildarnagar'}
    const obj3 = {4:'age', 5:'gender'}
    const obj4 = {...obj1, ...obj2, ...obj3}
    // console.log(obj4);
//===================> object inside object  <==========================
        const regularUseer ={
            email : 'mannahihai@hub.com',
            fullName : {
                userFullname : {
                    firstName : 'don',
                    lastName : 'chotaDon'
                }
            }
        }

        // console.log(regularUseer);
        // console.log(regularUseer.fullName);
        // console.log(regularUseer.fullName.userFullname);
        // console.log(regularUseer.fullName.userFullname.firstName);
//==================> array inside object <===================
    const user =[
        {
            id : 1,
            email :  "sa@gmail.com"
        },
        {
            id : 2,
            email : 's@microsoft.com'
        },
        {
            id : 3,
            email : 'joaapkimarzi@chatgpt.com'
        },
    ]
//    user[2].email;
//     console.log(user);
//     console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
 
//++++++++++++Object Destructring +++++++++++++++++++++++
const course ={
    courseName : 'KBC',
    price : 70000000,
    instructor : 'kabhi nahi jitoge'
}
const{instructor : courseInstructor} = course
// console.log(courseInstructor);

//+++++++++++++++++++Function inside object +++++++++++++++++++++
 let myData = {
    name : "faijan",
    "fullname" : "sparrow",
    salary : function () { //function indside object
        return 20;
        
    }
};
// console.log(myData);
//  console.log(myData.salary());

var myObj1 = {};
var myObj2 = new Object();
var myObj3 = {};
// console.log(myObj1 == myObj2, myObj1 == myObj3);
// console.log(myObj1);
// console.log(myObj2);
// console.log(myObj3);

/*Explanation => Primitives like strings and numbers are compared by their value,
while objects like arrays and objects are compared by their reference. 
So, obj3 and obj2 both refer to different instances or different memory locations.
Similarly for obj1 and obj3.
*/
/*if (myObj1 === myObj2 ) {
    console.log(true);
}
 else if(myObj2 == myObj3){
    console.log(true);
 }
 else if( myObj3 == myObj1){
    console.log(true);
 }
 else{
    console.log(false);
 }*/
    
