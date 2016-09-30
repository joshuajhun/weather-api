const moment = require('moment')
require('locus')
const _ = require('lodash')
const weather = [{
  location: "denver",
  temp: generateTemp(),
  type: generateType(),
  date: generateDate(19)
},

{
  location: 'denver',
  temp: generateTemp(),
  type: generateType(),
  date: generateDate(20)
},

{
  location:'denver',
  temp: generateTemp(),
  type: generateType(),
  date: generateDate(21)
},
{
  location: "denver",
  temp: generateTemp(),
  type: generateType(),
  date:generateDate(22)
},

{
  location: 'denver',
  temp: generateTemp(),
  type: generateType(),
  date:generateDate(23)
},

{
  location:'denver',
  temp: generateTemp(),
  type: generateType(),
  date: generateDate(24)
},
{
  location: "denver",
  temp: generateTemp(),
  type: generateType(),
  date:generateDate(25)
},

{
  location: 'denver',
  temp: generateTemp(),
  type: generateType(),
  date: generateDate(26)
},

{
  location:'denver',
  temp: generateTemp(),
  type: generateType(),
  date: generateDate(27)
},
{
  location: "san-diego",
  temp: generateTemp(),
  type: generateType(),
  date: generateDate(19)
},

{
  location: 'san-diego',
  temp: generateTemp(),
  type: generateType(),
  date: generateDate(20)
},

{
  location:'san-diego',
  temp: generateTemp(),
  type: generateType(),
  date: generateDate(21)
},
{
  location: "san-diego",
  temp: generateTemp(),
  type: generateType(),
  date:generateDate(22)
},

{
  location: 'san-diego',
  temp: generateTemp(),
  type: generateType(),
  date:generateDate(23)
},

{
  location:'san-diego',
  temp: generateTemp(),
  type: generateType(),
  date: generateDate(24)
},
{
  location: "san-diego",
  temp: generateTemp(),
  type: generateType(),
  date: generateDate(25)
},

{
  location: 'san-diego',
  temp: generateTemp(),
  type: generateType(),
  date: generateDate(26)
},

{
  location:'san-diego',
  temp: generateTemp(),
  type: generateType(),
  date: generateDate(27)
},
{
  location: "san-fransico",
  temp: generateTemp(),
  type: generateType(),
  date: generateDate(19)
},

{
  location: 'san-fransico',
  temp: generateTemp(),
  type: generateType(),
  date: generateDate(20)
},

{
  location:'san-fransico',
  temp: generateTemp(),
  type: generateType(),
  date: generateDate(21)
},
{
  location: "san-fransico",
  temp: generateTemp(),
  type: generateType(),
  date: generateDate(22)
},

{
  location: 'san-fransico',
  temp: generateTemp(),
  type: generateType(),
  date: generateDate(23)
},

{
  location:'san-fransico',
  temp: generateTemp(),
  type: generateType(),
  date: generateDate(24)
},
{
  location: "san-fransico",
  temp: generateTemp(),
  type: generateType(),
  date: generateDate(25)
},

{
  location: 'san-fransico',
  temp: generateTemp(),
  type: generateType(),
  date: generateDate(26)
},

{
  location:'san-fransico',
  temp: generateTemp(),
  type: generateType(),
  date: generateDate(27)
},
{
  location: "castle-rock",
  temp: generateTemp(),
  type: generateType(),
  date: generateDate(19)
},

{
  location: 'castle-rock',
  temp: generateTemp(),
  type: generateType(),
  date: generateDate(20)
},

{
  location:'castle-rock',
  temp: generateTemp(),
  type: generateType(),
  date: generateDate(21)
},
{
  location: "castle-rock",
  temp: generateTemp(),
  type: generateType(),
  date: generateDate(22)
},

{
  location: 'castle-rock',
  temp: generateTemp(),
  type: generateType(),
  date:generateDate(23)
},

{
  location:'castle-rock',
  temp: generateTemp(),
  type: generateType(),
  date: generateDate(24)
},
{
  location: "castle-rock",
  temp: generateTemp(),
  type: generateType(),
  date: generateDate(25)
},

{
  location: 'castle-rock',
  temp: generateTemp(),
  type: generateType(),
  date: generateDate(26)
},

{
  location:'castle-rock',
  temp: generateTemp(),
  type: generateType(),
  date: generateDate(27)
}]


function generateDate(date){
  return moment(`2016-09-${date}`).format("MM-DD-YYYY")
}

function generateType(){
  var types = ['thunder storms', 'cloudy', 'rain', 'light showers', 'heavy rain', 'snow', 'flurries']
  return _.shuffle(types).pop()
}

function generateTemp(){
  min = Math.ceil(-14);
  max = Math.floor(110);
  return Math.floor(Math.random() * (max - min)) + min;
}
module.exports = weather
