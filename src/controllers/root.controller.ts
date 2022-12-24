import { Request, Response } from 'express'

function GetRoot (req: Request, res: Response) {
  res.render('index', { title: 'Main Page', active: 'index' })
}

exports.getRoot = GetRoot
