// * ----------------------------------------------------
// * All router functionality for the main 'index' route.
// * ----------------------------------------------------
import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.render('index');
});

module.exports = router;
