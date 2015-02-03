import express from 'express';
import routes from './routes';

// setup express and config
let app = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// routes
app.get('/', routes.index);
app.get('/math/:num', routes.math);
app.get('/slow', routes.slow);
app.get('/crash', routes.crash);

// go go go
app.listen(app.get('port'), function() {
	console.log(`Node app is running at localhost: ${app.get('port')}`);
});