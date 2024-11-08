
let comp =0;
let user =0;
function userInput(event)
{
   const userElid = event.target.id;
   return userElid;
}


const allDiv = document.querySelectorAll(".box");
allDiv.forEach(function(val)
{
    val.addEventListener('click',function(event)
{
    let UserInputid = userInput(event);
    playGame(UserInputid,computerInput());
})
})

/// computer input

function computerInput()
{

    let arr=["Rock","Paper","scissor"];
    let idx = Math.floor(Math.random() * 3);
    return arr[idx];
    
}
 function playGame(userInput,ComInput){
       console.log(`user input is : ${userInput}`);
       console.log(`computer input is : ${ComInput}`);
       //const result = document.querySelector("result");
      
       //console.log(pp);
       //result
       let res = "";
       function result(res,ComInput)
       {
        var element = document.getElementById("result");
        let el = document.getElementById("comInput");
        // element.classList.add('resultUser');

         if(res === "user")
         {
            //element.classList.add('resultUser');
            element.style.backgroundColor='green';
            element.innerText="you win";
            el.innerText= "Computer input is " +ComInput; 
         }
         else if(res === "comp")
            {
               element.style.backgroundColor="red";
               //element.classList.add('resultComp');
               element.innerText="Computer Win";
               el.innerText= "Computer input is " +ComInput; 
            }
        else if(res==="draw"){
            //element.classList.add('resultDraw');
            element.style.backgroundColor="blue";
               element.innerText="Match Draw";
               el.innerText= "Computer input is " +ComInput; 
        }
       
       }

       //play game
       let dictionary = new Object();
       dictionary["Rock"] = "Paper";
       dictionary["Paper"] = "scissor";
       dictionary["scissor"] = "Rock";
       if(userInput===ComInput)
       {
         console.log("draw");
         res = "draw";
         result(res,ComInput);
         
       }
       
       
       else{
        let key = userInput;
       let value = dictionary[key];
       console.log(value);
         if(value === ComInput)
          {
           console.log();("computer win");
            comp++;
            res = "comp";
            result(res,ComInput);

          }
         if(value != ComInput){
            console.log();("user win");
            user++;
            res = "user";
            result(res,ComInput); 
          }
       }
       


       const userScore= document.querySelector("#UserScore");
       const comScore= document.querySelector("#ComScore");
       userScore.innerText="your Score is: "+user;
       comScore.innerText="Computer Score is: "+comp;

 }

 let darkmode = document.getElementById("Darkmode");

 let pp =darkmode.addEventListener('click', () => {
    let body = document.querySelector("body");
    let upper = document.querySelector(".upper");
    let heading = document.querySelector(".heading");
    let result = document.querySelector(".result");
    let box = document.querySelector(".box");
    let userScore = document.querySelector(".UserScorec");
    let cominput = document.querySelector(".comInput");
    if(body.getAttribute("id")==="body")
        {
            body.setAttribute("id","bodyDark");
            upper.setAttribute("id","upperDark");
            heading.setAttribute("id","headingDark");
            result.setAttribute("id","resultDark");
            box.setAttribute("class","box");
            userScore.setAttribute("id","UserScoreDark");
            cominput.setAttribute("id","comInputDark");
        }

 
        
    else
        {
            body.setAttribute("id","body");
            upper.setAttribute("id","upper");
            heading.setAttribute("id","heading");
            result.setAttribute("id","result");
            cominput.setAttribute("id","comInput");
            userScore.setAttribute("id","UserScore");
        }
    
});
 