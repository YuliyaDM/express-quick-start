import { Router } from 'express'

import { SitesList } from '../controllers/servers'

const router = Router()

router
  .route('/api/sites')
  .get(SitesList)

export { router as default }
