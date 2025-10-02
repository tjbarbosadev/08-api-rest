import { Router } from 'express';
import { myMiddleware } from '../middlewares/myMiddleware';

const productRouts = Router();

productRouts.get('/:id', (req, res) => {
  console.log(req.params, req.query);
  const { id } = req.params;
  const { name, age } = req.query;
  res.json({ id, name, age });
});

productRouts.get('/', (req, res) => {
  console.log(req.query);
  res.json(req.query);
});

productRouts.post('/', myMiddleware, (req, res) => {
  const { name, price } = req.body;
  res.json({ name, price, user_id: req.user_id });
});

export { productRouts };
