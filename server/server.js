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
let counter = 0;

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
	counter++;
	let newItem = req.body;
	newItem.Id = counter;
	mem.push(newItem);
	res.status(201).send(newItem);
});

app.delete('/content/:id', (req, res) => {
	let id = Number(req.params.id);
	let idx = mem.findIndex(el => el.Id === id);
	if(idx > -1) {
		mem.splice(idx, 1);
	}
	res.status(204).send();
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