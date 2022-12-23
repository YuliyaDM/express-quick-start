import { Request, Response, Router } from 'express'

import { App } from '..'

const router = Router()

router.get(['/bio', '/about', '/biography'], (req: Request, res: Response) => {
  const author: string = `${App.locals.first_name} ${App.locals.last_name}`

  res.render('biography', { title: 'Biography', author, usersId: req.params.usersId, active: 'bio' })
})

export { router as default }
