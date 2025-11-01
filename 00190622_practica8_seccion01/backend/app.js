import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/userRoutes.js';

const app = express();
const PORT = 3000;


app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use('/users', router);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});