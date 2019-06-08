import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import helmet from 'helmet';
import morgan from 'morgan';

import routes from './src/routes';

const app = express();

// adding helmet to enhance API's security
app.use(helmet());
// enabling CORS for all requests
app.use(cors());
// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// adding morgan to log HTTP requests
app.use(morgan('combined'));

app.use(routes);

mongoose.Promise = global.Promise;

mongoose.connect(process.env.URL_DB, {
    useNewUrlParser: true
})
    .then(() => {
        console.log('Successfully connected to the database');
    })
    .catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    })

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});