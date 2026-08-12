export interface Certification {
  id: string
  name: string
  issuer: string
  standard: string
  logo: string
  type: 'certification' | 'appreciation' | 'award'
  year?: string
  client?: string
  detail?: string
}

export const certifications: Certification[] = [
  {
    id: 'iso-9001',
    name: 'ISO 9001:2015',
    issuer: 'Quality Austria / IQNET',
    standard: 'Quality Management System',
    logo: '/assets/logos/iso-9001.svg',
    type: 'certification',
    detail: 'Design, Fabrication, Supply and Installation of Steel Structure and Secondary Steel Works',
  },
  {
    id: 'iso-14001',
    name: 'ISO 14001:2016',
    issuer: 'Quality Austria / IQNET',
    standard: 'Environmental Management System',
    logo: '/assets/logos/iso-14001.svg',
    type: 'certification',
    detail: 'Environmental management across all fabrication and construction activities',
  },
  {
    id: 'iso-45001',
    name: 'ISO 45001:2018',
    issuer: 'Quality Austria / IQNET',
    standard: 'Occupational Health & Safety Management',
    logo: '/assets/logos/iso-45001.svg',
    type: 'certification',
    detail: 'Occupational health and safety management for all site and workshop operations',
  },
  {
    id: 'icv',
    name: 'ICV Certified',
    issuer: 'In-Country Value Programme — Qatar',
    standard: 'In-Country Value',
    logo: '/assets/logos/icv.svg',
    type: 'certification',
    detail: 'Certified contributor to Qatar\'s In-Country Value (ICV) programme',
  },
  {
    id: 'ncage',
    name: 'NCAGE Certificate',
    issuer: 'Qatar National Codification Bureau (QNCB)',
    standard: 'NATO Commercial and Government Entity Code — BSW0A',
    logo: '/assets/logos/qncb.svg',
    type: 'certification',
    year: '2023',
    detail: 'Building 164, Street 29, Zone 81, Doha — NATO CAGE Code: BSW0A',
  },
  {
    id: 'safety-excellence-2025',
    name: 'Safety Excellence Certificate',
    issuer: 'Al Waab City Central District Phase-2 — Domopan / Shelter Group',
    standard: '2 Million LTI-Free Safe Work Hours',
    logo: '/assets/logos/placeholder-client.svg',
    type: 'award',
    year: 'January 2025',
    client: 'Domopan / Shelter Group',
    detail: 'Awarded for contribution to keeping a safe site and achieving 2 Million LTI-Free Safe Work Hours on Al Waab City Phase-2 (Parcel 19-B, J-046)',
  },
  {
    id: 'qatar-charity',
    name: 'Certificate of Thanks & Appreciation',
    issuer: 'Qatar Charity',
    standard: 'Appreciation',
    logo: '/assets/logos/placeholder-client.svg',
    type: 'appreciation',
    year: '2022',
    client: 'Qatar Charity',
    detail: 'Recognised for efforts to support the humanitarian message of Qatar Charity and donation to Support Qatar Charity projects',
  },
  {
    id: 'appreciation-pfeifer',
    name: 'Letter of Appreciation',
    issuer: 'Pfeifer',
    standard: 'Appreciation',
    logo: '/assets/logos/placeholder-client.svg',
    type: 'appreciation',
    client: 'Pfeifer',
    detail: 'Appreciation for exceptional performance, technical expertise, dedication, and commitment to quality on the Al Waab City Project',
  },
  {
    id: 'appreciation-seashore',
    name: 'Letter of Appreciation',
    issuer: 'Seashore Panel Factory',
    standard: 'Appreciation',
    logo: '/assets/logos/placeholder-client.svg',
    type: 'appreciation',
    client: 'Seashore Panel Factory',
    detail: 'Appreciation for successful completion of project scope',
  },
  {
    id: 'appreciation-domopan',
    name: 'Letter of Appreciation',
    issuer: 'Domopan Qatar',
    standard: 'Appreciation',
    logo: '/assets/logos/placeholder-client.svg',
    type: 'appreciation',
    client: 'Domopan',
    detail: 'Appreciation for outstanding work on the Al Waab City Project — highest standards of quality, safety and compliance',
  },
  {
    id: 'appreciation-mak',
    name: 'Certificate of Appreciation',
    issuer: 'MAK Group',
    standard: 'Appreciation',
    logo: '/assets/logos/placeholder-client.svg',
    type: 'appreciation',
    client: 'MAK Group',
    detail: 'Appreciation for outstanding achievement on the Waldorf Astoria Hotel & Building 171 project',
  },
]
