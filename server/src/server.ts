import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';
import connectDB from './config/connection.js';
import routes from './routes/index.js';

// Resolve __dirname and __filename for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from the appropriate .env file
const envFile = process.env.NODE_ENV === 'production' ? '../.env.production' : '../.env.development';
dotenv.config({ path: path.resolve(__dirname, envFile) });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the client's dist folder
app.use(express.static(path.resolve(__dirname, '../../client/dist')));

app.use(routes);

const startServer = async () => {
  try {
    await connectDB(); // Ensure the database is connected
    app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
  } catch (error) {
    console.error('Failed to connect to the database', error);
    process.exit(1);
  }
};

startServer();