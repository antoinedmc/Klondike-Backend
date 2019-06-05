import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dbConfig from '../config/database.config';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
})
    .then(() => {
        console.log('Successfully connected to the database');
    })
    .catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    })

app.get('/', (req, res) => {
    res.json({
        "message": "Welcome on Klondike, bitch"
    });
})

app.post('/users', (req, res) => {
    return res.send('POST HTTP method on user resource');
});

app.put('/users/:userId', (req, res) => {
    return res.send(`PUT HTTP method on user/${req.params.userId} resource`);
});

app.delete('/users/:userId', (req, res) => {
    return res.send(`DELETE HTTP method on user/${req.params.userId} resource`);
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});