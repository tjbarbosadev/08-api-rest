import { Router } from 'express';
import { productRouts } from './productRoutes';

const routes = Router();

routes.use('/products', productRouts);

export { routes };
