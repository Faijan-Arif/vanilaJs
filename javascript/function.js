// ++++++++++++++++Passing fewer argument+++++++++++++++++++
/*
function test(a, b, c) {
    console.log( a + b * c);
}
test(2,3,); //Expeted o/p NaN
test(2,3,4); //Expeted o/p 14
*/

// +++++++++++++++++function hoisting++++++++++++++++++
/*
function demo() {
        // x = 10
    console.log(x);
    var x ;
    x = 10;

}

demo();


function multiply(a, b) {
  return a*b;
};

console.log(multiply);
*/


//+++++++write a code to check whether a number is fibonacci or not++++++++
/*
function IsFibonacci(num){
  let fib1 = 0;
  let fib2 = 1;
  let fib3 = fib1+fib2   //0+1
  // console.log(IsFibonacci);

  while (fib3 <= num) 
  {
    if (num === fib3) 
    {
      return true;
      
    }
    fib1 = fib2;
    fib2 = fib3;
    fib3 = fib1+fib2
    
  }
  return false;
}
console.log((IsFibonacci(8)));
console.log((IsFibonacci(30)));
console.log((IsFibonacci(50)));
console.log((IsFibonacci(100)));
console.log((IsFibonacci(23)));
console.log((IsFibonacci(35)));
console.log((IsFibonacci(45)));
IsFibonacci(10)
IsFibonacci(25)
IsFibonacci(45)
IsFibonacci(100)
*/


// +++++++++++++++++++function inside fuction++++++++++++++
/*
function a() {
  console.log("Inside a");

  function b() {
      console.log("Inside b");
  }
}

b();
*/

// ++++++++++++++++++Function Call Inside Function++++++++++
/*
var combinedString = "";
function a() {
    combinedString = "Inside a";

    function b() {
        combinedString = combinedString + " Inside b";
    }

    b();
}

a();
console.log(combinedString);
*/



// ++++++++++++     Find the output function in function +++++++++++

/*
function sqSum(a, b) {

    function square(x) {
        return x*x;
    }

    return square(a) + square(b);

}
console.log(sqSum(4,5));  //Outputs 41 (4^2 + 5^2 = 16 + 25 = 41)
*/

/*  EXPELENATION :--
In this example, a is 4 and b is 5. The square function is called with a and b, and their squares are calculated (16 and 25, respectively). Finally, the sum of the squares, which is 41, is returned by the sqSum function.
 */

// +++++What will the function 'test' return upon execution of these statements?+++
/*
function test(a, b) {
    console.log( a + b );
}

test(2);

 */
//output = NaN

/*  Explenation :---

if argument having two value and you are passing only one value in test case ,
then in javaScript the 2nd number considered as undefined 
so undefined + any argument = NaN 
(2 + undefined) or(undefined +  2) output will be NaN

*/

// +++++++ Function Hoisting++++++++++++++
/*
var a = 1;
function b() {
    a = 10;
    return;
    function a() { }
}

b();
console.log(a);
*/       
//Output => 1 
/*Explantion => var a = 1  is a global scope so there is no effect on var a = 1
 so that's output would be 1
 var b is no longer needed because its a local variable and return nothing
 */

 // ++++++++++++  Hoisted function +++++++++++++++++++
/*
hoisted(); 
var hoisted = function() {
    console.log('bar');
};

*/   // output => Type error : Hoisted is not a function



//+++++++++++++++ find the outpt  ++++++++++++++++++++++++++
/* function a(){
    function b() {
        return 3;
    }

    return b();

    function b() {
        return 8;
   }
} 

console.log(a());
*/  // output => 8

/*                  -: Explanation  :-
 Both the b() functions are function declarations and will therefore be hoisted to the top of a() local scope.
However, the b() returning 8 will be hoisted after the one returning 3.
Therefore, the one returning 8 will be executed
*/

// +++++++++++++++++++++ Rest parameter +++++++++++++++++++++++++++++
/*
function fun(...input){
    var sum = 0;
    for(var i = 0; i < input.length; i++){
        sum += input[i];
    }
    return sum;
}
console.log(fun(1,2,3,4,5)); 
*/  //output => 15

// ++++++++++++++++Default parmeter+++++++++++++++++++++++++++++++
/*
function f(a,b = 1) {
    console.log(a*b)
  }
  var x = // some hidden  value
  f(5,x)
  */      //output => 5

//           Explanation:-
// If we pass undefined to a default parameter, it will take the value of default parameter instead of undefined.

setTimeout(
function add(a,b,c,d) {
    // console.log(a+b+c+d)
     console.log (a+b+c+d)
    // console.log(sum);
    
}, 1000)

  