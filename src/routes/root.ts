import { Request, Response, Router } from 'express'

const router: Router = Router()

router
  .route('/')
  .get((req: Request, res: Response) => {
    res.render('index', { title: 'Main Page', active: 'index' })
  })

export { router as default }
