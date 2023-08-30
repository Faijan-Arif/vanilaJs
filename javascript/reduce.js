
/*const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
    //     console.log(`acc: ${acc} and currval: ${currval}`);
    //     return acc + currval
    // }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    }, 
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);*/

let arr1 = [2,5,3,1,6,4]
let newArr = arr1.reduce( (value1, value2) => {
    return value1+value2
})
console.log(newArr);

/**
 first of all it will take value1 and value2 i.e 2 and 5 and pass it from function 
 here function add both numbers due to adding two value in return 2+5 = 7, after that 
 result of adding two value is 7 then 7 and next value take it 3 7+3 = 10,
 then 10 + 1 = 11, 11+6 = 17, 17+4 = 21
  
 */

