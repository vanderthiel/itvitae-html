// Get dependencies
const express = require('express');
var cors = require('cors');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const rp = require('request-promise-native');

const app = express();
app.use(cors());

let mem = [];

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));




app.get('/', (req, res) => {
	res.status(200).send("This is the default endpoint, it is not the endpoint you're looking for");
});

app.get('/content', (req, res) => {
	res.status(200).send(mem);
});

app.post('/content', (req, res) => {
	mem.push(req.body.value);
	res.status(201).send(req.body);
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));