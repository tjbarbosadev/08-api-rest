import { Request, Response } from 'express';

export class ProductsController {
  /**
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
    const { name, price } = req.body;
    res.json({ name, price, user_id: req.user_id });
  }
}
