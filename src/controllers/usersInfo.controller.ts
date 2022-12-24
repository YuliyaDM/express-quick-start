import colors from 'colors'
import { Request, Response } from 'express'

function GetUserInfo (req: Request, res: Response) {
  const id: string = req.params.id
  const name: string = req.params.name

  res.render('user', { title: `User-${id} "${name}"`, id, name, active: 'users' })

  console.log(colors.bgGreen.dim.italic(` ${req.params.id} `))
}

exports.getUsersInfo = GetUserInfo
