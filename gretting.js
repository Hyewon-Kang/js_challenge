const form = document.querySelector(".js-form"),
 input = form.querySelector("input"),
 greeting = document.querySelector(".js-greetings");


const USER_LS = "currentUser",
 SHOWIMG_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault(); 
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}


function askForName(){
    form.classList.add(SHOWIMG_CN);
    form.addEventListener("submit",handleSubmit);
}


function paintGreeting(text){
    form.classList.remove(SHOWIMG_CN);
    greeting.classList.add(SHOWIMG_CN);
    greeting.innerText = `Hey ${text}, what do you do today?`;
}


function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();