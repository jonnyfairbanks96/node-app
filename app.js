const express = require('express');
var exphbs  = require('express-handlebars');
const app = express();
const port = 3000;

// Config
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.static('public'));


// Routes
app.get('/', (req, res) => {
  res.render('home')
})
app.post('/', function (req, res) {
    console.log(req.body.number)
    var number = req.body.number;
    var numberToSend = number * 10;

    res.json({number: numberToSend});
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
