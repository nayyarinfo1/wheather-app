const d = new Date("JANUARY, 25, 2015");
document.getElementById("demo").innerHTML = d;


const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey="b76e2fd57be5ace71a08ee6d00b4854b";

const searchbox=document.querySelector("#search-input");
const searchbtn=document.querySelector("#search-btn");


getweatherdata=async(city)=>{
	let response= await fetch(apiurl + city + `&appid=${apikey}`);
	let data=await response.json();
	console.log(data)

	document.querySelector("#temp").innerHTML=Math.round(data.main.temp) + "°C";
	document.querySelector("#city-name").innerHTML=data.name;
	document.querySelector("#humidity").innerHTML=`Humidity ${data.main.humidity}m/s`;
	document.querySelector("#wind-speed").innerHTML=`Windspeed ${data.wind.speed}g/m³`;
    document.querySelector("#country-name").innerHTML=data.sys.country;
    document.querySelector("#feels-like").innerHTML=Math.floor(data.main.feels_like)+"°C";
    document.querySelector("#temp-max").innerHTML=Math.floor(data.main.temp_max)+"°C";
    document.querySelector("#temp-min").innerHTML=Math.floor(data.main.temp_min)+"°C";
    document.querySelector("#pressure").innerHTML=data.main.pressure+"hpa";
}

searchbtn.addEventListener("click",()=>{
	getweatherdata(searchbox.value)
})
// getweatherdata()

