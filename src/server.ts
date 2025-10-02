import express from 'express';
import { routes } from './routes';

const PORT = 3333;

const app = express();

// middleware to req.body JSON format
app.use(express.json());

// project routes
app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
