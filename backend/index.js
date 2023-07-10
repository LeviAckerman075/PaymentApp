require('dotenv').config();
const express = require("express");
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

const counselRoutes = require('./routes/counselRoutes');
app.use('/counsel', counselRoutes);

app.listen(process.env.PORT);