import React from 'react';
import './style.css';
import { useState } from 'react';

export default function App() {
  const api_key = '2ccc192564fd4e1d3f13d7612f18541b';
  const [btn, setbtn] = useState('')
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setcity] = useState('');

  const getWeather = (event) => {
    if (event.key == 'Enter') {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${api_key}`
      ).then((res) => res.json()).then(data => {
        setWeatherData(data)
      });
    }
  };


  return( 
  <div>
    
    <input
    placeholder='Enter City'
    onChange={e => setcity(e.target.value)}
    value={city}
    onKeyPress={getWeather}
    />


    {typeof weatherData.main === 'undefined' ? (
      <div>
        <p>Welcome to weather app! Enter in a city to get weather of</p>
      </div>    
    ):(
      <div>
        <p>Cidade / Pais - {weatherData.name}</p>
        <p>Humidade - {weatherData.main.humidity}</p>
        <p>Temperatura - {Math.round(weatherData.main.temp)}F</p>
        <p>Tempo - {weatherData.weather[0].main}</p>
        <p>Longitude {weatherData.coord.lon}
        <span> Latitude {weatherData.coord.lat}</span></p>
      </div>
    )}

    {weatherData.cod === '404' ? (
       <p>City Not Found</p>    
    ): (
      <></>
    )}
  </div>
  )




}
