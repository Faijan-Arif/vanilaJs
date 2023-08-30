/**
 For In is used to itrate over the enumerable properties of an objects.
 it allows you to access the key of objects , rather than value,
 it allow to access the Array of the index
        for - in=> inex, objects of keys
 */

    const myLuckyNumber = [21,23,54,3,364,53243,];
    for (const number in myLuckyNumber) {
        // console.log(`Index of my lucky number is ${number}`);
        //its gave idex number of Array instead of itrate
    }

            /*
    const myLuckyitem = [21,23,54,3,"Faijan", 364,53243,];
    for (const luckynum in myLuckyitem) {
        // console.log(`my lucky item inexes is  => ${luckynum}`);
    }
    for (const luckynum of myLuckyitem) {
        // console.log(`lucky number is => ${luckynum}`);
    }
            */

        /*
    const obj = {a:1, b:2, c:5};
    for(let kayValues in obj){
        // console.log(` key values of an objects ${kayValues}`);
    }
            */

    // const arr = [1231,425,545,25234];
    // for (const value in arr) {
    //     // console.log(`index of this value is ${value}`);   
         
    //     }




    // const myObject = {
    //     js : "javaScript",
    //     cpp : "c++",
    //     rb : "Ruby",
    //     py : "python"
    // }

    // for (const key in myObject) {
    // //    console.log(key);
    // console.log(`${key} shorycut is for ${myObject[key]}`);
    // }

   /* let list = [4, 5, 6];
for (let i in list) {
   console.log(i); 
}

for (let i of list) {
   console.log(i); 
}*/

/*Expelanation => Both for..of and for..in statements iterate over the list. The values iterated on are different though, for..in returns a list of keys on the object being iterated, whereas for..of returns a list of values of the numeric properties of the object being iterated.
*/