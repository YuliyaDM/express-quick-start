import { Router } from 'express'

const UsersInfoController = require('../controllers/usersInfo.controller')

const router = Router()

router
  .route('/users/:id/:name')
  .get(UsersInfoController.getUsersInfo)

export { router as default }
