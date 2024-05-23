import express from 'express'
import 'dotenv/config'

import mongoConfig from './config.js';

const app = express();
const PORT = process.env.PORT;

app.get('/', (req,res) => {
    res.json('Hello (From server)');
})

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
    mongoConfig()
})