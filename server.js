const express         = require('express')
const app             = express()
const bodyParser      = require('body-parser');
const http            = require('http').Server(app);
const cors            = require('express-cors');
const port            = process.env.PORT || 8080
const router          = express.Router();
const weather         = require('./weather-stubs')

app.locals.title      = 'weather-api'
app.use('/api', router)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.json());

router.get('/weather', function(req, res){
  res.json(weather)
});

app.listen(port)

console.log('suh dude ' + port)
