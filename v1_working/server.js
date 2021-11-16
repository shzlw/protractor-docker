const express = require('express');
const cors = require('cors');
const { spawn } = require("child_process");
const ws = require('ws');


// Constants
const PORT = 8090;
const HOST = '0.0.0.0';

// In memory cache
const PROCESS_CACHE = [];
const WEBSOCKET_CACHE = [];


// App
const app = express();

// Enable All CORS Requests
app.use(cors());

app.get('/spawn', (req, res) => {
  const { id } = req.query;

  const childProcess = spawn('npm.cmd', ['run', 'run:local', '--', `--params.id=${id}`]);

  PROCESS_CACHE.push({
    id: id,
    process: childProcess,
    logs: []
  });

  childProcessHandler(childProcess, id);

  res.send(id);
});

function childProcessHandler(childProcess, id) {
  const cachedProcess = PROCESS_CACHE.find(p => p.process.pid === childProcess.pid);
  const cachedWs = WEBSOCKET_CACHE.find(p => p.id === id);

  childProcess.stdout.setEncoding('utf8');
  childProcess.stderr.setEncoding('utf8');

  childProcess.stdout.on('data', function (data) {
    console.log('stdout: ' + data.toString());
    const log = {
      createdTime: new Date(),
      type: 'stdout',
      value: data
    };

    cachedProcess.logs.push(log);
    cachedWs.socket.send(JSON.stringify(log));
  });


  childProcess.stderr.on('data', function (data) {
    console.log('stderr: ' + data.toString());
    const log = {
      createdTime: new Date(),
      type: 'stderr',
      value: data
    };
    cachedProcess.logs.push(log);
    cachedWs.socket.send(JSON.stringify(log));
  });

  childProcess.on('exit', function (code) {
    console.log('child process exited with code ' + code.toString());
    const log = {
      createdTime: new Date(),
      type: 'exit',
      value: code
    };
    cachedProcess.logs.push(log);
    cachedWs.socket.send(JSON.stringify(log));
  });
}

app.get('/report', (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const { id } = req.query;
  const cachedProcess = PROCESS_CACHE.find(p => p.id === id);
  if (cachedProcess) {
    res.send(cachedProcess.logs);
  } else {
    res.send("[]");
  }
});

// Websocket
const wsServer = new ws.Server({ noServer: true });
wsServer.on('connection', socket => {

  socket.on('message', message => {
    const msg = Buffer.from(message, 'utf8').toString();
    WEBSOCKET_CACHE.push({
      id: msg,
      socket: socket
    });
  });

  socket.on('close', function () {
    const index = WEBSOCKET_CACHE.findIndex(p => p.socket === socket);
    console.log('close: ', index);
    delete WEBSOCKET_CACHE[index];
  })
});

// Static
app.use('/static', express.static('public'))

const server = app.listen(PORT, HOST);
server.on('upgrade', (request, socket, head) => {
  wsServer.handleUpgrade(request, socket, head, socket => {
    wsServer.emit('connection', socket, request);
  });
});

console.log(`Running on http://${HOST}:${PORT}`);