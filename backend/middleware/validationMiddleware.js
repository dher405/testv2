import { z } from 'zod';

const breedSchema = z.object({
  name: z.string().min(3).max(50),
  description: z.string().min(10).max(200),
  imageUrl: z.string().url(),
});

export const validateBreed = (req, res, next) => {
  try {
    breedSchema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json({ message: error.errors });
  }
};