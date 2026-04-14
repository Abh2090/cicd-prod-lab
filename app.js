const express = require('express');

const app = express();

const PORT = 3000;

const MESSAGE = process.env.MESSAGE || "Hello from BLUE 🔵";

app.get('/', (req,res) => {
	res.send(`<h1>${MESSAGE}</h1>`);
});

app.listen(PORT, () => {
	console.log(`Running on port ${PORT}`);
});
