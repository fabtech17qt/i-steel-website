export interface Service {
  slug: string
  number: string
  title: string
  shortDescription: string
  fullDescription: string
  image: string
  icon: string   // filename without .svg from /public/assets/envato/steel-icons/
  capabilities: string[]
}

export const services: Service[] = [
  {
    slug: 'structural-steel-fabrication',
    number: '01',
    title: 'Structural Steel Fabrication',
    icon: '011-beam',
    shortDescription:
      'Precision fabrication of structural steel components for industrial, commercial, and oil & gas applications.',
    fullDescription:
      'Our structural steel fabrication facility produces beams, columns, trusses, and custom steel components to exact engineering specifications. We operate a fully equipped workshop with CNC plasma cutters, saws, drilling, and welding stations. All works comply with AISC, BS, and EN standards.',
    image: '/assets/envato/New-img/WhatsApp Image 2026-05-26 at 2.15.36 PM.jpeg',
    capabilities: [
      'CNC plasma and oxy-fuel cutting',
      'Heavy plate and section rolling',
      'Sub-arc and MIG/MAG welding',
      'NDT testing (UT, MT, PT)',
      'Hot-dip galvanising coordination',
    ],
  },
  {
    slug: 'steel-erection',
    number: '02',
    title: 'Steel Erection & Installation',
    icon: '001-steel',
    shortDescription:
      'Safe, efficient structural steel erection for multi-storey buildings, industrial facilities, and bridges.',
    fullDescription:
      'Our experienced erection crews handle structural steel installation from single-storey steel sheds to complex multi-storey framed buildings. We self-perform all lifting with our fleet of mobile cranes and aerial work platforms.',
    image: '/assets/envato/Industrial Catwalk Long Corner.H03.2k.png',
    capabilities: [
      'Multi-storey steel framing',
      'Industrial and warehouse structures',
      'Mezzanine floors and walkways',
      'Canopy and shade structures',
      'Crane and heavy-lift coordination',
    ],
  },
  {
    slug: 'civil-construction',
    number: '03',
    title: 'Civil Construction',
    icon: '019-factory',
    shortDescription:
      'Turnkey civil works including foundations, slabs, drainage, roads, and site infrastructure.',
    fullDescription:
      'We deliver complete civil packages for industrial and commercial projects — from bulk earthworks and piling to reinforced concrete frames, paving, and drainage. Our civil division is self-sufficient with plant, equipment, and skilled labour.',
    image: '/assets/envato/Images/2.jpeg',
    capabilities: [
      'Pile foundations and ground slabs',
      'Reinforced concrete structures',
      'Earthworks and site grading',
      'Road and pavement works',
      'Underground utilities',
    ],
  },
  {
    slug: 'mep-contracting',
    number: '04',
    title: 'MEP Contracting',
    icon: '007-tools',
    shortDescription:
      'Full mechanical, electrical, and plumbing services for industrial facilities and commercial buildings.',
    fullDescription:
      'Our MEP division delivers mechanical, electrical, and plumbing systems as part of turnkey packages. We design, supply, install, test, and commission all MEP systems to international codes and Qatar authority standards.',
    image: '/assets/envato/Images/9.jpeg',
    capabilities: [
      'HVAC design and installation',
      'Low-voltage electrical systems',
      'Plumbing and drainage',
      'Fire fighting and suppression',
      'BMS and building automation',
    ],
  },
  {
    slug: 'industrial-buildings',
    number: '05',
    title: 'Industrial Buildings',
    icon: '028-forge',
    shortDescription:
      'Design-build industrial facilities including warehouses, factories, workshops, and cold stores.',
    fullDescription:
      'We specialise in pre-engineered and conventional steel industrial buildings across Qatar. From site survey to handover, we manage design, procurement, fabrication, civil works, and fit-out as a single accountable contractor.',
    image: '/assets/envato/Carport.H03.2k.png',
    capabilities: [
      'Pre-engineered building systems',
      'Large-span warehouse frames',
      'Factory and production halls',
      'Cold store and insulated panels',
      'Mezzanine and internal fit-out',
    ],
  },
  {
    slug: 'oil-gas-construction',
    number: '06',
    title: 'Oil & Gas Construction',
    icon: '030-steel',
    shortDescription:
      'ADNOC and QatarEnergy-compliant structural and civil works for upstream and midstream facilities.',
    fullDescription:
      'iSteel executes structural, civil, and piping support works within oil and gas facilities. We are familiar with HSE management systems required on brownfield operating assets and deliver safely in hazardous area environments.',
    image: '/assets/envato/Steel Pipes.H03.2k.png',
    capabilities: [
      'Process area steel structures',
      'Pipe racks and equipment supports',
      'Fireproofing and intumescent coatings',
      'Confined space and live-plant works',
      'HAZID / risk-assessment compliance',
    ],
  },
  {
    slug: 'steel-blasting-painting',
    number: '07',
    title: 'Steel Blasting & Painting',
    icon: '027-welder',
    shortDescription:
      'Shot blasting, abrasive blasting, and industrial painting to Sa2.5 / Sa3 standards.',
    fullDescription:
      'Surface preparation and protective coating is performed in our in-house blasting and painting facility. We comply with SSPC, NACE, and client-specific paint specifications and maintain a temperature- and humidity-controlled spray booth.',
    image: '/assets/envato/Steel Beams.H03.2k.png',
    capabilities: [
      'Abrasive blasting to Sa 2½ / Sa3',
      'Zinc-rich epoxy primers',
      'Intumescent fire-rating coatings',
      'Polyurethane and epoxy topcoats',
      'QC inspections and DFT records',
    ],
  },
  {
    slug: 'renovation-fitout',
    number: '08',
    title: 'Renovation & Fit-Out',
    icon: '042-hammer',
    shortDescription:
      'Interior fit-out, partition works, false ceilings, and renovation for commercial and office spaces.',
    fullDescription:
      'We execute interior renovation and fit-out packages for existing commercial buildings, offices, retail spaces, and residential compounds — including all trades from demolition through handover.',
    image: '/assets/envato/Images/6.jpeg',
    capabilities: [
      'Light steel partitions (GRC/GRP)',
      'Suspended ceilings (GRC/GRP)',
      'Floor finishes (ceramic, porcelain, epoxy)',
      'Joinery and millwork',
      'Painting and decoration',
    ],
  },
  {
    slug: 'precast-concrete',
    number: '09',
    title: 'Precast Concrete Works',
    icon: '032-press',
    shortDescription:
      'Precast concrete elements including boundary walls, slabs, columns, and bespoke units.',
    fullDescription:
      'We produce and install precast concrete boundary walls, retaining walls, slabs, and bespoke architectural elements. Our precast products offer fast on-site erection and consistent quality versus in-situ alternatives.',
    image: '/assets/envato/Images/24.jpeg',
    capabilities: [
      'Precast boundary walls and pillars',
      'Pre-stressed hollow-core slabs',
      'Retaining wall units',
      'Architectural precast panels',
      'Rapid erection by own crews',
    ],
  },
  {
    slug: 'roofing-cladding',
    number: '10',
    title: 'Roofing & Cladding',
    icon: '013-steel',
    shortDescription:
      'Metal roofing, insulated sandwich panels, and architectural cladding for industrial and commercial facades.',
    fullDescription:
      'We supply and install all types of metal roofing and wall cladding systems including standing-seam, corrugated profiles, and composite insulated panels (PIR/PUR). Systems tested to FM Global and local authority requirements.',
    image: '/assets/envato/Images/12.jpeg',
    capabilities: [
      'Standing-seam metal roofing',
      'Insulated sandwich panel walls',
      'Skylights and roof lights',
      'Aluminium composite facades',
      'Waterproofing membranes',
    ],
  },
  {
    slug: 'electromechanical-works',
    number: '11',
    title: 'Electromechanical Works',
    icon: '044-wheel',
    shortDescription:
      'Integrated electromechanical packages for industrial plants and commercial buildings.',
    fullDescription:
      'Beyond standard MEP, our electromechanical team installs control systems, instrumentation, conveyors, overhead cranes, and process equipment associated with manufacturing and industrial facilities.',
    image: '/assets/envato/Images/9.jpeg',
    capabilities: [
      'Overhead cranes and gantries',
      'Compressed air systems',
      'Generator sets and UPS',
      'Process instrumentation',
      'Variable speed drives',
    ],
  },
  {
    slug: 'steel-design-engineering',
    number: '12',
    title: 'Steel Design & Engineering',
    icon: '048-grid',
    shortDescription:
      'In-house structural engineering, 3D BIM modelling, and workshop detailing for all project types.',
    fullDescription:
      'Our engineering department uses Tekla Structures and AutoCAD to produce full 3D models, structural analysis, workshop drawings, and erection sequences. We collaborate with EPC and design-build clients on constructability reviews.',
    image: '/assets/envato/Images/8.jpeg',
    capabilities: [
      'Tekla Structures 3D BIM modelling',
      'Structural analysis (STAAD/ETABS)',
      'Workshop detail drawings',
      'Connection design',
      'Erection sequence planning',
    ],
  },
]
