import express from 'express';

const app = express();
const routes = require("./routes");

app.use(routes);

export default app;