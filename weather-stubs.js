const moment = require('moment')
require('locus')
const _ = require('lodash')
var weather = [
{
  location: "denver",
  date: generateDate(19),
},

// {
//   location: 'denver',
//   temp: generateTemp(),
//   weatherType: {
//     type: generateType(),
//     scale: 1,// 1-3 based off of that they will render a specific image ,
//     chance: .30 //generate a decimil
//   },
//   date: generateDate(20),
//   hourly: {
//         // this should be a nested part of the api response. It should cause students to utilize multiple or
//         // same function
//   },
// },

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
    var high = generateTemp(weather.weatherType.type)
    weather['temp']               = {high: high, low: high - 20}
    weather['hourly']            = {timeBreakDown: generateHourly.call(weather)}
    return weather
  })
return weather
}

function generateDate(date){
  return moment(`2016-09-${date}`).format("MM-DD-YYYY")
}

function generateType(weather){
  if(weather.location === 'denver' || 'castle-rock'){
    var weatherType =  ['thunder storms', 'cloudy', 'rain', 'snow', 'sunny', 'windy']
  }

  if (weather.location === 'san-diego'){
    var weatherType =  ['cloudy', 'rain','sunny']
  }

  if (weather.location === 'san-fransico'){
    var weatherType =  ['cloudy', 'rain','sunny', 'windy', 'foggy']
  }
  return _.shuffle(weatherType).pop()
}

function generateTemp(weatherType){

  if(weatherType === 'snow'){
    var min = Math.ceil(20);
    var max = Math.floor(32);
  }

  if (weatherType === 'rain'){
    var min = Math.ceil(60)
    var max = Math.ceil(70)
  }

  if (weatherType === 'thunder storms'){
    var min = Math.ceil(60)
    var max = Math.ceil(70)
  }

  if (weatherType === 'cloudy'){
    var min = Math.ceil(60)
    var max = Math.ceil(70)
  }

  if (weatherType === 'foggy'){
    var min = Math.ceil(60)
    var max = Math.ceil(70)
  }

  if (weatherType === 'sunny'){
    var min = Math.ceil(60)
    var max = Math.ceil(100)
  }

  if (weatherType === 'windy'){
    var min = Math.ceil(70)
    var max = Math.ceil(80)
  }

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
    }else{
      high --
      object['hour' +  i] = { temp: high, type: this.weatherType.type }
      arrayOfHourlyObjects.push(object)
    }
  }
  return arrayOfHourlyObjects
}

formatObjects()
module.exports = weather
