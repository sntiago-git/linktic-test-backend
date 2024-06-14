import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes';
import orderRoutes from './routes/orderRoutes';
import connectDB from './config/db';
import { setupSwagger } from './utils/swagger';

// Express
const app = express();
app.use(express.json());

// Cargar variables de entorno
dotenv.config();

// Conectar a la base de datos
connectDB();

// Configuración de CORS
// app.use(cors({
//     origin: process.env.FRONTEND_URL || 'http://localhost:5173',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization']
// }));

app.use(cors());

app.get('/', (req, res) => {
    res.send('Linktic Test API');
});

// Rutas
app.use('/api', productRoutes);
app.use('/api', orderRoutes);

// Configuración de Swagger
setupSwagger(app);

export default app;