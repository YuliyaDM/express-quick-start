import { Request, Response } from 'express'

function GetAuthors (req: Request<never, never, { authors: string }, never>, res: Response) {
  const { authors } = req.body

  res.render('authors', { title: 'Authors', authorsList: authors, active: 'authors' })
}

exports.getAuthors = GetAuthors
