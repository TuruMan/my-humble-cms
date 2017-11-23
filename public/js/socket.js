console.log('socket.jsiioooioi');
const socket = io.connect(['http://192.168.100.244:3000']);

const button = document.getElementById('klik');
const elementPocetKliknuti = document.getElementById('kliknuti');
const elementPocetUzivatelu = document.getElementById('pocetUzivatelu');

button.addEventListener('click', function() {
  console.log('Click');
  socket.emit('btn');
});

socket.on('btnServer', function(pocetKliknuti, socketClients){
  console.log('Menim HTML');
  elementPocetKliknuti.innerHTML = pocetKliknuti;
  console.log(socketClients);
});

socket.on('updatePocetUzivatelu', function(pocetUzivatelu){
  console.log('uzivatel pripojen ' + pocetUzivatelu);
  elementPocetUzivatelu.innerHTML = pocetUzivatelu;
});
