import express from 'express'

const app = express();
const PORT = 8080;

app.get('/', (req,res) => {
    res.json('Hello (From server)');
})

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT)
})