// Individual services confirmed by County Landscapes' leaflet and business profile.
// Keep claims specific to the work offered; do not imply that reference photos are County projects.
export const jobs = [
  {
    slug: 'garden-maintenance', category: 'landscaping', name: 'Garden maintenance & lawn mowing', short: 'Garden maintenance',
    title: 'Garden Maintenance & Lawn Mowing Leicestershire | County Landscapes',
    description: 'Garden maintenance and lawn mowing for homes and commercial properties across Leicestershire. One-off help or a regular programme. Request a free quote.',
    lead: 'Need a hand keeping the garden manageable? Ask County Landscapes about lawn mowing and a maintenance programme built around the jobs your space needs.',
    imageAlt: 'Landscaped garden with a healthy lawn, planting and curved borders',
    sections: [
      ['A clear starting point for garden care', 'Tell us what needs attention now: mowing, overgrown areas, hedge care or a mixture of tasks. A one-off visit can tackle an immediate problem, while regular maintenance can help keep the same jobs from building up.'],
      ['Agree the work and frequency', 'Gardens change with the seasons. Discuss the size of the lawn, how often you would like help and which other tasks belong in the programme. The agreed scope should make clear what is included at each visit.'],
      ['For homes and commercial grounds', 'County Landscapes works with residential and commercial properties across Leicestershire. Share the postcode, access arrangements and any areas that need particular attention when you ask for a quote.']
    ],
    quote: ['Approximate lawn and garden size', 'The tasks you would like included', 'One-off help or preferred visit frequency', 'Access, parking and any difficult areas'],
    faqs: [['Can I book regular garden maintenance?', 'Yes. Describe the garden and the tasks you want covered so a suitable maintenance programme can be discussed.'], ['Can I ask for mowing as a one-off job?', 'Yes. Tell County Landscapes the approximate lawn size, its current condition and when you would like the work done.']],
    related: ['garden-clearance', 'hedge-cutting', 'turf-laying']
  },
  {
    slug: 'garden-clearance', category: 'landscaping', name: 'Garden clearance', short: 'Garden clearance',
    title: 'Garden Clearance Leicestershire | County Landscapes',
    description: 'Overgrown garden clearance in Leicestershire. Discuss what to remove, what to keep and the next step for your outdoor space. Free quotes from County Landscapes.',
    lead: 'An overgrown garden can make it hard to see what you already have. County Landscapes can help clear the space and talk through what you want to do with it next.',
    imageAlt: 'Garden with a lawn, established planting and clear outdoor space',
    sections: [
      ['Decide what stays and what goes', 'Point out the planting, structures and features you want to keep. Include photos of the whole area and any sections that are especially dense or difficult to reach. A clear brief helps avoid removing something you intended to retain.'],
      ['Plan for access and removed material', 'A narrow passage, steps or a garden without direct side access can change how clearance is carried out. Discuss how cut material and unwanted items will be handled and what condition you want the area left in.'],
      ['Make room for the next project', 'Clearance can be a first step towards a new lawn, patio, fencing or a wider garden makeover. Mention those plans early so preparation and follow-on work can be discussed together.']
    ],
    quote: ['Photos of the whole garden and the overgrown areas', 'What must stay, and what should be removed', 'Access through or around the property', 'Whether new turf, paving or fencing will follow'],
    faqs: [['Can clearance be part of a larger garden project?', 'Yes. Describe the full plan so the clearance and any new lawn, patio or boundary work can be discussed together.'], ['Will all removed material be taken away?', 'Confirm the handling of cut material and other items in the agreed quote. Describe what is already in the garden when you enquire.']],
    related: ['garden-maintenance', 'turf-laying', 'patio-installation']
  },
  {
    slug: 'turf-laying', category: 'landscaping', name: 'Turf supply & laying', short: 'Turf laying',
    title: 'Turf Supply & Laying Leicestershire | County Landscapes',
    description: 'New lawn turf supplied and installed in Leicestershire. Discuss ground preparation, access and the area you want to cover. Request a free quote.',
    lead: 'Starting a lawn from scratch or replacing an area that has seen better days? County Landscapes supplies and installs turf for new lawns across Leicestershire.',
    imageAlt: 'Neat green lawn with planted borders in a landscaped garden',
    sections: [
      ['Look at the ground first', 'The finish depends on the ground beneath the turf. Tell us whether there is an existing lawn, bare soil, weeds or a recently cleared area. Mention slopes and places that stay wet so preparation can be discussed before turf is laid.'],
      ['Measure the space and access', 'Approximate length and width are useful for a first conversation. Photos from opposite ends of the garden can show the shape of the area, access route and any beds or paths that the new lawn will meet.'],
      ['Understand the complete scope', 'Ask what ground preparation, turf supply, installation and removal of existing material are included in the quote. If you are also changing a patio or boundary, explain how the new lawn should connect to it.']
    ],
    quote: ['Approximate lawn dimensions', 'Current ground condition and any old turf', 'Access for materials and removal', 'Slopes, shade or areas that stay wet'],
    faqs: [['Do you supply the turf as well as install it?', 'Yes. County Landscapes offers turf supplied and installed. Include the approximate area when you enquire.'], ['Can you turf after a garden clearance?', 'Yes. Explain what needs clearing and what you want the finished lawn to cover so the stages can be discussed together.']],
    related: ['garden-clearance', 'garden-maintenance', 'patio-installation']
  },
  {
    slug: 'patio-installation', category: 'landscaping', name: 'Patios & slabbing', short: 'Patio installation',
    title: 'Patio Installation & Slabbing Leicestershire | County Landscapes',
    description: 'Patio installation and garden slabbing across Leicestershire. Discuss your space, access and preferred finish with County Landscapes. Free quotes.',
    lead: 'A patio can make the space beside your house or at the end of the garden more useful. County Landscapes offers patios and slabbing as part of its landscaping work.',
    imageAlt: 'Landscaped garden with a paved area adjoining a lawn',
    sections: [
      ['Start with how the space will be used', 'Think about whether the area is for a table, a path, easier access or a combination. Its position, shape and connection to doors, lawn and planting are all useful details to discuss.'],
      ['Ground and levels matter', 'Existing paving, slopes and drainage can affect the work beneath the visible finish. Share photos of the area and mention any spots that hold water. Agree preparation and disposal of old materials before the job starts.'],
      ['Talk through the finish', 'If you have a paving material or appearance in mind, send an example. Approximate dimensions and a simple sketch can help begin the conversation; the final scope should specify the area and finish being quoted.']
    ],
    quote: ['Approximate dimensions and intended use', 'Existing surface and any old paving', 'Preferred paving look or material', 'Access, levels and drainage concerns'],
    faqs: [['Can you build a patio as part of a wider garden makeover?', 'Yes. Describe the lawn, planting or fencing work you also have in mind so the full project can be discussed.'], ['Do you also clean existing patios?', 'Yes. County Landscapes offers patio pressure washing if the existing surface needs cleaning rather than replacement.']],
    related: ['patio-cleaning', 'garden-clearance', 'turf-laying']
  },
  {
    slug: 'fence-installation', category: 'fencing', name: 'Fence installation & repairs', short: 'Fencing',
    title: 'Fence Installation & Repairs Leicestershire | County Landscapes',
    description: 'Garden fence installation and repairs across Leicestershire. New runs, replacement sections and existing fence repairs. Ask County Landscapes for a free quote.',
    lead: 'Whether you need a new boundary or attention to an existing fence, County Landscapes can discuss fence installation and repairs for your garden.',
    imageAlt: 'Landscaped garden enclosed by dark timber fencing',
    sections: [
      ['New fence or repair?', 'A damaged panel, loose post and full replacement are different jobs. Photograph the whole run as well as the problem area so the condition of adjacent sections can be considered.'],
      ['Choose a boundary that suits the garden', 'Tell us the privacy you need, the look you prefer and where the fence meets gates, paving or planting. Approximate length and height provide a useful starting point.'],
      ['Confirm what the quote covers', 'Ground conditions, post requirements and removal of old materials affect the work. Discuss access to both sides and whether painting or treatment should be included separately. County Landscapes also offers garden walls and brickwork.']
    ],
    quote: ['Length, height or number of panels', 'Photos of panels and existing posts', 'Access to both sides of the boundary', 'Whether old fencing should be removed'],
    faqs: [['Can I ask for a small fence repair?', 'Yes. Share photos of the damaged section and nearby posts so the condition of the fence can be discussed.'], ['Do you offer fence painting and treatment?', 'Yes. Mention the current finish, length and which sides need treatment when you request a quote.']],
    related: ['garden-clearance', 'hedge-cutting', 'patio-installation']
  },
  {
    slug: 'hedge-cutting', category: 'tree-surgery', name: 'Hedge cutting & removal', short: 'Hedge care',
    title: 'Hedge Cutting, Pruning & Removal Leicestershire | County Landscapes',
    description: 'Hedge cutting, pruning and removal for gardens across Leicestershire. Tell County Landscapes the height, length and access for a free quote.',
    lead: 'A tidy-up, a reduction or complete hedge removal each calls for a different plan. County Landscapes can discuss the right scope for the hedge and the space around it.',
    imageAlt: 'Established garden with trees, planting and neat outdoor space',
    sections: [
      ['Describe the change you want', 'Let us know whether the hedge needs routine cutting, more substantial pruning or removal. A photo of the whole length helps show its size, condition and relationship to nearby planting or boundaries.'],
      ['Explain access and neighbouring features', 'The height and length of the hedge matter, as do access to each side and nearby paths, walls or overhead obstacles. Only take photos from a safe position; there is no need to climb.'],
      ['Plan what comes after removal', 'If the hedge is going, explain whether you want to leave the space open, install fencing or use the area another way. Agree how cut material and roots will be handled as part of the quoted work.']
    ],
    quote: ['Approximate height and length', 'Which sides and top need work', 'Access and nearby features', 'Whether cutting, pruning or removal is wanted'],
    faqs: [['Can you remove a hedge as well as cut it?', 'Yes. County Landscapes offers hedge removal. Explain what you intend to put in its place and discuss roots and cut material.'], ['Can hedge cutting be part of regular maintenance?', 'Yes. Describe the hedge and other garden tasks when asking about a maintenance programme.']],
    related: ['garden-maintenance', 'fence-installation', 'tree-removal']
  },
  {
    slug: 'tree-removal', category: 'tree-surgery', name: 'Tree surgery & removal', short: 'Tree removal',
    title: 'Tree Surgery & Removal Leicestershire | County Landscapes',
    description: 'Tree lopping, surgery and removal across Leicestershire. Discuss the tree, access and surrounding structures with County Landscapes. Free quotes.',
    lead: 'If a tree has outgrown its space or needs attention, County Landscapes can discuss tree lopping and removal in the context of your property.',
    imageAlt: 'Established trees and lawn in a planted garden',
    sections: [
      ['Explain what concerns you', 'Describe the tree, its approximate size and what has prompted the enquiry. Photos of the whole tree and the area around its base can give useful context if they can be taken safely from the ground.'],
      ['Consider the space around it', 'Nearby buildings, fences, roads, cables and other planting can affect how work is approached. Mention any known restrictions or permissions; these should be checked before work is agreed.'],
      ['Agree the full job', 'Ask what will happen to cut material and whether stump grinding or root removal is needed afterwards. These are separate services and should be included explicitly in the agreed scope if you want them.']
    ],
    quote: ['Photos of the full tree from a safe place', 'Approximate size and desired outcome', 'Nearby structures and access', 'Whether the stump and cut material need handling'],
    faqs: [['Does tree removal include the stump?', 'Not automatically. County Landscapes also offers stump grinding and root removal; ask for these to be included if needed.'], ['What if the tree is close to a building?', 'Mention the position and send photos from a safe place so the surroundings can be considered before the work is discussed.']],
    related: ['stump-grinding', 'hedge-cutting', 'garden-clearance']
  },
  {
    slug: 'stump-grinding', category: 'tree-surgery', name: 'Stump grinding & root removal', short: 'Stump grinding',
    title: 'Stump Grinding & Root Removal Leicestershire | County Landscapes',
    description: 'Stump grinding and root removal across Leicestershire. Clear the way for the next use of your garden. Ask County Landscapes for a free quote.',
    lead: 'A leftover stump can get in the way of a new lawn, planting or paving. County Landscapes offers stump grinding and root removal, including after earlier tree work.',
    imageAlt: 'Established garden with trees and planted borders',
    sections: [
      ['Show the stump and its surroundings', 'A photo of the stump and a wider view help explain its size and position. Include approximate diameter, whether it is level with the ground and how equipment can reach it.'],
      ['Mention what is nearby', 'Walls, paving, planting and known underground services matter. Describe any tight access or obstacles, and tell us if the stump is part of a recent tree removal or has been there for some time.'],
      ['Explain what you want to do next', 'The intended use of the space helps define the scope. Discuss whether you need stump grinding, root removal, handling of resulting material or preparation for turfing or paving.']
    ],
    quote: ['Approximate stump diameter and photos', 'Access width and nearby obstacles', 'Known underground services', 'How you want to use the space afterwards'],
    faqs: [['Can you grind a stump left by another tree company?', 'Yes. County Landscapes offers stump grinding as a separate service. Describe the stump and access when you enquire.'], ['Is root removal included with stump grinding?', 'Discuss root removal explicitly so the quote reflects the work needed for your planned use of the area.']],
    related: ['tree-removal', 'turf-laying', 'garden-clearance']
  },
  {
    slug: 'driveway-cleaning', category: 'pressure-washing', name: 'Driveway & patio pressure washing', short: 'Outdoor pressure washing',
    title: 'Driveway & Patio Pressure Washing Leicestershire | County Landscapes',
    description: 'Pressure washing for existing driveways and patios across Leicestershire. Discuss the surface, condition and access with County Landscapes. Free quotes.',
    lead: 'Refresh an existing driveway or patio with pressure washing. Tell County Landscapes what the surface is made from and what you would like cleaned.',
    imageAlt: 'Patio paving shown before and after pressure washing',
    sections: [
      ['Start with the surface you already have', 'Driveways and patios can have different materials and conditions. Share a wide photo and a close-up of the surface, and mention any staining, loose joints or damaged areas.'],
      ['Set realistic expectations', 'Cleaning may improve the appearance of a surface, but not every stain or sign of age can be removed. The approach depends on the material and existing condition; discuss the hoped-for result before booking.'],
      ['Make access straightforward', 'Approximate area, outdoor water availability, drainage and anything that needs moving are useful details. Repairs, sealing and other treatments should be discussed separately rather than assumed to be included in a clean.']
    ],
    quote: ['Driveway or patio material and approximate area', 'Photos of the whole surface and problem marks', 'Water access and drainage', 'Loose joints, damage or nearby planting'],
    faqs: [['Do you lay concrete driveways?', 'This service is pressure washing for existing driveways and patios. For other landscaping work, describe what you need and ask County Landscapes directly.'], ['Will every mark come out?', 'Some marks are persistent. The result depends on the surface and the type of staining, so discuss specific areas before work is agreed.']],
    related: ['patio-installation', 'garden-maintenance', 'fence-installation']
  }
];

