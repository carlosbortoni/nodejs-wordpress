var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var rotas = require('./app/routes/rotas');
var bb = require('express-busboy');

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '50mb'}));

bb.extend(app, {
  upload: true
}); 

app.use('/node/wp-api/', rotas);

app.listen(process.env.PORT || 3000);
