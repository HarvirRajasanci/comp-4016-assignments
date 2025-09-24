import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// GET /foo -> bar
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
  res.type('text/plain').send('Assignment 1 server is running');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on http://0.0.0.0:${PORT}`);
});


