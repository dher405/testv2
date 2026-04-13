
import express from 'express';
import breedRoutes from './routes/breedRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/breeds', breedRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
