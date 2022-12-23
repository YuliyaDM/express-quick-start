import express from 'express'
import path from 'path'

import { Authors, TimeRequest } from './middleware'
import authors from './routes/authors'
import bio from './routes/bio'
import reqMethods from './routes/reqMethods'
import root from './routes/root'
import serverRoutes from './routes/servers'
import usersInfo from './routes/usersInfo'

const BodyParser = require('body-parser')

const RootDir = path.resolve()

export function Init (App: express.Application) {
  // static folder

  App.use(express.static(path.resolve(RootDir, 'ejs')))

  // styles folder settings

  // eslint-disable-next-line n/no-path-concat
  App.use('./styles', express.static(__dirname + '/styles/style.css'))

  // body parser

  App.use(BodyParser.urlencoded({ extended: false }))
  App.use(BodyParser.json())

  // middleware

  App.use(Authors)
  App.use(TimeRequest)

  // pages

  App.use(root)
  App.use(bio)
  App.use(authors)
  App.use(usersInfo)
  App.use(reqMethods)
  App.use(serverRoutes)
}
