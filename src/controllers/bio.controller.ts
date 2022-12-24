import { Request, Response } from 'express'

import { App } from '..'

function GetBio (req: Request, res: Response) {
  const author: string = `${App.locals.first_name} ${App.locals.last_name}`

  res.render('biography', { title: 'Biography', author, usersId: req.params.usersId, active: 'bio' })
}

exports.getBio = GetBio
