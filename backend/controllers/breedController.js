import { v4 as uuidv4 } from 'uuid';
import { Breed } from '../models/Breed.js';
import { db } from '../utils/db.js';

// GET all breeds
export const getBreeds = async (req, res, next) => {
  try {
    const breeds = db.data.breeds;
    res.json(breeds);
  } catch (error) {
    next(error);
  }
};

// GET a single breed by ID
export const getBreed = async (req, res, next) => {
  try {
    const breed = db.data.breeds.find((b) => b.id === req.params.id);
    if (!breed) {
      return res.status(404).json({ message: 'Breed not found' });
    }
    res.json(breed);
  } catch (error) {
    next(error);
  }
};

// POST a new breed
export const createBreed = async (req, res, next) => {
  try {
    const newBreed = { id: uuidv4(), ...req.body };
    db.data.breeds.push(newBreed);
    await db.write();
    res.status(201).json(newBreed);
  } catch (error) {
    next(error);
  }
};

// PUT (update) an existing breed
export const updateBreed = async (req, res, next) => {
  try {
    const index = db.data.breeds.findIndex((b) => b.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ message: 'Breed not found' });
    }
    db.data.breeds[index] = { ...db.data.breeds[index], ...req.body };
    await db.write();
    res.json(db.data.breeds[index]);
  } catch (error) {
    next(error);
  }
};

// DELETE a breed
export const deleteBreed = async (req, res, next) => {
  try {
    const index = db.data.breeds.findIndex((b) => b.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ message: 'Breed not found' });
    }
    db.data.breeds.splice(index, 1);
    await db.write();
    res.status(204).send(); // No content
  } catch (error) {
    next(error);
  }
};
