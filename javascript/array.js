    // +++++++++++++ what is the outptput +++++++++++++++
    /*
    var words = ['one', 'two', 'three', 'four'];
    words.forEach(function(word) {
        console.log(word);
        if (word === 'two') {
            words.shift();
        }
    });
    */ //output => one two four

    //+++++++++++ Find output+++++++++++++++++++++++
/*
    var sum=0;
var arr = [10,15,20,30];  
arr.forEach(function myFunction(element)
{  
    	sum= sum+element;  
});  
        console.log(sum);
        */

        //+++++++++++++++ Find output +++++++++++++++++++++
        /**
          var values=["one","two","Three"];  

            var ans=values.shift();  

            console.log(ans);
            */

    //++++++++++++ Find output +++++++++++++++++++++++
    /**
     var sum = 0
var arr = [1, 2, 3, 4, 5];
arr.forEach(function(element) {
    sum = sum + element
    
});
console.log(sum);

     */

    // +++++++++++Traversing/itrating/access an array +++++++++++
        /*
    let newArr = [12,4,455,56,6,8,75,523,77,4745,];
    for(i=0 ; i<newArr.length ; i++) {
            console.log('my new array', newArr);
    }
        //accesing the index of aaray
    console.log(newArr[0]);
        */


    //+++++++++++++++++++++++Insert element in an array++++++++++++++++++++
    /*
        let element = [13,34,45,3,535,2];
        let newElement = 3000;
        let index = 3;
        console.log(element)
        let i;
        
        for (let i = element.length-1; i>0; i--) {
            if (i >= index) 
            {
            element[i+1] = element[i];
            if (i == index) {
                element[i] = newElement
            }    
            }
            
        }
        console.log("My new array is " , element);
        
        */
    //++++++++++++++++

                     //  -:2nd approch/direct approch:-
                     /*
        let element = [12,15,"faijan", 1999, "10th oct", 23,]
        element.splice(3, 0, "arif")
        //  3 => index no, 0=> item to be deleted, "arif"  => insert in array           

        console.log(element);
        */


        //++++++++Delete element from array+++++++++++++++++++++++
        /*
        let data = [13,22,34,4,8768,3,55];
        console.log(data);
        let position = 4;
        for (let i = position; i < data.length-1; i++) {
            data[i] = data[i+1];
        }
        data.length = data.length-1;
        console.log('New array ', data);
            */

