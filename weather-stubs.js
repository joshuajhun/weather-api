const moment = require('moment')
const weather = [{
  location: "denver",
  temp: '70',
  type: 'sunny',
  date: moment('2016-09-20').format("MM-DD-YYYY")
},

{
  location: 'denver',
  temp: '80',
  type: 'cloudy',
  date: moment('2016-09-21').format("MM-DD-YYYY")
}]

module.exports = weather
