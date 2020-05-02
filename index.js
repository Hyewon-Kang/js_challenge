const title = document.querySelector("#title");

const CLICKED_CLASS ="clicked";

function handleClick(){
  title.classList.toggle(CLICKED_CLASS);
  
  console.log(title.classList);
}

function init(){
  title.addEventListener("click",handleClick);
}

init();