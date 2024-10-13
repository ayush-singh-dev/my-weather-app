import React, { useEffect, useState } from "react";
import "./WeatherCart.css";
import { WiDaySunny, WiSnow, WiThunderstorm } from "weather-icons-react";
import { WiHumidity } from "weather-icons-react";
import { WiStrongWind } from "weather-icons-react";
import { WiSunset } from "weather-icons-react";
import { WiRain } from "weather-icons-react";
import { WiDayCloudy } from "weather-icons-react";
import { WiDayHaze } from "weather-icons-react";
import { WiDust } from "weather-icons-react";



const WeatherCart = ({ tempInfo, Search, setSearch, getWeather }) => {

  const[WeatherState,setWeatherState] = useState("");
  
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
     
  } = tempInfo;

  const ChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const ClickHandler = () => {
    console.log("clicked")
    getWeather();
    setSearch("")
    
  };

  let sec = sunset;
  let date = new Date(sec *1000);
  let timeStr =`${date.getHours()}:${date.getMinutes()}`
  

  useEffect(()=>{
    if(weathermood){
      switch(weathermood){
        case "Clouds":
          setWeatherState(< WiDayCloudy size={125} color='white' />);
          break;
          case "Haze":
          setWeatherState(< WiDayHaze size={125} color='white' />);
          break;
          case "Clear":
          setWeatherState(<  WiDaySunny size={125} color='white' />);
          break;
          case "Mist":
          setWeatherState(< WiDust size={125} color='white' />);
          break;
          case "Dust":
          setWeatherState(< WiDust size={125} color='white' />);
          break;
          case "Snow":
          setWeatherState(< WiSnow size={125} color='white' />);
          break;
          case "Rain":
          setWeatherState(< WiRain size={125} color='white' />);
          break;
          case "Thunder":
          setWeatherState(< WiThunderstorm size={125} color='white' />);
          break;

          
          default:
            setWeatherState("WiDaySunny");
      }
    }
  },[weathermood])


 let d = new Date().toLocaleString();
  
  return (
    <>
      {/* box 1 */}
        <div className="Main-box">
          <div className="Box-1">
            <div className="Location">
              <p className="name">{name}</p>
              <p className="country">{country}</p>
            </div>
            <div className="Box1-container">
              <div>
                {/* <p>time</p> */}
                <p className="Date">{d}</p>
              </div>
              <div className="temp-icon">
                <p className="temperature">{temp}&deg;</p>
              </div>
            </div>
          </div>



          {/* box 2 */}


          <div className="Box-2">

            {/* search tab */}
            <div className="Search-Box">
                <input className="Search"
                type="search"
                placeholder  ="search here..."
                value={Search}
                onChange={ChangeHandler}
                autoFocus
                id="search"
                 />
                <button className="button" onClick={ClickHandler}><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>

            <div className=" image">
              <span className="weatherState">{WeatherState}</span>
            <p className="weather-mood">{weathermood}</p>
            </div>

            <div className="Details">

              <div className="style">
              <WiSunset size={24} color='white' />
              <p className="peragraph">sunset : {timeStr} PM</p>
              </div>
              <hr className="hr" />

              <div className="style">
              < WiStrongWind size={24} color='white' />
              <p className="peragraph">speed : {speed} km/h</p>
              </div>
              <hr className="hr" />

              <div className="style">
              <WiHumidity size={24} color='white' />
              <p className="peragraph">Humidity : {humidity} %</p>
              </div>
              <hr className="hr"  />

              <div className="style">
              <WiRain size={24} color='white' />
              <p className="peragraph">Pressure : {pressure}</p>
              </div>
              <hr className="hr" />
            </div>
          </div>
        </div>
      
    </>
  );
};

export default WeatherCart;
