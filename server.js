const express = require('express');
const routes = require('./routes');
const connection = require('./config/connection')
// TODO: import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// TODO: sync sequelize models to the database, then turn on the server
connection.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
