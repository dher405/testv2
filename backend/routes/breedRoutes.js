import express from 'express';
import { getBreeds, getBreed, createBreed, updateBreed, deleteBreed } from '../controllers/breedController.js';
import { validateBreed } from '../middleware/validationMiddleware.js';

const router = express.Router();

router.get('/', getBreeds);
router.get('/:id', getBreed);
router.post('/', validateBreed, createBreed);
router.put('/:id', validateBreed, updateBreed);
router.delete('/:id', deleteBreed);

export default router;