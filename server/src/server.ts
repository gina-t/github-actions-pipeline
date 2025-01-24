import './config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/connection.js';
import routes from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serves static files in the entire client's dist folder
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

// import express from 'express';
// // import path from 'node:path';
// import connectDB  from './config/connection.js';
// import routes from './routes/index.js';

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Serves static files in the entire client's dist folder
// app.use(express.static('../client/dist'));

// app.use(routes);

// db.once('open', () => {
//   app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
// });