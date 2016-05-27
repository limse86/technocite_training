let express = require('express');
let morgan = require('morgan');
let exphbs = require('express-handlebars');
let renderMwr = require(`${__dirname}/middleware/render`);
let error = require(`${__dirname}/middleware/error`);
let sendRoute = require(`${__dirname}/routes/sendRoute`);
let app = express();
let hbs = exphbs.create({
    defaultLayout :'main',
    extname:'.hbs'
});
app.engine('hbs',hbs.engine);
app.set('view engine','hbs');
// app.use(morgan('combined'));
app.use(express.static('public'));
//contact manager
app.use('/send',sendRoute);

//global manager
app.use(renderMwr());
app.use(error());
module.exports = app;