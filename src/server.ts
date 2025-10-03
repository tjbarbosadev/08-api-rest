import express, { NextFunction, Request, Response } from 'express';
import { routes } from './routes';
import { AppError } from './utils/AppError';

const PORT = 3333;

const app = express();

// middleware to req.body JSON format
app.use(express.json());

// project routes
app.use(routes);

// exceptions
app.use((error: any, req: Request, res: Response, _: NextFunction) => {
  if (error instanceof AppError)
    res.status(error.statusCode).json({ message: error.message });

  res.status(500).json({
    message: `${error.message}`,
  });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
