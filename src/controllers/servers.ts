interface Sites {
    id: number,
    name: string,
    status: 'working' | 'not working'
}

export const SITES: Sites[] = [
  { id: 1, name: 'YouTube', status: 'working' },
  { id: 2, name: 'Twitter', status: 'not working' },
  { id: 3, name: 'GitHub', status: 'working' }
]

export function SitesList (req: any, res: any) {
  res.status(200).json(SITES)
}
