
//Notifications
var Number1,Number2,Operator,result,answer,True=0,False=0;
//Accessing html objects
Number1=document.getElementById("Number1");
Number2=document.getElementById("Number2");
Operator=document.getElementById("Operator");
result=document.getElementById("result");
answer=document.getElementById("answer");
True=document.getElementById("True");
False=document.getElementById("False");
//Create random number function
function randomNumber(min,max) {
   var number = Math.floor(Math.random()*(max-min))+min;
   return number;
}

//New question creation function after game start or question guessing

function newQuestion() {
    var operation=["+","-","*","/"];
    Operator.textContent=operation[randomNumber(0,4)]; // operator seçimi
    Number1.textContent=randomNumber(0,50);
    Number2.textContent=randomNumber(0,50);
    //kalansız bölme işlemi yapacak koşul
    if(Operator.textContent=="/"){
        while(true){
            Number2.textContent=randomNumber(0,50);
            if(Number1.textContent%Number2.textContent==0){
                break;
            }
        }
    }
    
}

//Run function that asks new question (new Question) on page load
window.onload=function(){
    newQuestion();
}

//When pressing the reply button
answer.onclick=function() {
    var ans,n1,n2;
    n1=Number(Number1.textContent);
    n2=Number(Number2.textContent);
    switch(Operator.textContent) {
        case '+':ans=n1+n2;break;
        case '-':ans=n1-n2;break;
        case '*':ans=n1*n2;break;
        case '/':ans=n1/n2;break;
        default:break;
    }
    if (result.value==ans) {
        True.textContent=Number(True.textContent)+1;
    } else {
        False.textContent=Number(False.textContent)+1;
    }
    newQuestion();
}