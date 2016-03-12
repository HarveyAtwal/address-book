var connect = require('connect');
var serveStatic = require('serve-static');
var config = require('./config');

var app = connect();

app.use(serveStatic(__dirname + '/public'));
app.use('/bower_components', serveStatic(__dirname + '/bower_components'));

app.listen(config.port);
