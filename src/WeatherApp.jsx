import SearchBox from './SearchBox'
import WeatherCard from './WeatherCard'
import "./WeatherApp.css"
import { useState } from 'react'

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Bhilai",
        feelsLike: 25,
        temp: 25,
        tempMin: 22,
        tempMax: 28,
        humidity: 50,
        description: "Overcast Clouds",
        windSpeed: 7,
    });

    function updateInfo(result) {
        setWeatherInfo(result)
    }

    return (
        <div className='AppBox'>
            <SearchBox updateInfo={updateInfo} />
            <WeatherCard data={weatherInfo} />
        </div>
    )
}