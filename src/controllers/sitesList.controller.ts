import { SITES } from '../constants/SitesList'

function GetSitesList (req: any, res: any) {
  res.status(200).json(SITES)
}

exports.getSitesList = GetSitesList