// ++++++++++++++++++++++++++Searching the array+++++++++++++++++++++++++++++++++++
            /*
        let dataArr = [2,45,67,67,85,424,87,99,76];
            let searchNum = 87;
            let index = undefined
    for (let i = 0 ;i < dataArr.length-1; i++)
    {     
        // console.log(dataArr);
        if (searchNum === dataArr[i])
        {
                    index = i;
                    break;
        }
    }
    console.log(index);
    console.log(dataArr.indexOf(searchNum)); // Direct method to search
                */

    //++++++++++++++++++++++++  array splice method   ++++++++++++++++++++++
    /*
    var color = ['red', 'orange', 'blue', 'violet'];

    var removed = color.splice(2);

    console.log(color);
    console.log(removed);
    */   //output => ['red', 'orange']  ['blue', 'voilet']



    //  +++++++++++++++++++++++++++  Itrate array   ++++++++++++++++++++++++++++++

    /*
    array = [ 60, 70, 20, 10, 40, 90 ];

    const test = function(x) {
        return x > 5;
    }

    if(!array.every(test)) {
        console.log("statement 1"); 
    }

    else {
        console.log("statement 2"); 
    }
    */  // outpt => statement 2

    /**
     * Explanation : 
     */





    //++++++++++++++++++++++++++ array Question+++++++++++++++++++++++
    /* create an array to solve following
    1- Print all arrya
    2- length of array
    3- sum of array
    4- average of array
    */
    /*
    var nums = [10, 20, 30, 40, 50 ,60, 70, 80, ];
    var i;
    var sum = 0;
    var avg;
    console.log("Lenghth of an array=" +nums.length);
    for (let i = 0; i <nums.length; i++) {
        console.log(nums[i]);
        // const element = nums[i];
        sum = sum + nums[i];
    }


    avg = sum/nums.length;
    console.log("Sum of all Element = " +sum);
    console.log("average of all Element = " +avg);
    */


    // +++++ Left rotation or right rotation/rotaion clockwise or anticlock wise +++++

    /*
    function leftRotaion(arr, n) {
        for (let i = 0; i < n; i++) {
            const element = arr.shift(); //remove 0th index element from array.
            arr.push(element);//add new element in array to the last index

            
        }
    }
    let arr = [1,2,3,4,5,6];
    let n = 1; // No of count to rotation from right/clockwise
    leftRotaion(arr, n);// n => is the no of rotaion , 1 means one time rotate
    console.log(arr);
    */

    //++++++++++++++++++++ Sorting an unsorted array & Duplicates +++++++++++++++++++
    /*
    let arr1 = [1,4,6,3,1,2,-10,4,-18];
    let arr2 = [10,4,-10, 6,12,4];

    // Merg both arr1 + arr2
    let arr3 = [...arr1, ...arr2];

    // arrange the element in asending order:-

    arr3.sort((a,b) => (a - b));// (a-b) will asending order && (b-a) will be desending 


    arr3 =[...new Set(arr3)]  // remove duplicate array

    console.log(arr3);
    */


    //++++++++++++++++++++ Remove the duplicate array +++++++++++++++++++++++++++++++++
    /*
    let arr = [1,2,3,-10,-6,-7,3,2,1,-6,-7];
    let uniqueArr = [...new Set(arr)];

    // Diffrence b/w (Set), & Array => the Array conatin duplicate values, whether Set Don't

    console.log("unique Array", uniqueArr);
    */


    // ////////////////////////Approch => to solve duplicate /////////////////
    /*
    let myArr = [1,2,3,-5,-6,1,2,3,-5,-6,];
    let uniqueArr = [...new Set(myArr)];  // [...new Set(myArr)] spread opratotr with Set Array
    console.log('Unique Arr', uniqueArr);
    =====>>>> Diffrence b/w Set and array,
    Set could't contain ==>  duplicte value 
    but Array => contain duplicate value
    */

    // ++++++++++  Merg two Arrays simply(unsorted output)  ++++++++++++++++
                        /*
    let arr = [3,7,9,12,34,56,90,98];
    let arr2 = [17,23,27,31,35];
    let arr3 = [];

    for (let i = 0; i < arr.length; i++) {
            // console.log(arr[i]);
        arr3[i] = arr[i];        
    }

    for (let i = 0; i < arr2.length; i++) {
                // console.log([arr.length + i] ); // contain indexing of arr2
        arr3[arr.length + i] = arr2[i];

    }

    console.log(arr3);
        // output[3,7,9,12,34,56,90,98,17,23,27,31,35] 
    */ // this method gave output without sorted array;


    // +++++++++++++  Merge two array output should be in sorted form +++++++++++++
            /*
    let data1 = [3,7,9,11,13,15,17,19,33,109];
    let data2 = [44,55,66,77,88];
    let data3 = [];
    let d1 = 0;
    let d2 = 0;
    let d3 = 0;

    while (d1 < data1.length && d2 < data2.length) {
        
        if (data1[d1] < data2[d2]) 
        {
            data3[d3] = data1[d1];
            d1++;
        }
        else{
            data3[d3] = data2[d2];
            d2++;
        }
        d3++;
    }
        while (d1 < data1.length) {
            data3[d3] = data1[d1];
            d1++;
            d3++;
        }
        console.log("sorted Array : ", data3);
            //this will gave a merg & sorted array[3,7,9,11,13,15,17,19,33,44,55,66,77,88,109]
                        */


    // +++++++++++ Find the Second largest in an array +++++++++++++++++++++
    /*
    function secondlargestNum(arr) {
        let FLarNum = (secLarNum = Math.min(...arr)); // for mimimum No , itrate the array
        // and return second largest number => 2


        // below line of code is for comparing two array atleat 
        // eg -> [10] here no second array for comapre
        //  
        if (arr.length < 2) {
            return "at least need two number for compare"
        }

        for (let i = 0; i < arr.length; i++) {
            // this loop check 1:1 compare to smallest number

            if (arr[i] > FLarNum){
                secLarNum = FLarNum;
                FLarNum = arr[i];
            }
            else if (arr[i] > secLarNum && arr[i] !==FLarNum)
            {
                secLarNum = arr[i];
            }
            //  below line of code is check for no second largest number in an array 
            //  eg => [10, 10, 10], here no single array is compareable all are same 
            //  


            if (secLarNum == Math.min(...arr) && secLarNum == FLarNum)
            // no number would be = to minimum No && no number woulde be equal to max No
            {
                return "No second largest number in array";
            }
        }
        return secLarNum;
    }

    console.log(secondlargestNum([10, 5, 2, 13]));
    console.log(secondlargestNum([-10, -2, -13, -40]));
    console.log(secondlargestNum([10, 5, 10]));
    console.log(secondlargestNum([10, 10, 10]));  // No second largest number
    console.log(secondlargestNum([10]));
    */

    // ++++++++++++++++ Largest number in an array +++++++++++++++++++++++
    /*
    const myArray = [7,525,252523,444,5655,78,778,5534,];
    const maxNumber = Math.max(...myArray);
    console.log( "total number of element = " +myArray.length);
    console.log("The largest number is =" +maxNumber);
    console.log("second largest number = " +myArray.length - 1);
    */



    // ++++++++ find biggest element in the array +++++++++++++++++++++++++
    /*
    var nums = [75, 78, 80, 3, 32, 94, 48, 85];
    var biggest = nums[0];
    var i;
    for (let i = 0; i <nums.length; i++) {
        const element = nums[i];
        if (nums[i] > biggest) {
            biggest = nums[i];

        }
        console.log("content of array");
        for (let i = 0; i < nums.length; i++) {
            // const element = array[i];
            console.log(nums[i]);
            
        }
        console.log("Biggst element in the array =" +biggest);
    }
    */  



    //++++++++++++++++++++++++++ array Question+++++++++++++++++++++++
    /* create an array to solve following
    1- Print all arrya
    2- length of array
    3- sum of array
    4- average of array
    */
    /*
    var nums = [10, 20, 30, 40, 50 ,60, 70, 80, ];
    var i;
    var sum = 0;
    var avg;
    console.log("Lenghth of an array=" +nums.length);
    for (let i = 0; i <nums.length; i++) {
        console.log(nums[i]);
        // const element = nums[i];
        sum = sum + nums[i];
    }


    avg = sum/nums.length;
    console.log("Sum of all Element = " +sum);
    console.log("average of all Element = " +avg);
    */



    //  +++++++++++++++++++++++++++  Itrate array   ++++++++++++++++++++++++++++++

    /*array = [ 60, 70, 20, 10, 40, 90 ];

    const test = function(x) {
        return x > 5;
    }

    if(!array.every(test)) {
        console.log("statement 1"); 
    }

    else {
        console.log("statement 2"); 
    }
    */  // outpt => statement 2

    /**
     * Explanation : 
     */

//+++++++++++++++++++++++Reverse the array++++++++++++++++++++++++++++++++++

