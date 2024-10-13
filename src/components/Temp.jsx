import React, { useEffect, useState } from "react";
import WeatherCart from "./WeatherCart";

const Temp = () => {

    const[Search,setSearch] = useState("delhi");
    const[tempInfo,setTempInfo] = useState([])
  useEffect(() => {
    getWeather();
  },[]);

  

  const getWeather = async () => {
    try{
        let res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${Search}&units=metric&appid=5ab2e62ffc381ba6fcfc89cb8b1349e1`
          );
          let data = await res.json();
          const {temp,humidity,pressure} = data.main
          const{main:weathermood}= data.weather[0]
          const{name} = data    
          const{speed} = data.wind   
           const{country,sunset} = data.sys;

           const myNewWeatherInfo ={
            temp,humidity,pressure,weathermood,name,speed,country,sunset, 
           }
           setTempInfo(myNewWeatherInfo);
;        } 
    catch(error){
     console.log(error)
    }
    
  };

  return (
    <div>
      <WeatherCart tempInfo={tempInfo} Search={Search} setSearch={setSearch} getWeather={getWeather} />
    </div>
    
  );
};

export default Temp;
