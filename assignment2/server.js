import express from 'express';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// GET /configValue -> returns value from ConfigMap
app.get('/configValue', (req, res) => {
  try {
    const configValue = fs.readFileSync('/etc/config/configValue', 'utf8').trim();
    res.type('text/plain').send(configValue);
  } catch (error) {
    res.status(500).type('text/plain').send('Error reading config value');
  }
});

// GET /secretValue -> returns value from Secret
app.get('/secretValue', (req, res) => {
  try {
    const secretValue = fs.readFileSync('/etc/secret/secretValue', 'utf8').trim();
    res.type('text/plain').send(secretValue);
  } catch (error) {
    res.status(500).type('text/plain').send('Error reading secret value');
  }
});

// GET /envValue -> returns value from environment variable
app.get('/envValue', (req, res) => {
  const envValue = process.env.envValue || 'environmentSnake';
  res.type('text/plain').send(envValue);
});

// GET /foo -> bar (keeping original endpoint)
app.get('/foo', (req, res) => {
  res.type('text/plain').send('bar\n');
});

// POST /hello with JSON body { "name": "Prabh" } -> Hello Prabh!
app.post('/hello', (req, res) => {
  const name = (req.body && typeof req.body.name === 'string' && req.body.name.trim()) || 'World';
  res.type('text/plain').send(`Hello ${name}!\n`);
});

// GET /kill -> terminate container
app.get('/kill', (req, res) => {
  res.type('text/plain').send('Shutting down...\n');
  // Give the response time to flush before exit
  setTimeout(() => process.exit(0), 50);
});

// Optional root endpoint for sanity check
app.get('/', (req, res) => {
  res.type('text/plain').send('Assignment 2 server is running');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on http://0.0.0.0:${PORT}`);
});


