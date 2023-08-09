import { Router } from 'express';
import generateContent from '../controllers/generateContent.controller.js';
import {createZip} from '../controllers/getImages.controller.js';
const router = Router();

router.post('/generateContent', (req, res) => {
  generateContent(req.body)
    .then(phrase => res.status(201).json(phrase))
    .catch(err => {
      console.log(err);
      err.name === 'ValidationError'
        ? res.status(400).json({ message: err.message })
        : res.status(500).json({ message: err.message });
    });
});

export default router;