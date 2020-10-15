const express = require('express');
require('./database/index')
const cors = require('cors')

const app = express();

const publicDirectory = require('path').join(__dirname, '../client/build');
const port = process.env.PORT;

app.use(cors())
app.use(express.static(publicDirectory));
app.use(express.json())

app.get('/data', (req, res) => {
	res.send('Backend is Connected!')
})

app.listen(port, () => {
	console.log(`App is now started on port ${port}`);
});
