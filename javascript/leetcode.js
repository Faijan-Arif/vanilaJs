 /*     1. Reverse the integer value    
      a.  123 => 321
      b.  -123 => -321
 

        const revInt = (num) => {
            let myRevNum = num.toString().split("").reverse().join("");
// .toString() => 123, .split("") => ['1','2','3' ], .reverse() => ['3','2','1']
// .join() => 3,2,1 => .join("") => 321
            // console.log(myRevNum);
//              ++++if num -123 then this code will execute
            if (myRevNum.endsWith("-")) { //.endsWith(condition)
                myRevNum = "-" + myRevNum; 
                // console.log(myRevNum); return => -321-
                return parseInt(myRevNum) ;//parseInt return 321- => 321
            } else {
                return parseInt(myRevNum);
            }
        };
        revInt(123); // work only for line 6 - 10
        console.log(revInt(123));
        console.log(revInt(-123));

        */


