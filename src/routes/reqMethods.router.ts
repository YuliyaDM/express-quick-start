import { Router } from 'express'

const reqMethodsController = require('../controllers/reqMethods.controller')

const router = Router()

router
  .route('/reqMethodsMain')
  .get(reqMethodsController.getReqMethods)
  .post(reqMethodsController.postReqMethods)

export { router as default }
