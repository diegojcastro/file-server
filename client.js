const net = require("net");
const fs = require('fs')

const content = 'Some content!'




const conn = net.createConnection({ 
  host: 'localhost', // change to IP address of computer or ngrok host if tunneling
  port: 3331 // or change to the ngrok port if tunneling
});

conn.setEncoding('utf8'); // interpret data as text


// client.js
conn.on('data', (data) => {
  console.log('Server sending data: ');
  console.log(data);
  // or do something else with these data
});

conn.on('connect', () => {
  //conn.write('Hello from client!');
  process.stdin.on('data', (input) => {
    conn.write(input)
  })
});