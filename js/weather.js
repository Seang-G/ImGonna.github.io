const API_KEY = "be26c5bde454ea62c792b8206b5552e5";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector('#weather img');
        const city = document.querySelector('#weather span:first-child');
        const temp = document.querySelector('#weather span:last-child');
        weather.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        console.log(data)
        city.innerText = data.name;
        temp.innerText = `${data.main.temp} ℃`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);