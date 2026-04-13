import express from 'express';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.get('/api/breeds', (req, res) => res.json({ breeds: ['Labrador','Poodle','Bulldog','Beagle','Husky'] }));
app.listen(PORT, () => console.log(`Backend on port ${PORT}`));
