const net = require('net');
const fs = require('fs');

const server = net.createServer();

// server.js
// add this line after server is created, before listen is called
server.on('connection', (client) => {
  console.log('New client connected!');
  client.write('Hello there!');

  client.setEncoding('utf8'); // interpret data as text
  client.on('data', (data) => {
    console.log('Client sends request for: ', data);
    let trimData = data.split("");
    trimData = trimData.slice(0, trimData.length-1);
    trimData = trimData.join("");
    fs.readFile(trimData, 'utf8' , (err, serverFile) => {
      if (err) {
        console.error(err)
        return
      }
      client.write(serverFile);
    })

  });


});

server.listen(3331, () => {
  console.log('Server listening on port 3331!');
});
