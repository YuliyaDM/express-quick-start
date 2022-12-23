import { Request, Response, Router } from 'express'

const router = Router()

router.all('/reqMethodsMain', (req: Request, res: Response) => {
  const url: URL = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`)
  const values: string[] = [...url.searchParams.values()]
  if ('GET' === req.method) {
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
  if ('POST' === req.method) {
    res.send(req.body)
  }
})

export { router as default }
