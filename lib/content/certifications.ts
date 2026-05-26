export interface Certification {
  id: string
  name: string
  issuer: string
  standard: string
  logo: string
  type: 'certification' | 'appreciation'
  year?: string
  client?: string
}

export const certifications: Certification[] = [
  {
    id: 'iso-9001',
    name: 'ISO 9001:2015',
    issuer: 'Quality Management System',
    standard: 'ISO 9001',
    logo: '/assets/logos/iso-9001.svg',
    type: 'certification',
  },
  {
    id: 'iso-14001',
    name: 'ISO 14001:2015',
    issuer: 'Environmental Management System',
    standard: 'ISO 14001',
    logo: '/assets/logos/iso-14001.svg',
    type: 'certification',
  },
  {
    id: 'iso-45001',
    name: 'ISO 45001:2018',
    issuer: 'Occupational Health & Safety Management',
    standard: 'ISO 45001',
    logo: '/assets/logos/iso-45001.svg',
    type: 'certification',
  },
  {
    id: 'qcd',
    name: 'QCD Registration',
    issuer: 'Qatar Chemical & Petroleum Corporation',
    standard: 'QCD',
    logo: '/assets/logos/qcd.svg',
    type: 'certification',
  },
  // TODO: Add real appreciation letter items with client name, year, project
  {
    id: 'appreciation-1',
    name: 'Letter of Appreciation',
    issuer: '[TODO: Client Name]',
    standard: 'Appreciation',
    logo: '/assets/logos/placeholder-client.svg',
    type: 'appreciation',
    year: '[TODO: Year]',
    client: '[TODO: Client Name]',
  },
]
