import { Request, Response, Router } from 'express'

const router = Router()

router.get('/authors', (req: Request<never, never, { authors: string }, never>, res: Response) => {
  const { authors } = req.body

  res.render('authors', { title: 'Authors', authorsList: authors, active: 'authors' })
})

export { router as default }
