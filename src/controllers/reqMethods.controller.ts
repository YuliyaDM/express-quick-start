/* eslint-disable no-unused-vars */
import { Request, Response } from 'express'

function GetReqMethods (req: Request, res: Response) {
  const url = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`)
  const values: string[] = [...url.searchParams.values()]
  if (!values.length) res.render('reqMethodsMain', { title: 'Request Methods', active: 'reqMethods' })
  else {
    const searchParams: Partial<{ [key in string]: string }[]> = [] as Partial< { [key in string]: string }[] >
    ([...url.searchParams.keys()]).forEach((el: string, index: number) => {
      const value = [...url.searchParams.values()][index]
      if (value) searchParams.push({ [el]: value })
    })
    console.log(searchParams)
    res.render('reqMethodsKeys', { title: 'Req Methods', active: 'reqMethods', params: searchParams })
  }
}

function PostReqMethods (req: Request, res: Response) {
  res.send(req.body)
}

module.exports = {
  getReqMethods: GetReqMethods,
  postReqMethods: PostReqMethods
}
