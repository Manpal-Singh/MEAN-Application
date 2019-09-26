//importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');


//connect to mongodb
mongoose.connect('mongodb://localhost:27017/contactlist', { useNewUrlParser: true })

//on connection
mongoose.connection.on('Connected', ()=>{
    console.log('Connected to database mongodb at 27017');
})

//error on connection
mongoose.connection.on('Error', (err)=>{
    if(err){
    console.log('Error in connection to  database mongodb at 27017' + err);
    }
})

//port no
const port = 3000;

//adding middleware - cors
app.use(cors());

//body-parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api', route);

//testing server
app.get('/', (req, res)=>{
    res.send("foober");
})

app.listen(port, ()=>{
    console.log("Sever started at port:" + port);
});