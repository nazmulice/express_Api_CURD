const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users.route')
const app = express();
require("./config/db");

//middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users',usersRouter);

//home route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})


app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

//server error
app.use((err, req, res) => {
    res.status(500).json({message: "Something wrong"})
})

module.exports = app;