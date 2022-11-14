import React from 'react';
import './Weather.css';
class WeatherCity extends React.Component {
  cityes = [
    {
      src: require('../../source/img/dnipro.jpg'),
      name: "Dnipro",
      api:"https://api.open-meteo.com/v1/forecast?latitude=48.450001&longitude=34.983334&current_weather=true",
      weather:{temperature:0, windspeed:0,weathercode:0},
      h4:1
    },
    {
      src: require('../../source/img/kiev.jpg'),
      name: "Kiev",
      api:"https://api.open-meteo.com/v1/forecast?latitude=50.450001&longitude=30.523333&current_weather=true",
      weather:{temperature:0, windspeed:0,weathercode:0},
      h4:2
    },
  ];

  async InitWeather(){
    var data;
    for(var i=0;i<this.cityes.length;i++){
      await fetch(this.cityes[i].api,{
        method:"GET",
      })
      .then(res=>res.json())
      .then(res=>data=res.current_weather)
      this.cityes[i].weather.temperature = data.temperature;
      this.cityes[i].weather.weathercode = data.weathercode;
      this.cityes[i].weather.windspeed = data.windspeed;
    }
    for(var i=0;i<this.cityes.length;i++){
      var city_divs = document.getElementById(this.cityes[i].name);
      var h4 = document.getElementById(this.cityes[i].h4);
      h4.innerText = "Temperature: " + this.cityes[i].weather.temperature + "\nWind speed: "+ this.cityes[i].weather.windspeed + "\nWeather: " + this.getWeatherType(this.cityes[i].weather.weathercode);
      city_divs.appendChild(h4);
    }
   

  }

  getWeatherType(code){

    const codes = {
      0: "Clear sky",
      1: "Partly cloudy",
      2: "Partly cloudy",
      3: "Partly cloudy",
      45: "Fog",
      48: "Fog",
      51: "Drizzle",
      53: "Drizzle",
      55: "Drizzle",
      56: "Freezing Drizzle",
      57: "Freezing Drizzle",
      61: "Rain",
      63: "Rain",
      65: "Rain",
      66: "Freezing Rain: light intensity",
      67: "Freezing Rain: heavy intensity",
      71: "Snow fall: slight intensity",
      73: "Snow fall: moderate intensity",
      75: "Snow fall: heavy  intensity",
      77: "Snow grains",
      80: "Rain showers",
      81: "Rain showers",
      82: "Rain showers",
      85: "Snow showers: light",
      86: "Snow showers: heavy",
      95: "Thunderstorm",
      96: "Thunderstorm: slight hail",
      99: "Thunderstorm: heavy hail",
    };
    return codes[code];
  }

  render() {
    this.InitWeather();
    console.log(this.cityes[0]);
    return(
      <div className="weathers">
         <ul>
        {
          this.cityes.map(city => (
            <div id={city.name}>
              <li key={city.name}>
                <img alt='nope' id={city.name} src={city.src}></img>
                  <h4>{city.name}</h4>
                  <h4 id={city.h4}></h4>
            </li>
            </div>
          ))
        }
      </ul>
      </div>
    )
  }
}
export default WeatherCity;