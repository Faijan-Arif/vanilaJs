/**
 Defination => the map() method creates a new array with the result of calling fuction for every arrray element.
 => map() doesnot cahange the original array,
 => map() execute callback once for each array element in order 
 */
//Q => takr an array [22,232,24,4353,223,23232,66,34,33,67] addd the value 10 in each element
    /*
const myNumbers = [22,232,24,4353,223,23232,66,34,33,67];
const newNums = myNumbers.map( (num) => {
    return num+10; //scope open return statement should be write
// when use call back fn and open scope it always should ne end with return
})
console.log(newNums);
    */

//Q => take an array and increase by 10 after 
//  => multiply by 5 && check whether graeter than 100

const mydata = [4,2,6,24,4353,223,23232,66,34,33,67];
const newdata = mydata
.map( (data) => { return data*10})
    // console.log(newdata);
.map( (data) => {return data+5})
    // console.log(newdata);
.filter( (data) => {return data >= 100});
    console.log(newdata);