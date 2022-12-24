import { Router } from 'express'

const authorsControllers = require('../controllers/authors.controller')

const router = Router()

router
  .route('/authors')
  .get(authorsControllers.getAuthors)

export { router as default }
