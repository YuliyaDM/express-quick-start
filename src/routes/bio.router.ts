import { Router } from 'express'

const bioController = require('../controllers/bio.controller')

const router = Router()

router
  .route(['/bio', '/about', '/biography'])
  .get(bioController.getBio)

export { router as default }
