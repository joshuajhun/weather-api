const express         = require('express')
const app             = express()
const bodyParser      = require('body-parser');
const http            = require('http').Server(app);
const cors            = require('express-cors');
const port            = process.env.PORT || 8080
const router          = express.Router();
require('locus')

app.locals.title      = 'weather-api'
app.use('/api', router)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
router.use(cors());
app.use(cors());

const weather         = require('./weather-stubs')

router.get('/weather', function(request, response){
  response.json(weather)
});

router.get('/weather/:location', function(request, response){
  const location = request.params.location
  const city = weather.filter(function(place){
    return place.location === location
  })
  if(!city){return response.status(404).send({ error: `city not found` })}
  return response.sendStatus(404)
});

app.listen(port)
console.log('suh dude ' + port)

module.exports = app
