const http = require('http');
const { Worker } = require('worker_threads');

const server = http.createServer((req, res) => {
  const worker = new Worker('./longTask.js');

  worker.on('message', (result) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hello World! Task completed in ${result}ms`);
  });

  worker.on('error', (error) => {
    console.error(error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// longTask.js
const { parentPort } = require('worker_threads');

const start = Date.now();
// Simulate long running task
let i = 0;
while (i<100000000){i++}
const end = Date.now();
parentPort.postMessage(end - start);