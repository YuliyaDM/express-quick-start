import { Router } from 'express'

const rootController = require('../controllers/root.controller')

const router: Router = Router()

router
  .route('/')
  .get(rootController.getRoot)

export { router as default }
