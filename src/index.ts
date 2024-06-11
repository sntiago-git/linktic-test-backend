import express from 'express';
//import userRoutes from './routes/userRoutes';
//import { logger } from './middlewares/logger';
import connectDB from './config/db';
import dotenv from 'dotenv';

// Cargar variables de entorno desde el archivo .env
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Conectar a la base de datos
connectDB();

//app.use(logger);
app.use(express.json());
//app.use('/api', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});