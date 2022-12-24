/* eslint-disable n/no-path-concat */
import express from 'express'
import path from 'path'

import { Authors, TimeRequest } from '../middleware'
import authorsRouter from '../routes/authors.router'
import bioRouter from '../routes/bio.router'
import reqMethodsRouter from '../routes/reqMethods.router'
import rootRouter from '../routes/root.router'
import serversRouter from '../routes/servers.router'
import usersInfoRouter from '../routes/usersInfo.router'

const BodyParser = require('body-parser')

const RootDir = path.resolve()

export function Init (App: express.Application) {
  // static folder

  App.use(express.static(path.resolve(RootDir, 'src')))

  // styles folder settings

  App.use('/styles', express.static(__dirname + '/styles/style.css'))

  // body parser

  App.use(BodyParser.urlencoded({ extended: false }))
  App.use(BodyParser.json())

  // middleware

  App.use(Authors)
  App.use(TimeRequest)

  // pages

  App.use(rootRouter)
  App.use(bioRouter)
  App.use(authorsRouter)
  App.use(usersInfoRouter)
  App.use(reqMethodsRouter)
  App.use(serversRouter)
}
