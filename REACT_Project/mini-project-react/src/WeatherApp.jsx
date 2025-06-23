import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        feelsLike: 24.84,
        weather: "haze"
    });

    let updateInfo =(newInfo) =>{
        setWeatherInfo(newInfo); 
    }
    return (
        <div>
            <h1>Weather App</h1>
            <p>Search for the weather of your city</p>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}