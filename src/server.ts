import express from 'express';
import { execArgv } from 'process';

const PORT = 3333;

const app = express();
app.use(express.json());

app.get('/route/:id/:user', (req, res) => {
  console.log(req.params);
  res.json(req.params);
});

app.get('/query', (req, res) => {
  console.log(req.query);
  res.json(req.query);
});

app.post('/products', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
