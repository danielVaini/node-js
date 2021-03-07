const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello worlld')
})


app.listen(3333,() => {
  console.log('Conected')
})