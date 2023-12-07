import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import connectToDB from './db.js';

//Rutas
import productRoutes from './routes/productRoutes.js';

// Llama a la función connectToDB
connectToDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/productos', productRoutes)

const port = 5000;

app.get('/', (req, res) => {
    res.send('Api is running...')
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
