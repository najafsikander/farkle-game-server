import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { config } from 'dotenv';
import './lib/config.js';
import { connectToDatabase } from './lib/dbConnection.js';
import { info, error } from './lib/logger.js';
import errorHandler from './middleware/error.js';
import router from './router/index.js';
import apiLimiter from './middleware/rateLimiter.js';
import validateContentType from './middleware/requestValidator.js';

config();

const app = express();
const port = process.env.PORT || 3000;

// Apply middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(apiLimiter)
app.use(validateContentType);


// Use router
app.use('/', router);

// Error handling middleware should be last
app.use(errorHandler);

try {
    app.listen(port, () => {
        info(`Server is running at http://localhost:${port}`);
        connectToDatabase();
    });
} catch (err:any) {
    error('Error starting server:', err);
    process.exit(1);
}