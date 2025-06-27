const apikey = "8f36514c2f479b71bc3035723cd2b5d0";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button")
const wicons = document.querySelector(".icons");
// const city = searchbtn.value;
async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}` )
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".info").innerHTML = data.weather[0].main;

    if(data.weather[0].main == "Clear"){
        wicons.src = "images/sunny.png";
    }
    else if(data.weather[0].main == "Clouds"){
        wicons.src = "images/cloudy.png";
    }
    else if(data.weather[0].main == "Haze"){
        wicons.src = "images/haze.png";
    }
    else if(data.weather[0].main == "Snow"){
        wicons.src = "images/snow.png";
    }
    else if(data.weather[0].main == "Smoke"){
        wicons.src = "images/smoke.png";
    }
    else if(data.weather[0].main == "Rain"){
        wicons.src = "images/rain.jpg";
    }
    else if(data.weather[0].main == "Drizzel"){
        wicons.src = "images/drizzel.png";
    }
    else if(data.weather[0].main == "Mist"){
        wicons.src = "images/fog.png";
    }


}

searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
})

