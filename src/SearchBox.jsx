import { useState } from 'react';
import TextField from '@mui/material/TextField';
import "./SearchBox.css"
import Button from '@mui/material/Button';


export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "http://api.openweathermap.org/geo/1.0/direct";
    const LAT_API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "2f4094bd0dab20a96572012cc0eb491d";
    const COUNTRY = "IN";

    async function getWeather(city) {
        try {
            let res = await fetch(`${ API_URL }?q=${ city }&country=${ COUNTRY }&limit=1&appid=${ API_KEY }`);
            let data = await res.json();
            // console.log(data);
            let lat = data[0].lat;
            let long = data[0].lon;
            // console.log(lat, long);
            let resFinal = await fetch(`${ LAT_API_URL }?lat=${ lat }&lon=${ long }&appid=${ API_KEY }&units=metric`)
            let dataFinal = await resFinal.json()
            // console.log(dataFinal);
            let weatherData = {
                city: city,
                feelsLike: dataFinal.main.feels_like,
                temp: dataFinal.main.temp,
                tempMin: dataFinal.main.temp_min,
                tempMax: dataFinal.main.temp_max,
                humidity: dataFinal.main.humidity,
                description: dataFinal.weather[0].description,
                windSpeed: dataFinal.wind.speed,
            };
            console.log(weatherData);
            return weatherData;
        } catch (err) {
            throw err;
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value)
    };

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            setCity("");
            let result = await getWeather(city);
            setError(false);
            updateInfo(result);
        } catch (err) {
            setError(true);
        }

    };

    return (
        <div className='SearchBox'>

            <h1>My Weather App</h1>


            <form className='form' onSubmit={handleSubmit}>
                <TextField
                    required id="city"
                    label="City Name (India Only)"
                    variant="outlined"
                    value={city}
                    onChange={handleChange} />
                <br></br>
                <Button variant="contained" type='submit'>
                    Search
                </Button>
            </form>
            {error && <p style={{ color: "red" }}>No such place on API</p>}

        </div>
    )
}