const clockContainer = document.querySelector(".js-clock"),
 clockTitle = clockContainer.querySelector("h1"),
 clockDate = clockContainer.querySelector("h2");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
    "October", "November", "December"];
const weeks = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours
        }:${minutes < 10 ? `0${minutes}` : minutes
        }:${seconds < 10 ? `0${seconds}` : seconds}`;

    const month = date.getMonth();
    const day = date.getDate();
    const week = date.getDay();
    clockDate.innerText = `${months[month]} ${day}, ${weeks[week]}`;

}

function init(){
    getTime();
    setInterval(getTime,1000);
}

init();