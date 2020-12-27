const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 },()=>{
    console.log('server started');
});

wss.on('connection', function connection(ws) {
   ws.on('message', (data) => {
      console.log('data received \n %o', data);
      ws.send(data);
   });
   
   ws.on('error', function close(code, reason) {
      console.log('error ' + code + ':'+reason);
   });

   ws.on('close', function close(code, reason) {
        console.log('close ' + code + ':'+reason);
   });
});

wss.on('listening',()=>{
   console.log('listening on 3000');
});