#!/usr/bin/env node
const express = require('express')
const app = express()
const http = require('http').Server(app)


const io = require('./websocket').connect(http, {path: '/socket.io'})


runServer()

// =======================================================================
//
// The main HTTP Server and socket.io run loop. Serves the HTML files
// and the socket.io access point to change/read the GPIO pins if the server
// is running on an Raspberry Pi
//
// =======================================================================
async function  runServer() {

  http.listen(8080, function () {
    console.log('| System is up and running. Copy the URL below and open this               |');
    console.log('| in your browser: http://localhost:8080/                     ');
    console.log("============================================================================")
  });
}
