import * as mqtt from 'mqtt';
var context;
var client = mqtt.connect('mqtt://127.0.0.1');
client.on('connect', function() {
client.subscribe('temp')
});
console.log('Subsciber #1 is online!');
console.log('Receiving message...');
client.on('message', function(topic, message) {
context = message.toString();
console.log(context)
});