const API_KEY = config.MY_API_KEY;

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(weatherUrl).then(response => response.json()).then(data=>{
        const temp = document.querySelector("#temp span");
        const city = document.querySelector("#city");
        city.innerText = `@${data.name}`;
        temp.innerText = `${Math.round(data.main.temp)}°C`;
        temp.style.fontSize = "23px";
        changeIcon(data);
    });
}

function changeIcon(data){
    const icon = document.querySelector("#weather i");
    const weather = data.weather[0].main;

    if(weather==="Clouds"){
        icon.classList.add('fas', 'fa-cloud','fa-2x');
    } else if(weather==="Rain"){
        icon.classList.add('fas', 'fa-cloud-showers-heavy','fa-2x');
    } else if(weather==="Clear"){
        icon.classList.add('fas', 'fa-sun','fa-2x');
    } else if(weather==="Snow"){
        icon.classList.add('fas', 'fa-snowflake','fa-2x');
    } else if(weather==="Thunderstorm"){
        icon.classList.add('fas', 'fa-bolt','fa-2x');
    } else if(weather==="Drizzle"){
        icon.classList.add('fas', 'fa-cloud-sun-rain','fa-2x');
    } else if(weather==="Atmosphere"){
        icon.classList.add('fas', 'fa-smog','fa-2x');
    } 
}

function onGeoError(){
    const icon = document.querySelector("#weather i");
    icon.classList.add('fas','fa-compass','fa-2x');
    const temp = document.querySelector("#temp span");
    temp.innerText = `Can't find`;
    temp.style.fontSize = "15px";
}

navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);