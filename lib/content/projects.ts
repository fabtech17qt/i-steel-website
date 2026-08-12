export type Sector = 'Industrial' | 'Commercial' | 'Oil & Gas' | 'Civil' | 'MEP'

export interface Project {
  slug: string
  name: string
  client: string
  sector: Sector
  year: string
  location: string
  scope: string
  description: string
  images: string[]
  coverImage: string
  featured: boolean
  stats?: { label: string; value: string }[]
}

const N = (file: string) => `/assets/envato/New-img/WhatsApp Image 2026-05-26 at ${file}.jpeg`

export const projects: Project[] = [
  {
    slug: 'al-waab-city-project',
    name: 'Al Waab City Project',
    client: 'Domopan / Al Waab City',
    sector: 'Commercial',
    year: '2020',
    location: 'Al Waab, Doha, Qatar',
    scope: 'End-to-end Design, Fabrication and Installation of structural steel for one of Qatar\'s most complex Steel Structures.',
    description:
      'One of Qatar\'s most complex Steel Structures — complete Design, Fabrication and Installation of the Al Waab City Mall structural steel package, delivered ahead of schedule with a clean safety record. The project achieved 2 Million LTI-Free Safe Work Hours, earning the Al Waab City Central District Phase-2 Safety Excellence Certificate.',
    images: [
      '/assets/envato/Images/10.jpeg',
      '/assets/envato/Images/4.jpeg',
      '/assets/envato/Images/11.jpeg',
      '/assets/envato/Images/5.jpeg',
    ],
    coverImage: '/assets/envato/Images/10.jpeg',
    featured: true,
    stats: [
      { label: 'Scope to Handover', value: '9 months' },
      { label: 'Delivery', value: 'Early' },
      { label: 'Safety Incidents', value: 'Zero' },
    ],
  },
  {
    slug: 'greenhouse-structure',
    name: 'Greenhouse Structure',
    client: 'Confidential — Qatar Agricultural Sector',
    sector: 'Industrial',
    year: '2023',
    location: 'Doha, Qatar',
    scope: 'End-to-end Design and Installation of a greenhouse steel structure, delivered ahead of schedule with a clean Safety record.',
    description:
      'A fully integrated greenhouse steel structure project delivered from design to installation in 20 days — early against the agreed schedule and with zero safety incidents. The lightweight structural frame supports shade netting and polycarbonate cladding over a large agricultural growing area.',
    images: [
      '/assets/envato/Images/15.jpeg',
      '/assets/envato/Images/21.jpeg',
      N('2.15.19 PM'),
      N('2.15.19 PM (4)'),
    ],
    coverImage: '/assets/envato/Images/15.jpeg',
    featured: true,
    stats: [
      { label: 'Scope to Handover', value: '20 days' },
      { label: 'Delivery', value: 'Early' },
      { label: 'Safety Incidents', value: 'Zero' },
    ],
  },
  {
    slug: 'qatar-foundation-steel-works',
    name: 'Qatar Foundation Steel Works',
    client: 'Qatar Foundation',
    sector: 'Commercial',
    year: '2022',
    location: 'Education City, Doha, Qatar',
    scope: 'End-to-end Installation of complex decorative steel structures, delivered ahead of schedule with a clean safety record.',
    description:
      'Precision installation of intricate geometrical steel shade structures for Qatar Foundation\'s campus. The project required expert rigging and lifting of complex node-and-tube lattice frames using mobile elevating work platforms. Delivered ahead of programme with zero safety incidents.',
    images: [
      '/assets/envato/Images/5.jpeg',
      '/assets/envato/Images/13.jpg',
      '/assets/envato/Images/14.jpg',
      '/assets/envato/Images/4.jpeg',
    ],
    coverImage: '/assets/envato/Images/5.jpeg',
    featured: true,
    stats: [
      { label: 'Engineering', value: 'Precision' },
      { label: 'Execution', value: 'Safe' },
      { label: 'Delivery', value: 'Ahead of Schedule' },
    ],
  },
  {
    slug: 'nakilat-tower',
    name: 'Nakilat Tower',
    client: 'Confidential — Main Contractor',
    sector: 'Commercial',
    year: '2021',
    location: 'Doha, Qatar',
    scope: 'Design, Fabrication and Installation of structural steel for a landmark commercial tower in Doha.',
    description:
      'Structural steel package for the Nakilat Tower, a prominent commercial high-rise in Doha. iSteel delivered complete Design, Fabrication and Installation services, ahead of schedule and with a clean safety record. Works included complex connections, curtain wall support steelwork, and integration with the concrete core.',
    images: [
      N('2.15.28 PM'),
      N('2.15.29 PM'),
      N('2.15.27 PM'),
      N('2.15.26 PM'),
    ],
    coverImage: N('2.15.28 PM'),
    featured: true,
    stats: [
      { label: 'Project Type', value: 'Commercial Tower' },
      { label: 'Location', value: 'Doha, Qatar' },
      { label: 'Scope', value: 'Design, Fabrication & Installation' },
    ],
  },
  {
    slug: 'al-khor-storage-house',
    name: 'Al Khor Storage House',
    client: 'Confidential — Private Developer',
    sector: 'Industrial',
    year: '2022',
    location: 'Al Khor, Qatar',
    scope: 'Design, Fabrication and Installation of a large-span steel storage facility.',
    description:
      'Turnkey steel storage facility at Al Khor, delivered end-to-end by iSteel. The large-span clear-floor warehouse was designed, fabricated in our Doha workshop, and erected on-site — providing the client with a single accountable partner and a fast, quality-controlled delivery.',
    images: [
      N('2.15.19 PM'),
      N('2.15.19 PM (4)'),
      '/assets/envato/Images/15.jpeg',
      '/assets/envato/Images/21.jpeg',
    ],
    coverImage: N('2.15.19 PM'),
    featured: false,
    stats: [
      { label: 'Project Type', value: 'Storage Facility' },
      { label: 'Location', value: 'Al Khor, Qatar' },
      { label: 'Scope', value: 'Design, Fabrication & Installation' },
    ],
  },
  {
    slug: 'global-armoring-factory',
    name: 'Global Armoring Factory',
    client: 'Global Armoring Factory',
    sector: 'Industrial',
    year: '2023',
    location: 'Doha, Qatar',
    scope: 'Design, Fabrication and Installation of an industrial steel building for armoring manufacturing.',
    description:
      'Full-scope design-build steel industrial facility for the Global Armoring Factory. iSteel delivered the complete structural steel frame, cladding, and site works — providing a purpose-built production building on time and within programme.',
    images: [
      N('2.15.37 PM'),
      N('2.15.36 PM'),
      N('2.15.33 PM'),
      N('2.15.34 PM'),
    ],
    coverImage: N('2.15.37 PM'),
    featured: false,
    stats: [
      { label: 'Project Type', value: 'Industrial Facility' },
      { label: 'Location', value: 'Doha, Qatar' },
      { label: 'Scope', value: 'Design, Fabrication & Installation' },
    ],
  },
  {
    slug: 'school-project-qatar',
    name: 'School Project',
    client: 'Confidential — Government',
    sector: 'Commercial',
    year: '2024',
    location: 'Qatar',
    scope: 'End-to-end Installation of structural roof steel and metal cladding for a government school project.',
    description:
      'Structural steel installation for a government school — roof trusses, secondary steelwork, and metal roof cladding. The project was executed safely and delivered ahead of schedule, maintaining a clean safety record throughout works at height.',
    images: [
      N('2.15.31 PM'),
      N('2.15.32 PM'),
      N('2.15.30 PM'),
      '/assets/envato/Images/12.jpeg',
    ],
    coverImage: N('2.15.31 PM'),
    featured: false,
    stats: [
      { label: 'Engineering', value: 'Precision' },
      { label: 'Execution', value: 'Safe' },
      { label: 'Delivery', value: 'Ahead of Schedule' },
    ],
  },
  {
    slug: 'workshop-at-ras-laffan',
    name: 'Workshop at Ras Laffan',
    client: 'Confidential — Industrial Client',
    sector: 'Industrial',
    year: '2025',
    location: 'Ras Laffan Industrial City, Qatar',
    scope: 'Ongoing Turnkey Project — design, civil works, steel structure, cladding, and MEP for an industrial workshop.',
    description:
      'An ongoing Turnkey project at Ras Laffan Industrial City — one of Qatar\'s most demanding environments. iSteel is delivering the complete project from design through civil foundations, structural steel erection, cladding, and MEP fit-out under a single contract. Safety-first execution with coordinated scheduling to keep the project on programme.',
    images: [
      N('2.15.19 PM (1)'),
      '/assets/envato/Images/2.jpeg',
      N('2.15.21 PM (2)'),
      '/assets/envato/Images/7.jpeg',
    ],
    coverImage: N('2.15.19 PM (1)'),
    featured: false,
    stats: [
      { label: 'Project Type', value: 'Turnkey Solution' },
      { label: 'Safety', value: 'Zero Harm' },
      { label: 'Status', value: 'On Schedule' },
    ],
  },
]
