import { Router } from 'express';
import { myMiddleware } from '../middlewares/myMiddleware';
import { ProductsController } from '../controllers/ProductsController';

const productRouts = Router();
const productsController = new ProductsController();

productRouts.get('/', productsController.index);
productRouts.post('/', myMiddleware, productsController.create);

export { productRouts };
