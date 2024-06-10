import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'


const Weather = () => {
  const search =async()=>{
    try {
      const url=`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${import.meta.env.VITE_API_KEY}`;
    } catch (error) {
      
    }
  }


  return (
    <div className='weather'>
        <div className='search-bar'>
            <input type='text' placeholder='Search'/>
            <img src={search_icon} alt=''/>

        </div>
        <img src={clear_icon} className='weatherIcon'/>
        <p className='temperature'>16°c</p>
        <p className='location'>London</p>
        <div className='weatherData'>
          <div className='col'>
            <img src={humidity_icon}></img>
          <div>
          <p>91 %</p>
          <span>Humidity</span>
        </div>
        </div>
        <div className='col'>
            <img src={wind_icon}></img>
          <div>
          <p>3.6 Km/h</p>
          <span>Wind Speed</span>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Weather