const express = require('express');
const routes = require('./routes');
const db = require("./../src/infrastructure/database/index");
const cors = require('cors')

const app = express();

app.use(cors())

app.use(express.json())

db.hasConnection();
app.use(routes);

app.listen(3333, () => console.log('Servidor no ar na porta 3000'));

export default app
