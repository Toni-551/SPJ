import dajSlucajanBroj from './slucajniBroj.js';

import * as mqtt from 'mqtt';
var client = mqtt.connect('mqtt://127.0.0.1');
client.on('connect', function() {
console.log('Publisher is online!');
setInterval(function() {
var temp = 23;
client.publish('temp', 'Trenutni slučajni broj je: ' + dajSlucajanBroj(10,1000));
console.log('Message sent!');
}, 5000);
});