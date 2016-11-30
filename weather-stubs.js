const moment = require('moment')
require('locus')
const _ = require('lodash')
var weather = [
{
  location: "denver",
  date: generateDate(19),
},
{
  location:'denver',

  date: generateDate(21)
},
{
  location: "denver",

  date:generateDate(22)
},

{
  location: 'denver',

  date:generateDate(23)
},

{
  location:'denver',

  date: generateDate(24)
},
{
  location: "denver",

  date:generateDate(25)
},

{
  location: 'denver',

  date: generateDate(26)
},

{
  location:'denver',

  date: generateDate(27)
},
{
  location: "san-diego",

  date: generateDate(19)
},

{
  location: 'san-diego',

  date: generateDate(20)
},

{
  location:'san-diego',

  date: generateDate(21)
},
{
  location: "san-diego",

  date:generateDate(22)
},

{
  location: 'san-diego',

  date:generateDate(23)
},

{
  location:'san-diego',

  date: generateDate(24)
},
{
  location: "san-diego",

  date: generateDate(25)
},

{
  location: 'san-diego',

  date: generateDate(26)
},

{
  location:'san-diego',

  date: generateDate(27)
},
{
  location: "san-fransico",

  date: generateDate(19)
},

{
  location: 'san-fransico',

  date: generateDate(20)
},

{
  location:'san-fransico',

  date: generateDate(21)
},
{
  location: "san-fransico",

  date: generateDate(22)
},

{
  location: 'san-fransico',

  date: generateDate(23)
},

{
  location:'san-fransico',

  date: generateDate(24)
},
{
  location: "san-fransico",

  date: generateDate(25)
},

{
  location: 'san-fransico',
  date: generateDate(26)
},

{
  location:'san-fransico',
  date: generateDate(27)
},
{
  location: "castle-rock",
  date: generateDate(19)
},

{
  location: 'castle-rock',
  date: generateDate(20)
},

{
  location:'castle-rock',
  date: generateDate(21)
},
{
  location: "castle-rock",
  date: generateDate(22)
},

{
  location: 'castle-rock',
  date:generateDate(23)
},

{
  location:'castle-rock',
  date: generateDate(24)
},
{
  location: "castle-rock",
  date: generateDate(25)
},

{
  location: 'castle-rock',
  date: generateDate(26)
},

{
  location:'castle-rock',
  date: generateDate(27)
}]

function formatObjects(){
  weather = weather.map(function(weather){
    weather['weatherType']        = {type: generateType(weather)}
    weather.weatherType['scale']  = generateScale(weather.weatherType.type)
    weather.weatherType['chance'] = generateChance()
    var high                      = generateTemp(weather.weatherType.type)
    weather['temp']               = {high: high, low: high - 20}
    weather['hourly']             = {timeBreakDown: generateHourly.call(weather)}
    return weather
  })
  return weather
}

function generateDate(date){
  return moment(`2016-09-${date}`).format("MM-DD-YYYY")
}

function generateType(weather){
  var weatherType = determainLocation(weather.location)
  return _.shuffle(weatherType).pop()
}

function determainLocation(location){
  var weatherLocations  =[
    { location:'san-diego', weather: ['cloudy', 'rain','sunny'] },
    { location:'denver', weather: ['thunder storms', 'cloudy', 'rain', 'snow', 'sunny', 'windy'] },
    { location:'castle-rock', weather: ['thunder storms', 'cloudy', 'rain', 'snow', 'sunny', 'windy'] },
    { location:'san-fransico', weather: ['cloudy', 'rain','sunny', 'windy', 'foggy'] }
  ]
  var locationWeather = weatherLocations.filter(function(weatherObject){
    return weatherObject.location === location
  })
  return locationWeather[0].weather
}

function generateTemp(weatherType){
  var weatherTypes = [
    {type: 'snow', temp: generateRandomTemp(20,30) },
    {type: 'rain', temp: generateRandomTemp(60,70) },
    {type: 'cloudy', temp: generateRandomTemp(60,70) },
    {type: 'foggy', temp: generateRandomTemp(60,70) },
    {type: 'windy', temp: generateRandomTemp(60,70) },
    {type: 'sunny', temp: generateRandomTemp(60,100) },
    {type: 'snow', temp: generateRandomTemp(70,80) },
    {type: 'thunder storms', temp: generateRandomTemp(60,70) }
  ]
  generatedWeather = weatherTypes.filter(function(weather){
    return weather.type === weatherType
  })
  return generatedWeather[0].temp
}


function generateRandomTemp (min, max){
  var min = Math.ceil(min);
  var max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateScale(currentType){
  if(currentType === 'cloudy'){
    var min = Math.ceil(1)
    var max = Math.ceil(3)
  } else {
  var min = Math.ceil(1)
  var max = Math.ceil(4)
  }
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateChance(){
  var number = Math.random()
  return Math.round(number * 100) / 100
}

function generateHourly(){
  var arrayOfHourlyObjects = []
  var high = this.temp.high
  var low  = this.temp.low
  for (var i = 1; i <= 24; i++) {
    var object = {}
    if (i <= 13){
      low ++
      object['hour' + i]  = { temp: low, type: this.weatherType.type }
      arrayOfHourlyObjects.push(object)
    } else {
      high --
      object['hour' +  i] = { temp: high, type: this.weatherType.type }
      arrayOfHourlyObjects.push(object)
    }
  }
  return arrayOfHourlyObjects
}

formatObjects()
module.exports = weather
