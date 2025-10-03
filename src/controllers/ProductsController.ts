import { Request, Response } from 'express';
import { AppError } from '../utils/AppError';
import { z } from 'zod';

export class ProductsController {
  /**
   * Umm controller deve ter no máximo esses 5 métodos
   * index - GET para listar vários registros
   * show - GET para exibir um registro específico
   * create - POST para criar um registro
   * update - PUT para atualizar um registro
   * remove - DELETE para deleter um registro
   */

  index(req: Request, res: Response) {
    console.log(req.query);
    res.json(req.query);
  }

  create(req: Request, res: Response) {
    const bodySchema = z.object({
      name: z.string(),
      price: z.number(),
    });

    const { name, price } = bodySchema.parse(req.body);

    res.status(201).json({ name, price, user_id: req.user_id });
  }
}
