import { Request, Response } from 'express'

function GetError (req: Request, res: Response) {
  res.render('error', { title: 'Error Page', active: 'error' })
}

exports.getError = GetError
