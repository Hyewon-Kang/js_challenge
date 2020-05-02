const jsWeather = document.querySelector(".js-weather");

const API_KEY = "747a46fca8b9eab88c31c57f5b2539cc";
const COORDS = "coords";

const button = document.createElement("button");
button.innerText = "↺";
button.id = "change";
button.addEventListener("click", changeCountry);

function changeCountry(){
    const city = prompt("Please enter a city name");
    if(city !== null){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        ).then(function(response){
            if(response.status !== 200){
                alert("Please enter the city name correctly");
                changeCountry();
            }
            return response.json();
        }).then(function(json){
            const temperature = json.main.temp;
            const place = json.name;
            jsWeather.innerText = `${JSON.parse(temperature).toFixed(1)}℃\n ${place}`;
            jsWeather.appendChild(button);  
        })
    }
}

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        jsWeather.innerText = `${JSON.parse(temperature).toFixed(1)}℃\n ${place}`;
        jsWeather.appendChild(button);
        
    });

}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("Cant access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();