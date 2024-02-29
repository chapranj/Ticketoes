const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();



const blogRoutes = require('./routes/blogRoutes.js');
const userRoutes = require('./routes/user.js');

const app = express();
const corsOptions = {
    origin: 'http://localhost:8080'
}

app.use(cors(corsOptions))
app.use(bodyParser.json());

const dbURI = 'mongodb+srv://test1212:test1212@cluster0.tzrxohd.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(dbURI)
    .then(
        (result) => {
            console.log('connected to db')
            app.listen(3000)
        }
    )
    .catch(
        (err) => console.log(err)
    );
app.set('view engine', 'ejs');

app.use(express.static('styles'));

app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use(blogRoutes);
app.use('/user',userRoutes);

app.use(
    (req, res) => {
        res.render('404', { title: '404' });
    });

