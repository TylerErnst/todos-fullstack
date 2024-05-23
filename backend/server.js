import express from 'express'
import 'dotenv/config'

import mongoConfig from './config.js';
import Todo from './models/TodoModel.js';

const app = express();
const PORT = process.env.PORT;

app.get('/', (req,res) => {
    res.json('Hello (From server)');
})

app.get('/api/todos', async (req,res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        console.log(error.message);
        res.status(400).json(error);
    }
})

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
    mongoConfig()
})