const API_KEY = "20605362e67ac1aaebcc9b669dcf3e5d";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerHTML = date.name;
        weather.innerHTML = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {

}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
