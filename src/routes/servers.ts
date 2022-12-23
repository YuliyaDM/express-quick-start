import { Router } from 'express'

import { SitesList } from '../controllers/servers'

const router = Router()

router.get('/api/sites', SitesList)

export { router as default }
