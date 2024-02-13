const {json} = require('express')
const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8080 },()=>{
    console.log("Server is running on localhost:8080");
    
  });


  wss.on('connection',ws=>{
    console.log('websocket connection established');
    
    ws.send("Connected to server")

    ws.on('message', message => {
        msg = JSON.parse(message);
        console.log(msg);
      });
  })

  