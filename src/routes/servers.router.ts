import { Router } from 'express'

const sitesListController = require('../controllers/sitesList.controller')

const router = Router()

router
  .route('/api/sites')
  .get(sitesListController.getSitesList)

export { router as default }
