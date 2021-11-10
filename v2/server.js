const express = require('express');
const fs = require('fs');
const cors = require('cors');
// const { exec, fork, spawn } = require("child_process");
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const https = require('https');


// Constants
const PORT = 8090;
const HOST = '0.0.0.0';
// App
const app = express();

// Enable All CORS Requests
app.use(cors());

app.get('/', (req, res) => {
  const id =  getId();
  let msg = `MSG ID: ${id}<br/>`;
  msg += `<a href="${id}/cucumber_report.html" target="_blank">Report</a><br/>`
  //const cmd = 'npm run test2';
  const cmd = `protractor /usr/src/app/protractor.conf.js -- --params.id=${id}`;
  exec(cmd, (error, stdout, stderr) => {
    if (error) {
        msg += `error: ${error.message}`
        console.log(msg);
        res.send(`test error: ${msg}`);
        return;
    }

    if (stderr) {
        msg += `stderr: ${stderr}`
        console.log(msg);
        res.send(`test stderr: ${msg}`);
        return;
    }

    msg += `stdout: ${stdout}`;
    console.log(msg);
    res.send(`test stdout: ${msg}`);
  });
  
  // res.send(`test server: ${msg}`);
});

app.get('/async', async (req, res) => {
  const id =  getId();
  let msg = `MSG ID: ${id}`;
  try {
    const { error, stdout, stderr } = await exec(msg);
    if (error) {
        msg += `error: ${error.message}`
        console.log(msg);
        res.send(`test error: ${msg}`);
        return;
    }

    if (stderr) {
        msg += `stderr: ${stderr}`
        console.log(msg);
        res.send(`test stderr: ${msg}`);
        return;
    }

    msg += `stdout: ${stdout}`;
    console.log(msg);
    res.send(`test stdout: ${msg}`);
  } catch (e) {
    console.error(e); // should contain code (exit code) and signal (that caused the termination).
  }
});

app.get('/test', (req, res) => {
  let msg = 'test';
  res.send(`2222: ${msg}`);
});

app.get('/env', (req, res) => {
  let env = process.env;
  res.send(env);
});

app.get('/http', (req, res) => {
  const options = {
    hostname: 'example.com',
    port: 443,
    path: '/todos',
    method: 'GET'
  }

  const request = https.request(options, response => {
    console.log(`statusCode: ${res.statusCode}`)

    response.on('data', d => {
      process.stdout.write(d);

      res.send(d);
    })
  });

  request.on('error', error => {
    console.error(error)
  })

  request.end();
});



// Static
// app.use(express.static('public'));
app.use(express.static('public'));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

function getId() {
  let r = (Math.random() + 1).toString(36).substring(7);
  return r;
}