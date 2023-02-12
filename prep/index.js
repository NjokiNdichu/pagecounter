let saveEl=document.getElementById("save-el");
let countEl=document.getElementById("count-el")
console.log(countEl)
let count=0;
function increment(){
    count +=1;
    countEl.textContent=count;
    console.log(count);
}
function save(){
    let countStr=count + " - "
    saveEl.textContent += countStr
    countEl.textContent=0
    count=0
}




//let username="pair";
console.log(username);

let message="You have three new notifications";

let messageToUser=message + "," + username + "!";
console.log(messageToUser);



let welcomeEl=document.getElementById("welcome-el");
let name="Rejoice";
let greeting="Welcome Back ";
welcomeEl.innerText= greeting + name;

welcomeEl.innerText += " continue form where you left off";//

