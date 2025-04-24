import { Router } from 'express';

const router = Router()

router.get('/users', (req, res) => {
  res.send({ message: 'Akane' })
})

export default router;