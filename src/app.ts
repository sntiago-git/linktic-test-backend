import express from 'express';
import productRoutes from './routes/productRoutes';
import orderRoutes from './routes/orderRoutes';
import connectDB from './config/db';
import { setupSwagger } from './utils/swagger';

const app = express();

// Conectar a la base de datos
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Linktic Test API');
});

// Rutas
app.use('/api', productRoutes);
app.use('/api', orderRoutes);

// Configuración de Swagger
setupSwagger(app);

export default app;