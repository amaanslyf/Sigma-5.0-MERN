import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
export default function SearchBox({ updateInfo }) {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "74a784e2c4f876fcfadda3830c0ce5e7";
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            };
            console.log(result);
            return result;
        } catch (error) {
            throw error; // Propagate the error to be handled in the submit function

        }
    }

        let handleChange = (event) => {
            setCity(event.target.value);
        }

        let handleSubmit = async (event) => {
            try {
                event.preventDefault();
                console.log('Form submitted with data:', city);
                setCity(""); // Clear the input field after submission
                let newInfo = await getWeatherInfo(); // Call the function to fetch weather info
                updateInfo(newInfo); // Update the parent component with the fetched info
            }catch (error) {
                setError(true); // Set error state to true if an error occurs
            }
       
    }

        return (
            <div className='SearchBox'>
                <form onSubmit={handleSubmit}>
                    <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required /><br></br><br></br>
                    <Button variant="contained" type="submit" >Search</Button>
                    {error && <p style={{color: "red"}}>Error fetching weather data. Please try again.</p>}
                </form>

            </div>
        )
    }
