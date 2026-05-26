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
}

const N = (file: string) => `/assets/envato/New-img/WhatsApp Image 2026-05-26 at ${file}.jpeg`

export const projects: Project[] = [
  {
    slug: 'geometric-shade-canopy-structure',
    name: 'Geometric Lattice Shade Structure',
    client: 'Confidential — Qatar Public Sector',
    sector: 'Commercial',
    year: '2024',
    location: 'Doha, Qatar',
    scope: 'Design, fabrication, and erection of a large-span geometric lattice steel shade canopy with tensile membrane panels.',
    description:
      'A landmark geometric steel lattice canopy structure covering a public outdoor area in Doha. The complex three-dimensional node-and-tube frame was fabricated in our workshop, delivered to site in sections, and erected using mobile elevating work platforms. Tensile shade membrane panels were installed on completion of the steel frame.',
    images: [
      '/assets/envato/Images/10.jpeg',
      '/assets/envato/Images/13.jpg',
      '/assets/envato/Images/14.jpg',
      '/assets/envato/Images/5.jpeg',
    ],
    coverImage: '/assets/envato/Images/10.jpeg',
    featured: true,
  },
  {
    slug: 'commercial-complex-steel-package',
    name: 'Commercial Complex Steel & Fit-Out Package',
    client: 'Confidential — Qatar Developer',
    sector: 'Commercial',
    year: '2025',
    location: 'Doha, Qatar',
    scope: 'Structural steel truss installation, secondary steelwork, drywall partitioning, and MEP fit-out for a large commercial complex.',
    description:
      'Comprehensive structural and fit-out package for a large commercial complex in Doha. Works included the fabrication and installation of long-span steel trusses at roof level, secondary cladding, internal drywall partitioning, and full MEP systems. The project was executed in phases with our iSteel crews to allow client occupation of completed areas while works continued in adjacent zones.',
    images: [
      N('2.15.28 PM'),
      N('2.15.29 PM'),
      N('2.15.27 PM'),
      N('2.15.26 PM'),
    ],
    coverImage: N('2.15.28 PM'),
    featured: true,
  },
  {
    slug: 'industrial-warehouse-complex',
    name: 'Industrial Warehouse Complex',
    client: 'Confidential — Private Developer',
    sector: 'Industrial',
    year: '2023',
    location: 'Industrial Area, Doha, Qatar',
    scope: 'Design, fabrication, and erection of 4,200 m² pre-engineered steel warehouse with mezzanine, civil works, and MEP.',
    description:
      'Turnkey design-build warehouse complex consisting of two clear-span portal frame structures with a connecting link building. The project included all civil foundations, ground slab, MEP services, and office fit-out, completed within 14 weeks from design start to handover.',
    images: [
      N('2.15.19 PM'),
      N('2.15.19 PM (4)'),
      '/assets/envato/Images/15.jpeg',
      '/assets/envato/Images/21.jpeg',
    ],
    coverImage: N('2.15.19 PM'),
    featured: true,
  },
  {
    slug: 'steel-arch-truss-project',
    name: 'Arched Steel Truss Structure',
    client: 'Confidential — EPC Contractor',
    sector: 'Commercial',
    year: '2024',
    location: 'Doha, Qatar',
    scope: 'Fabrication, transport, and erection of arched steel trusses for a landmark mixed-use development in Doha.',
    description:
      'Structural steel package for a large curved roof structure incorporating arched trusses spanning over 40 metres. The trusses were fabricated in sections in our Doha workshop, assembled on the ground, and lifted into position using mobile cranes. On-site welding and inspection were completed in parallel with surrounding civil works.',
    images: [
      '/assets/envato/Images/4.jpeg',
      N('2.15.25 PM'),
      '/assets/envato/Images/1.jpeg',
      '/assets/envato/Images/11.jpeg',
    ],
    coverImage: '/assets/envato/Images/4.jpeg',
    featured: true,
  },
  {
    slug: 'fabrication-workshop-inspection',
    name: 'Large-Scale Steel Fabrication Package',
    client: 'Confidential — Petrochemical Client',
    sector: 'Oil & Gas',
    year: '2023',
    location: 'Mesaieed Industrial City, Qatar',
    scope: '850 tonnes structural steel — fabrication, surface preparation, and blasting/painting to client specification.',
    description:
      'Major off-site fabrication package covering structural beams, columns, and built-up sections for a petrochemical facility expansion. Full QC inspection and third-party NDT was carried out in our Doha workshop prior to dispatch to site. All steel was blasted to Sa 2½ and finished with a three-coat paint system to client-approved specification.',
    images: [
      N('2.15.37 PM'),
      N('2.15.36 PM'),
      N('2.15.33 PM'),
      N('2.15.34 PM'),
    ],
    coverImage: N('2.15.37 PM'),
    featured: false,
  },
  {
    slug: 'civil-earthworks-qatar',
    name: 'Civil Works & Site Infrastructure',
    client: 'Confidential — Government',
    sector: 'Civil',
    year: '2025',
    location: 'Qatar',
    scope: 'Bulk earthworks, foundation excavation, and underground utilities for a large development site.',
    description:
      'Civil infrastructure package covering site preparation, bulk earthworks, foundation excavation, and underground utility installation across a large greenfield development site. Works were carried out with our own plant fleet under a comprehensive HSE management plan.',
    images: [
      '/assets/envato/Images/2.jpeg',
      N('2.15.21 PM (2)'),
      N('2.15.19 PM (1)'),
      '/assets/envato/Images/7.jpeg',
    ],
    coverImage: '/assets/envato/Images/2.jpeg',
    featured: false,
  },
  {
    slug: 'roofing-steel-installation',
    name: 'Roof Steelwork & Cladding System',
    client: 'Confidential — Developer',
    sector: 'Industrial',
    year: '2025',
    location: 'Doha, Qatar',
    scope: 'Supply and installation of structural roof purlins, secondary steelwork, and insulated metal cladding panels.',
    description:
      'Steel roofing package for an industrial facility covering the supply, fabrication, and installation of roof purlins, gutter rails, and insulated sandwich cladding panels. Works were carried out using manlift platforms to ensure safe installation at height without disrupting ground-level operations below.',
    images: [
      N('2.15.31 PM'),
      N('2.15.32 PM'),
      N('2.15.30 PM'),
      '/assets/envato/Images/12.jpeg',
    ],
    coverImage: N('2.15.31 PM'),
    featured: false,
  },
  {
    slug: 'night-operations-steel-erection',
    name: 'Night Shift Steel Erection Package',
    client: 'Confidential — EPC Contractor',
    sector: 'Commercial',
    year: '2024',
    location: 'Doha, Qatar',
    scope: 'Structural steel installation during planned night-shift windows to meet critical programme milestones.',
    description:
      'Steel erection package executed under planned night-shift operations to avoid daytime construction restrictions in a busy urban area of Doha. Tower crane coordination, temporary works, and full lighting setup were deployed to allow continuous steel placement through the night. The compressed schedule was achieved safely and within programme.',
    images: [
      N('2.15.27 PM'),
      '/assets/envato/Images/20.jpeg',
      '/assets/envato/Images/18.jpeg',
    ],
    coverImage: N('2.15.27 PM'),
    featured: false,
  },
]
