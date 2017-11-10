const express = require('express');
const app = express();
const server = app.listen(3000, '0.0.0.0', function() {
    console.log('Listening to port:  ' + 3000);
});
//const io = socket(server);
//const socket = require('socket.io');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Static files
app.use(express.static('public'));
const urlencodedParser = bodyParser.urlencoded({ extended: false });

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CMS', {useMongoClient: true});
mongoose.connection.once('open', function(){
  console.log('Connected to database!');
}).on('error', function(error){
  console.log('Could not connect to databse:', error);
});

app.set('view engine', 'pug');

app.get(['/', '/index'], (req, res) => {
  res.render('index', {
    title: 'muj nadpis',
  });
});

app.post('/', urlencodedParser, (req, res) => {
  pocetShlednuti = 0;
  res.render('index');
});

let User = require('./models/user');
app.get('/users/register', (req, res) => {
  res.render('register');
});






// io.sockets.on('connection', function(socket) {
//
//     console.log('made socket connection', socket.id);
//     socketClients.push(socket.id);
//     pocetUzivatelu = socketClients.length;
//     console.log('pocetUzivatelu: '+ pocetUzivatelu);
//     io.sockets.emit('updatePocetUzivatelu', pocetUzivatelu);
//
//
//     // Handle chat event
//     socket.on('btn', function(){
//       console.log('SERVER BTN');
//       ++pocetKliknuti;
//       io.sockets.emit('btnServer', pocetKliknuti, socketClients);
//     });
//
//     socket.on('disconnect', function(){
//       console.log("Disconnected Socket = " + socket.id);
//       var i = socketClients.indexOf(socket);
//       socketClients.splice(i, 1);
//       pocetUzivatelu = socketClients.length;
//       io.sockets.emit('updatePocetUzivatelu', pocetUzivatelu);
//     });
//
// });
