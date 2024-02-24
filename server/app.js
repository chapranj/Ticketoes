const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blogRoutes.js')

const app = express();
const corsOptions = {
    origin: 'http://localhost:8080'
}

app.use(cors(corsOptions))

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

app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/aboutme',
    (req, res) => {
        res.redirect('/about');
    }
)

app.get('/create/new', (req, res) => {
    res.render('create', { title: 'Create a new Blog' });
})

app.use(blogRoutes);

app.use(
    (req, res) => {
        res.render('404', { title: '404' });
    });

