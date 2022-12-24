import colors from 'colors'
import express from 'express'
import path from 'path'

import { Init } from './config/middleware'

const errorController = require('./controllers/error.controller')

const PORT: number | string = process.env.port ?? 3000

export const App: express.Application = express()

Init(App)

App.locals.first_name = 'Julia' as string
App.locals.last_name = 'Pirogova' as string

App.set('view engine', 'ejs')
App.set('views', path.resolve(__dirname, '../views-ejs/pages'))

App.use(errorController.getError)

console.log(path.resolve(__dirname, '../views-ejs/pages'))

App.listen(PORT, () => {
  console.log(colors.bgRed.blue.bold(`Server has launched on port ${PORT}...`))
})
