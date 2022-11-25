import React, { useState }from 'react';
import axios from 'axios';

function Location() {
    const [data,setData] = useState({})
    const [location, setLocation] = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=0ae74008fe845413f9e59b9472a54a45`;

    const Weather_icons = `http://openweathermap.org/img/wn/${data.weather ? data.weather[0].icon : null}@2x.png`
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url)
      .then((res) => {
        setData(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
      setLocation('')
  } 
}

return (
    <div className="app">
        <div className="search">
            <input value={location} onChange={event => setLocation(event.target.value)} onKeyPress={searchLocation}placeholder="Enter City" type="text"/>
        </div> 
   
     <div className="container">
       <div className="top">
         <div className="location">
           <p>{data.name}</p>
         </div>
         <div className="temp">
         {data.name ? <p>{data.main.temp}°C</p> : null}
         <img src={Weather_icons} alt="weather_icon"></img>
         </div>
         <div className="description">
         {data.weather ? <p>{data.weather[0].main}</p> : null}
         {data.name !== undefined &&
       <div>
         <div className="feels">
           {data.main ? <p className='bold'>{data.main.feels_like}°C</p> : null}
           <p>Sensation</p>
         </div>
         <div className="humidity">
         {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
           <p>Humidity</p>
         </div>
         <div className="wind">
         {data.wind ? <p className='bold'>{data.wind.speed} M/S</p> : null}
           <p>Wind</p>
         </div>
       </div>
       }

         </div>
       </div>

      
     </div>

   </div>
 );





}

export default Location;