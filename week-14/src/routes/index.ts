// express.js offers a powerful routing system, 
// allows to define routes for handling HTTP requests.
// when we used to have node.js without express there is it was complicated to handle different routers
// there we were required to use conditional statements like if/switch to handle different routes

import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('hello safeee..');
});

router.get('/users', (req: Request, res: Response) => {
  res.send('[safeer, jabir, anirudh, sharoon, karthik..]');
});

export default router;