export const jobPath = job => `${job.slug}.html`;
export const jobsFor = category => jobs.filter(job => job.category === category);

const esc = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
const phone = '<a class="button button-dark" href="tel:+447526024115">Call 07526 024115</a>';
export function renderJob(job, category, image, contact) {
  const selectedContact = contact
    .replace(`<option>${esc(category.name)}</option>`, `<option selected>${esc(category.name)}</option>`)
    .replace('<input type="hidden" name="_subject"', `<input type="hidden" name="requested_service" value="${esc(job.name)}"><input type="hidden" name="_subject"`);
  const related = job.related.map(slug => jobs.find(item => item.slug === slug)).filter(Boolean);
  return `<section class="wrap lead-hero category-hero job-hero"><div><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="./">Home</a><span>/</span><a href="services.html">Services</a><span>/</span><a href="${category.slug}.html">${esc(category.name)}</a><span>/</span><span aria-current="page">${esc(job.name)}</span></nav><p class="kicker">${esc(category.name.toUpperCase())} · LEICESTERSHIRE</p><h1>${esc(job.name)} in Leicestershire</h1><p class="lead">${esc(job.lead)}</p><div class="lead-actions"><a class="button button-gold" href="#contact">Request a free quote ↗</a>${phone}</div><p class="lead-area">Share your postcode and the work you need · Free quotes</p></div><figure class="lead-photo"><img src="${image.path}" width="${image.width}" height="${image.height}" alt="${esc(job.imageAlt)}" fetchpriority="high"></figure></section><section class="section wrap job-content"><div class="job-article"><p class="kicker">ABOUT THE WORK</p>${job.sections.map(([heading,body]) => `<section><h2>${esc(heading)}</h2><p>${esc(body)}</p></section>`).join('')}<p class="job-category-link">Looking for something else? <a href="${category.slug}.html">Explore all ${esc(category.name.toLowerCase())} services ↗</a></p></div><aside class="lead-benefits job-quote-guide"><h2>What helps us quote?</h2><p>A few details make the first conversation more useful. You can still call if you are unsure.</p><ul>${job.quote.map(item => `<li>${esc(item)}</li>`).join('')}</ul><a class="button button-dark" href="#contact">Tell us about the job ↗</a></aside></section><section class="lead-band"><div class="wrap"><div><h2>Ready to talk about ${esc(job.short.toLowerCase())}?</h2><p>Ask a question or request a free quote for your Leicestershire property.</p></div><div class="lead-actions"><a class="button button-gold" href="#contact">Get a free quote ↗</a>${phone}</div></div></section><section class="section wrap faq-section job-faq"><div><p class="kicker">GOOD TO KNOW</p><h2>Common questions</h2></div><div class="faq-list">${job.faqs.map(([question,answer]) => `<details><summary>${esc(question)}</summary><p>${esc(answer)}</p></details>`).join('')}</div></section>${selectedContact}<section class="section wrap job-related"><div class="section-heading"><div><p class="kicker">MORE WAYS WE CAN HELP</p><h2>Related services</h2></div><a class="underlink" href="services.html">All services ↗</a></div><div class="job-related-grid">${related.map(item => `<a href="${jobPath(item)}"><strong>${esc(item.name)}</strong><span>Explore service ↗</span></a>`).join('')}</div></section>`;
}
