import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.get('/api/message', (req, res) => res.json({ message: 'Hello from testv2!' }));

app.listen(PORT, () => console.log(`Backend on port ${PORT}`));
