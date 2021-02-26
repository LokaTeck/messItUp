const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.get('/test', (req, res) => {
  res.send('Hello world!');
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})
