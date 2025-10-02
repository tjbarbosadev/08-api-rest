import { Router } from 'express';
import { productRouts } from './product-routes';

const routes = Router();

routes.use('/products', productRouts);

export { routes };
