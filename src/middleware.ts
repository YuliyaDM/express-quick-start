import { Request, Response } from 'express'

export function Authors (req: Request, res: any, next: any) {
  const authors: string[] = ['Julia', 'Zahar', 'Ksusha']
  req.body.authors = authors
  next()
}

export function TimeRequest (req: Request, res: Response, next: any) {
  const date: Date = new Date()
  req.body.date = date
  next()
}
