


const weatherform=document.querySelector(".weatherform");
const cityinput =document.querySelector(".city");
const card =document.querySelector(".card");
const api ="72c47dec9a5e87ba79b68995cca90e4c";

weatherform.addEventListener("submit", async event =>{

    event.preventDefault();

    const city =cityinput.value;

    if(city){

        try{
            
            const WeatherData =await getWeatherData(city);
            displayWeatherInfo(WeatherData);

        }
        catch(error){

            console.error(error);
            displayError(error);
        }
    }
    else{
        displayError("PLease enter a city");
    }

});

async function getWeatherData(city){

    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`

    const response =await fetch(apiUrl);

    if(!response){
        throw new Error("Could not fetch data");
    }

    return await response.json();
}

function displayWeatherInfo(data){

    const{name:city,
        main:{temp,humidity}, 
        weather:[{description,id}]} = data;

    card.textContent="";
    card.style.display="flex";

    const cityDisplay =document.createElement("h1");
    const tempDisplay =document.createElement("p");
    const humidityDisplay =document.createElement("p");
    const descDisplay =document.createElement("p");
    const weatherEmoji =document.createElement("p");

    cityDisplay.textContent=city;
    tempDisplay.textContent=`${temp}°F`;
    humidityDisplay.textContent=`Humidity:${humidity}%`;
    descDisplay.textContent=description;
    weatherEmoji.textContent=getWeatherEmoji(id);


    cityDisplay.classList.add("city");
    tempDisplay.classList.add("temp");
    humidityDisplay.classList.add("humidity");
    descDisplay.classList.add("des");
    weatherEmoji.classList.add("emoji");


    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
    

}

function getWeatherEmoji(weatherId){

    switch(true){
        case(weatherId>=200 && weatherId<300):
            return "🌦️";
        case(weatherId>=300 && weatherId<400):
            return "🌦️";
        case(weatherId>=500 && weatherId<600):
            return "⛈️";
        case(weatherId>=600 && weatherId<700):
            return "❄️";
        case(weatherId>=700 && weatherId<800):
            return "🍃";
        case(weatherId===800):
            return "☀️";
        case(weatherId>=801 && weatherId<810):
            return "☁️";
        default:
            return "❓";
    }

}

function displayError(message){

    const error =document.createElement("p");
    error.textContent=message;
    error.classList.add("error");

    card.textContent="";
    card.style.display="flex";
    card.appendChild(error);
}