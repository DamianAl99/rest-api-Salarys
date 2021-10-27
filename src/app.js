const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const routes = require('./routes/salary.routes');

const app = express();

app.set('port', process.env.PORT || 5000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/api/salarys', routes);

module.exports = app;
