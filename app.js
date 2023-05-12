const express = require('express');
const app = express();
const port = process.env.port || 8080;


app.get('/', (req, res) => res.send('Goodbye Hack Cloud!'));

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});


