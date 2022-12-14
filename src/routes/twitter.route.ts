import { Router, Request, Response } from 'express';
import auth from '../middlewares/auth';
import twitter from '../utils/twitter';

const router = Router();

router.route('/').post(async (req: Request, res: Response) => {
  // const { tweet } = req.body;

  try {
    const result = await twitter.get('search/tweets', { q: 'market crash stocks' });
    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
