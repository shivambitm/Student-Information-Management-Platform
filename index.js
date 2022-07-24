require('./models/db')

const express = require('express');
const router = express.Router();
const path = require('path');
const handlebars = require('handlebars');
const {engine} = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const bodyparser = require('body-parser');

const studentController = require('./controllers/studentController');

var app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())

app.get('/', (req, res) => {
    res.send(`
    <h2>Welcome to Student Management System</h2>
    <h3>Click here to get access to the <b> <a href ="/student/list">Database</a></b></h3>`);
});

app.set('views', path.join(__dirname, '/views'));

app.engine(
    "handlebars",
    engine({
        handlebars: allowInsecurePrototypeAccess(handlebars),
        extname: 'handlebars',
        defaultLayout: 'MainLayout',
        layoutsDir: __dirname + '/views/layouts'
    })
);

app.set('view engine', 'handlebars');

app.listen(3000, () => {
    console.log('Server is running on port 3000');  // eslint-disable-line no-console
});

app.use("/student", studentController);
module.exports = router;