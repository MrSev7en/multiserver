import express from 'express';
import routes from '../../general/routes';

const router = express.Router();

router.get(new routes('').route, async (req, res) => {
  res.send('Hello, World!');
});

export default router;
