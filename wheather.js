const API_KEY = "99dc4935d99f4224b8c72421261603";

function getWeather(){

let city=document.getElementById("cityInput").value;

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)

.then(res=>res.json())

.then(data=>{

document.getElementById("temperature").innerHTML=data.main.temp+"°C";

document.getElementById("description").innerHTML=data.weather[0].description;

document.getElementById("humidity").innerHTML=data.main.humidity+"%";

document.getElementById("wind").innerHTML=data.wind.speed+" km/h";

document.getElementById("pressure").innerHTML=data.main.pressure;

let icon=data.weather[0].icon;

document.getElementById("weatherIcon").src=
`https://openweathermap.org/img/wn/${icon}@2x.png`;

});
}

navigator.geolocation.getCurrentPosition(position=>{

let lat=position.coords.latitude;
let lon=position.coords.longitude;

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)

.then(res=>res.json())

.then(data=>{

document.getElementById("temperature").innerHTML=data.main.temp+"°C";

document.getElementById("description").innerHTML=data.weather[0].description;

});

});