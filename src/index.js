function refreshWeather(response){
    let temperatureElement = document.querySelector("#temperature");
     let temperature = response.data.temperatur.currennt;
    let cityElement = document.querySelector("#city");
    
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);

}

function searchCity(city){
let apiKey = "d03tbf689f00a95a61d59c0o4a2ad7d9";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(refreshWeather);
}




function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput=document.querySelector("#search-form-input");

searchCity(searchInput.value);
}






let searchFormElement= document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);