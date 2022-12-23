import colors from 'colors'
import { Request, Response, Router } from 'express'

const router = Router()

router.get('/users/:id/:name', (req: Request, res: Response) => {
  const id: string = req.params.id
  const name: string = req.params.name

  res.render('user', { title: `User-${id} "${name}"`, id, name, active: 'users' })

  console.log(colors.bgGreen.dim.italic(` ${req.params.id} `))
})

export { router as default }
