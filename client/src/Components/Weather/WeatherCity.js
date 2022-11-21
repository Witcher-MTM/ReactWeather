import React from 'react';
import './Weather.css';
const cityes = [
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
  {
    src: require('../../source/img/Kharkiv.jpg'),
    name: "Kharkiv",
    api:"https://api.open-meteo.com/v1/forecast?latitude=49.988358&longitude=36.232845&current_weather=true",
    weather:{temperature:0, windspeed:0,weathercode:0},
    h4:3
  },
  {
    src: require('../../source/img/Kherson.jpg'),
    name: "Kherson",
    api:"https://api.open-meteo.com/v1/forecast?latitude=46.65581&longitude=32.6178&current_weather=true",
    weather:{temperature:0, windspeed:0,weathercode:0},
    h4:4
  },
  {
    src: require('../../source/img/Lviv.jpg'),
    name: "Lviv",
    api:"https://api.open-meteo.com/v1/forecast?latitude=49.842957&longitude=24.031111&current_weather=true",
    weather:{temperature:0, windspeed:0,weathercode:0},
    h4:5
  },
  {
    src: require('../../source/img/Odessa.jpg'),
    name: "Odessa",
    api:"https://api.open-meteo.com/v1/forecast?latitude=46.482952&longitude=30.712481&current_weather=true",
    weather:{temperature:0, windspeed:0,weathercode:0},
    h4:6
  },
  {
    src: require('../../source/img/Poltava.jpg'),
    name: "Poltava",
    api:"https://api.open-meteo.com/v1/forecast?latitude=49.589542&longitude=34.551273&current_weather=true",
    weather:{temperature:0, windspeed:0,weathercode:0},
    h4:7
  },
  {
    src: require('../../source/img/Vinnytsia.jpg'),
    name: "Vinnytsia",
    api:"https://api.open-meteo.com/v1/forecast?latitude=49.233083&longitude=28.468217&current_weather=true",
    weather:{temperature:0, windspeed:0,weathercode:0},
    h4:8
  },
  {
    src: require('../../source/img/Zhitomir.jpg'),
    name: "Zhitomir",
    api:"https://api.open-meteo.com/v1/forecast?latitude=50.25465&longitude=28.658667000000037&current_weather=true",
    weather:{temperature:0, windspeed:0,weathercode:0},
    h4:9
  },
  {
    src: require('../../source/img/Chernihiv.jpg'),
    name: "Chernihiv",
    api:"https://api.open-meteo.com/v1/forecast?latitude=51.498200&longitude=31.289350&current_weather=true",
    weather:{temperature:0, windspeed:0,weathercode:0},
    h4:10
  },
  {
    src: require('../../source/img/Rivne.jpg'),
    name: "Rivne",
    api:"https://api.open-meteo.com/v1/forecast?latitude=50.619900&longitude=26.251617&current_weather=true",
    weather:{temperature:0, windspeed:0,weathercode:0},
    h4:11
  },
  {
    src: require('../../source/img/Ivano-Frankivsk.jpg'),
    name: "Ivano-Frankivsk",
    api:"https://api.open-meteo.com/v1/forecast?latitude=48.925395&longitude=24.72346&current_weather=true",
    weather:{temperature:0, windspeed:0,weathercode:0},
    h4:12
  },
  {
    src: require('../../source/img/Zaporizhia.jpg'),
    name: "Zaporizhia",
    api:"https://api.open-meteo.com/v1/forecast?latitude=47.838800&longitude=35.139567&current_weather=true",
    weather:{temperature:0, windspeed:0,weathercode:0},
    h4:13
  },
  {
    src: require('../../source/img/Mariupol.jpg'),
    name: "Mariupol",
    api:"https://api.open-meteo.com/v1/forecast?latitude=47.097133&longitude=37.543367&current_weather=true",
    weather:{temperature:0, windspeed:0,weathercode:0},
    h4:14
  },
  {
    src: require('../../source/img/Lutsk.jpg'),
    name: "Lutsk",
    api:"https://api.open-meteo.com/v1/forecast?latitude=50.747233&longitude=25.325383&current_weather=true",
    weather:{temperature:0, windspeed:0,weathercode:0},
    h4:15
  },
];
class WeatherCity extends React.Component {

  async InitWeather(){
    var data;
    for(var i=0;i<cityes.length;i++){
      await fetch(cityes[i].api,{
        method:"GET",
      })
      .then(res=>res.json())
      .then(res=>data=res.current_weather)
      cityes[i].weather.temperature = data.temperature;
      cityes[i].weather.weathercode = data.weathercode;
      cityes[i].weather.windspeed = data.windspeed;
    }
    for(var i=0;i<cityes.length;i++){
      var city_divs = document.getElementById(cityes[i].name);
      var h4 = document.getElementById(cityes[i].h4);
      h4.innerText = "Temperature: " + cityes[i].weather.temperature + "\nWind speed: "+ cityes[i].weather.windspeed + "\nWeather: " + this.getWeatherType(cityes[i].weather.weathercode);
      city_divs.appendChild(h4);
    }
   

  }

  Tmp(){
    var city_name_input = document.getElementById('searchinput');
    if(city_name_input.value!=""){
      cityes.forEach(element => {
        if(!element.name.toLocaleLowerCase().includes(city_name_input.value)){
          var divForHide = document.getElementById(element.name);
          divForHide.style.display = "none";
        }
        else{
          var divForHide = document.getElementById(element.name);
          divForHide.style.display = "flex";
          console.log(element.name + " flex");
        }
      });
    }else{
      var ShowDivs = document.getElementsByClassName('city');
      for(var i = 0 ;i<ShowDivs.length;i++){
        ShowDivs[i].style.display = "flex";
      }
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
      71: "Snow fall",
      73: "Snow fall",
      75: "Snow fall",
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
    return(
      <div className="main">
        <div id='searhDiv'>
        <input onKeyUp={this.Tmp} id='searchinput' type={'text'} placeholder='Enter city name'></input>
        </div>
        <div className='weathers'>
        {
          cityes.map(city => (
            <div className='city' id={city.name}>
                <img alt='nope' id={city.name} src={city.src}></img>
                  <h4>{city.name}</h4>
                  <h4 id={city.h4}></h4>
            </div>
          ))
        }
        </div>
        
      </div>
    )
  }
}
export default WeatherCity;