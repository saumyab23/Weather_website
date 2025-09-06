const apikey = "063bc2538eaff123e484079e1401694e";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");

const weathericon=document.querySelector(".weather-icon");
const error=document.querySelector(".error");

async function checkweather(city) {
    const response = await fetch(`${apiurl}${city}&appid=${apikey}`);
    if(response.status==404)
{
    error.style.display="block";
    document.querySelector(".weather").style.display="none";
}


else
{
    const data = await response.json();

    console.log(data);
   

document.querySelector(".city").innerHTML=data.name;

document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";

document.querySelector(".humidity").innerHTML=data.main.humidity + "%";


document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

if(data.weather[0].main=="Clouds")
{
weathericon.src="images/clouds.png";
}

else if(data.weather[0].main=="Clear")
{
weathericon.src="images/clear.png";
}

else if(data.weather[0].main=="Rain")
{
weathericon.src="images/rain.png";
}

else if(data.weather[0].main=="Drizzle")
{
weathericon.src="images/drizzle.png";
}

else if(data.weather[0].main=="Mist")
{
weathericon.src="images/mist.png";
}

else{
    weathericon.src="images/snow.png";
}

document.querySelector(".weather").style.display="block";
 error.style.display="none";

}
}
searchbtn.addEventListener("click",()=>
{
checkweather(searchbox.value);
});



