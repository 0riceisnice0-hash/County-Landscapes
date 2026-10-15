import { services } from './content.mjs';
import { jobs } from './job-pages.mjs';
import { towns } from './town-pages.mjs';

const categoryPhotos = {
  landscaping: 'assets/garden-landscaping.jpg',
  fencing: 'assets/fenced-garden.webp',
  'tree-surgery': 'assets/garden-trees.jpg',
  'pressure-washing': 'assets/patio-cleaning.jpg'
};
const entry = (path, label, category = 'landscaping') => ({
  path, label, photo: categoryPhotos[category],
  image: `assets/social/${path ? path.replace('.html', '') : 'home'}.jpg`,
  alt: `County Landscapes — ${label}. Leicestershire. Free quotes: 07526 024115.`
});

export const shareCards = [
  entry('', 'Landscaping & garden care'),
  entry('services.html', 'Garden & outdoor services'),
  entry('areas.html', 'Across Leicestershire'),
  entry('contact.html', 'Let’s talk about your garden'),
  entry('privacy.html', 'Privacy information'),
  ...services.map(service => entry(`${service.slug}.html`, service.name, service.slug)),
  ...jobs.map(job => entry(`${job.slug}.html`, job.name, job.category)),
  ...towns.map(town => entry(`landscaper-${town.slug}.html`, `Landscaper in ${town.name}`, town.category))
];
export const shareCardFor = path => shareCards.find(card => card.path === path) || shareCards[0];

export const categorySearchMeta = {
  landscaping: {
    title: 'Landscaping Leicestershire | County Landscapes',
    description: 'Garden makeovers, turf laying, patios and garden clearance across Leicestershire. Discuss one job or a complete change. Call for a free quote.'
  },
  fencing: {
    title: 'Fencing & Garden Walls Leicestershire | County Landscapes',
    description: 'Fence installation, repairs, painting and treatment, plus brickwork and garden walls in Leicestershire. Tell County Landscapes what you need. Free quotes.'
  },
  'tree-surgery': {
    title: 'Tree & Hedge Services Leicestershire | County Landscapes',
    description: 'Tree work, hedge cutting and removal, stump grinding and root removal across Leicestershire. Describe the work and access for a free quote.'
  },
  'pressure-washing': {
    title: 'Pressure Washing Leicestershire | County Landscapes',
    description: 'Pressure washing for existing driveways and patios across Leicestershire. Share the surface type, condition and postcode for your free quote.'
  }
};

export const hubBreadcrumb = label => `<nav class="breadcrumbs hub-breadcrumbs" aria-label="Breadcrumb"><a href="./">Home</a><span aria-hidden="true">/</span><span aria-current="page">${label}</span></nav>`;
