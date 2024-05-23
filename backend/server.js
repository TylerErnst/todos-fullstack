import express from 'express'
import 'dotenv/config'

import mongoConfig from './config.js';
import todoRoutes from './routes/todoRoutes.js'


const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/api/todos', todoRoutes);

app.get('/', (req,res) => {
    res.json('Hello (From server)');
});


app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
    mongoConfig()
});