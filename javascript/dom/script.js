// this is for id target
// let var1 = document.getElementById('one')
//  console.log(var1);
// console.log(var1.innerHTML);
// console.log(var1.innerText);

// ***************************class target*******************8
 let var1 = document.getElementsByClassName('tech')
//  console.log(var1);
    // console.log(var1[2]);
    // console.log(var1[3].innerText);

    // to cahnge inner text with js
    // var1[2].innerText = 'javaScript'


    // *************** getElementByTagName *********************

    let var3 = document.getElementsByTagName('h2');
    let value = document.getElementsByTagName('h1');
    // console.log(var3);
    // console.log(value);
    // console.log(value.innerText);
    // console.log(var3[2].innerText);
    // console.log(value.innerHTML);
    // console.log(var3[2].innerHTML);

    //+++++++change the text color++++++

    // var3[2].innerText = "learning DOM manipulation" //change text
    // var3[2].style.color = "red" //chage text color

    // value[0].style.color = "red" // change color



    // ******************quesrySelector***********************
      let var4 = document.querySelector(".greet")
      let variable = document.querySelector("#greetings")
      // console.log(var4);
      // console.log(variable);
      
    //   var4.className = "classs" // for changing class name

    //   var4.classList = "meet greet hlo" // for multiple class list

    //   var4.setAttribute("title", "jai hind") // for adding attributes


    //+++++++++++++create html element(Append  Child) +++++++++++++++++++++++

    let title = document.createElement("h1");
    title.className = "this is dom";
    title.style.fontSize = "25px";
    title.style.color = "#087008"
    title.textContent = " create this text with the help of Dom only"
    console.log(title);
    document.body.appendChild(title)//this will show the content on web page

    //++++++++++Remove text on page with the help of dom(Remove Child)++++++++++

    // let ul = document.querySelector("ul")
    // console.log(ul);
    // let list = document.querySelectorAll("li");
    // console.log(list);
    // for (const lists of list) {
    //   ul.removeChild(lists)
    // }



    //+++++++++++++ EventListner +++++++++++++++++++++++++++++++++
    document.addEventListener("click", hello);
    function hello(){
      document.getElementById("hidden").innerText = "welcome to the website"

    }


    function hey(){
      document.getElementById("btn").innerText = "Welcome back";
      document.getElementById("btn").style.color = "red";
      document.getElementById('btn').style.backgroundColor = "black";
      document.getElementById('btn').style.padding = "20px";
      document.getElementById('btn').style.border = "4px solid yellow";
  }