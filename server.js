var express = require('express')
var path = require('path')
var session=require('express-session')
var mqtt = require('mqtt');

var app = express();

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true
}))

var server = app.listen(8000);

var io = require('socket.io')(server);

var client= mqtt.connect('mqtt://54.183.177.114:1883')

client.subscribe('home/humiture')
client.subscribe('home/pir')
client.subscribe('home/light')

client.on('message', function (topic, payload) {
    console.log(topic+'='+payload);
    io.sockets.emit('mqtt',{'topic':String(topic),
                    'payload':String(payload)});
})

io.sockets.on('connection', function (socket) {
    socket.on('lightSwitch',function(data){
        console.log(data)
        console.log(data.payload)
        client.publish(data.topic,data.payload)
    })
});


var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(express.static( __dirname + '/client/public/dist/public' ));

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

// require('./server/config/mongoose.js');
// require('./server/config/routes')(app)
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./client/public/dist/public/index.html"))
});