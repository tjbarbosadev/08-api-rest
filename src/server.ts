import express from 'express';
import { myMiddleware } from './middlewares/myMiddleware';

const PORT = 3333;

const app = express();
app.use(express.json());
// app.use(myMiddleware);

app.get('/route/:id/:user', (req, res) => {
  console.log(req.params);
  res.json(req.params);
});

app.get('/query', (req, res) => {
  console.log(req.query);
  res.json(req.query);
});

app.post('/products', myMiddleware, (req, res) => {
  const { name, price } = req.body;
  res.json({ name, price, user_id: req.user_id });
});

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
