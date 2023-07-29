const express = require('express');
const config = require('./config');
const gameRoutes = require('./api/components/game/route');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Funcionando');
});

app.use('/game', gameRoutes);

app.listen(config.api.port, () => {
  console.log(`server on: ${config.api.port}`);
});
