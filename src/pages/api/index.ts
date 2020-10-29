import express from 'express';

const router = express.Router();

router.get('', async (req, res) => {
  res.send('Welcome to my api page!');
});

export default router;
