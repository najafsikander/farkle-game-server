import express, {Request, Response} from 'express';
import {config} from 'dotenv';
import "./lib/config.js";
import { connectToDatabase } from './lib/dbConnection.js';
import { info } from './lib/logger.js';
import errorHandler from './middleware/error.js';
import router from './router/v1/index.js';
config();

const app = express();
const port = process.env.PORT || 3000;

app.use('/api/v1', router);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

app.listen(port, () => {
    info(`Server is running at http://localhost:${port}`);
    connectToDatabase();
});