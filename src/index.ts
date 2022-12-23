import colors from 'colors'
import express from 'express'
import path from 'path'

import { Init } from './config'

const PORT: number | string = process.env.port ?? 3000

export const App: express.Application = express()

const RootDir = path.resolve()

Init(App)

App.locals.first_name = 'Julia' as string
App.locals.last_name = 'Pirogova' as string

App.set('view engine', 'ejs')
App.set('views', path.resolve(RootDir, 'ejs/pages'))

App.listen(PORT, () => {
  console.log(colors.bgRed.blue.bold(`Server has launched on port ${PORT}...`))
})
