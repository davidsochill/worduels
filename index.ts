import apiRoute from './api/index';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

// Spin up express server
const app = express();
const port = process.env.PORT;

// Allow CORS
app.use(cors());

// Middleware to handle JSON parsing
app.use(express.json());

// Allow extended JSON objects (probably not applicable to this project anyway)
app.use(express.urlencoded({
	extended: true
}));

// Route connections to api file to handle
app.use('/', apiRoute);

// Listen on configured port and console log an applicable message
app.listen(port, () => console.log(`Worduels Server listening on http://localhost:${port}`));