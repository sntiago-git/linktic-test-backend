import express from 'express';
import productRoutes from './routes/productRoutes';
import orderRoutes from './routes/orderRoutes';
import connectDB from './config/db';

const app = express();

// Conectar a la base de datos
connectDB();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Rutas
app.use('/api', productRoutes);
app.use('/api', orderRoutes);

export default app;