// Towns and nearby settlements are geographic references, not claims of completed projects.
// County's stated service area is Leicestershire; postcode and job availability are confirmed on enquiry.
// Settlement groupings checked against Leicestershire County Council and Visit Leicester.
import { jobs } from './job-pages.mjs';

export const towns = [
  {
    slug: 'leicester', name: 'Leicester', nearby: ['Braunstone', 'Birstall', 'Thurmaston'], category: 'landscaping',
    lead: 'From a lawn that needs regular attention to a complete change outside, County Landscapes takes landscaping and garden-care enquiries from Leicester.',
    work: 'A city garden can have limited side access, shared boundaries and several jobs competing for the same space. When you get in touch, explain the access route and whether you want a practical refresh, ongoing care or a bigger makeover.',
    planning: 'If you are combining clearance, turfing, fencing and paving, describe the full sequence you have in mind. That helps the team discuss the preparation, materials and finished areas together instead of treating each job in isolation.',
    tip: 'Mention a narrow side passage, steps or a route through the house at the start.', focus: ['garden-maintenance', 'fence-installation', 'patio-installation', 'garden-clearance']
  },
  {
    slug: 'loughborough', name: 'Loughborough', nearby: ['Shepshed', 'Quorn', 'Barrow upon Soar'], category: 'landscaping',
    lead: 'County Landscapes can help with garden maintenance, new turf and outdoor improvements for Loughborough homes and commercial properties.',
    work: 'If the grass is becoming hard to keep on top of, start with its approximate size and current condition. County offers one-off mowing and regular maintenance programmes, so you can ask about the arrangement that suits the property.',
    planning: 'For a new lawn, share photos of the ground before choosing turf. Existing grass, weeds, shade, slopes and areas that remain wet all matter to the preparation and the scope of a turf-supply-and-laying quote.',
    tip: 'Include the lawn size and whether you want one visit or recurring help.', focus: ['garden-maintenance', 'turf-laying', 'hedge-cutting', 'driveway-cleaning']
  },
  {
    slug: 'hinckley', name: 'Hinckley', nearby: ['Earl Shilton', 'Burbage', 'Stoney Stanton'], category: 'fencing',
    lead: 'Need a fence repaired, an overgrown garden cleared or a new outside area planned in Hinckley? Tell County Landscapes what needs doing.',
    work: 'A boundary enquiry is easier to price when it includes the full fence run, not just a close-up of one damaged panel. Show the posts, approximate length and height, and the access available on both sides.',
    planning: 'If clearance comes before new fencing or a patio, say which plants and features should remain. Discuss removal of old material and the condition you want the space left in for the next stage.',
    tip: 'Send one wide photo of the boundary and one showing the damaged section.', focus: ['fence-installation', 'garden-clearance', 'patio-installation', 'hedge-cutting']
  },
  {
    slug: 'market-harborough', name: 'Market Harborough', nearby: ['Kibworth', 'Lubenham', 'Foxton'], category: 'pressure-washing',
    lead: 'County Landscapes takes enquiries for garden work and pressure washing in Market Harborough and nearby south Leicestershire areas.',
    work: 'If an existing driveway or patio looks tired, describe its material and condition before asking about cleaning. Pressure washing can improve an existing surface; County does not list concrete driveway installation as a service.',
    planning: 'For a new patio or lawn, explain how you want to use the space and what is already there. Approximate measurements, drainage concerns and access details help the team discuss a useful scope for the work.',
    tip: 'For cleaning, include a close-up of the surface and any specific staining.', focus: ['driveway-cleaning', 'patio-installation', 'turf-laying', 'garden-maintenance']
  },
  {
    slug: 'melton-mowbray', name: 'Melton Mowbray', nearby: ['Asfordby', 'Scalford', 'Harby'], category: 'tree-surgery',
    lead: 'From trees and hedges to lawn care and garden maintenance, County Landscapes can discuss work at Melton Mowbray properties.',
    work: 'For tree work, photograph the whole tree from a safe position and explain what has prompted the enquiry. Mention nearby buildings, fences, cables or access limits, and ask separately about stump grinding if the tree is to be removed.',
    planning: 'Hedge cutting and removal have different scopes. Tell us the approximate height and length, whether both sides can be reached and how you want the space used afterwards.',
    tip: 'Tree and hedge photos are most helpful when they show surrounding structures too.', focus: ['tree-removal', 'stump-grinding', 'hedge-cutting', 'garden-maintenance']
  },
  {
    slug: 'coalville', name: 'Coalville', nearby: ['Ibstock', 'Ravenstone', 'Ellistown'], category: 'fencing',
    lead: 'County Landscapes offers fence, garden and tree-care services for enquiries from Coalville and the surrounding Leicestershire area.',
    work: 'A fence that has failed in one place may need a different approach from a whole boundary replacement. Explain the current condition and whether painting or treatment is also on your list.',
    planning: 'If a tree or hedge is changing the layout of the garden, describe the complete plan. Tree removal, stump grinding, clearance and new fencing can be discussed as separate parts of the same project.',
    tip: 'Say if old fencing or cut material needs removing as part of the quote.', focus: ['fence-installation', 'tree-removal', 'stump-grinding', 'garden-clearance']
  },
  {
    slug: 'ashby-de-la-zouch', name: 'Ashby-de-la-Zouch', nearby: ['Measham', 'Coalville', 'Ibstock'], category: 'landscaping',
    lead: 'Ask County Landscapes about a patio, new turf, hedge care or cleaning an existing outdoor surface in Ashby-de-la-Zouch.',
    work: 'A useful patio enquiry starts with how the area will be used. Share its approximate dimensions, the current surface, the paving look you prefer and any places where water tends to collect.',
    planning: 'If the paving is sound but needs attention, patio pressure washing may be the relevant service. Send a wide photo and a close-up so the existing material and any staining can be discussed before a clean is agreed.',
    tip: 'Explain whether you want new paving or cleaning for the surface already there.', focus: ['patio-installation', 'driveway-cleaning', 'turf-laying', 'hedge-cutting']
  },
  {
    slug: 'lutterworth', name: 'Lutterworth', nearby: ['Broughton Astley', 'Gilmorton', 'South Kilworth'], category: 'landscaping',
    lead: 'For a one-off garden clearance or a regular care programme around Lutterworth, County Landscapes can discuss the work you need.',
    work: 'If the garden has become overgrown, start by identifying what should stay. Photos from opposite ends help show the full area, while notes about access and removal of cut material help define the clearance.',
    planning: 'Regular mowing and maintenance can be agreed around the jobs that matter to you. Describe the lawn, hedges and other areas you want kept in hand, plus your preferred visit pattern.',
    tip: 'List anything you want to keep before describing what needs clearing.', focus: ['garden-clearance', 'garden-maintenance', 'hedge-cutting', 'turf-laying']
  },
  {
    slug: 'oadby', name: 'Oadby', nearby: ['Great Glen', 'Wigston', 'Fleckney'], category: 'landscaping',
    lead: 'County Landscapes takes Oadby enquiries for lawns, hedges, patios and wider garden improvements.',
    work: 'A new lawn and a new patio need to fit together in the finished garden. Tell us where you want the seating area, how much lawn to retain and whether existing paving or planting must be removed.',
    planning: 'If a hedge borders the proposed work, say whether it needs cutting, reducing or removing. The choice affects the space available and what happens to roots and cut material.',
    tip: 'A simple sketch showing lawn, paving and boundaries is enough to start.', focus: ['turf-laying', 'patio-installation', 'hedge-cutting', 'garden-maintenance']
  },
  {
    slug: 'wigston', name: 'Wigston', nearby: ['Oadby', 'Blaby', 'Great Glen'], category: 'fencing',
    lead: 'Need fencing, garden clearance or ongoing maintenance at a Wigston property? County Landscapes can talk through the work.',
    work: 'For fencing, the whole run matters: panel count, post condition, changes in level and access on both sides. Tell us if you also want the existing fence painted or treated rather than replaced.',
    planning: 'A garden clearance can make room for a new boundary or lawn. Explain the area to clear, what remains and whether you want the follow-on work included in the same enquiry.',
    tip: 'Include a full-length boundary photo along with any close-ups of damage.', focus: ['fence-installation', 'garden-clearance', 'garden-maintenance', 'turf-laying']
  },
  {
    slug: 'blaby', name: 'Blaby', nearby: ['Narborough', 'Countesthorpe', 'Whetstone'], category: 'landscaping',
    lead: 'County Landscapes can discuss patios, turfing, fencing and garden care for properties in and around Blaby.',
    work: 'If the goal is a more usable garden, begin with the problem you want solved: somewhere to sit, a fresh lawn, clearer access or a boundary that needs attention. You do not need a finished design to ask for a quote.',
    planning: 'Mention steps, slopes and drainage before deciding on a patio or new turf. Explain which existing materials should be removed and what must remain, so preparation is included in the conversation.',
    tip: 'Share the approximate area and photos from more than one angle.', focus: ['patio-installation', 'turf-laying', 'fence-installation', 'garden-maintenance']
  },
  {
    slug: 'shepshed', name: 'Shepshed', nearby: ['Loughborough', 'Kegworth', 'Quorn'], category: 'tree-surgery',
    lead: 'For tree work, hedge care and garden maintenance around Shepshed, ask County Landscapes about the job at your property.',
    work: 'If you are concerned about a tree, explain the problem rather than assuming it must be removed. Its size, position and surroundings all matter. Take photos only from somewhere safe and mention any known restrictions.',
    planning: 'A stump from earlier work can be a separate job. Tell us its approximate diameter, access and what you want to do with the area afterwards, whether that is turf, paving or planting.',
    tip: 'Show the whole tree or stump and the nearby structures in your photos.', focus: ['tree-removal', 'stump-grinding', 'hedge-cutting', 'garden-maintenance']
  }
];

export const townPath = town => `landscaper-${town.slug}.html`;
const esc = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');

export function renderTownsList() {
  return `<div class="town-grid">${towns.map(town => `<a href="${townPath(town)}"><strong>${esc(town.name)}</strong><span>Landscaping &amp; garden care ↗</span></a>`).join('')}</div>`;
}

export function renderTown(town, image, contact) {
  const focus = town.focus.map(slug => jobs.find(job => job.slug === slug));
  const localContact = contact.replace('<input type="hidden" name="_subject"', `<input type="hidden" name="enquiry_area" value="${esc(town.name)}"><input type="hidden" name="_subject"`);
  return `<section class="wrap lead-hero category-hero town-hero"><div><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="./">Home</a><span>/</span><a href="areas.html">Areas we cover</a><span>/</span><span aria-current="page">${esc(town.name)}</span></nav><p class="kicker">LEICESTERSHIRE SERVICE AREA</p><h1>Landscaper in ${esc(town.name)}</h1><p class="lead">${esc(town.lead)}</p><div class="lead-actions"><a class="button button-gold" href="#contact">Ask for a free quote ↗</a><a class="button button-dark" href="tel:+447526024115">Call 07526 024115</a></div><p class="lead-area">Share your postcode so the job and availability can be confirmed.</p></div><figure class="lead-photo"><img src="${image.path}" width="${image.width}" height="${image.height}" alt="${esc(image.alt)}" fetchpriority="high"></figure></section><section class="section wrap town-detail"><div><p class="kicker">WORK IN ${esc(town.name.toUpperCase())}</p><h2>Tell us what your outside space needs.</h2><p>${esc(town.work)}</p><p>${esc(town.planning)}</p><a class="button button-dark" href="#contact">Discuss your project ↗</a></div><aside class="lead-benefits"><h3>Helpful for a first quote</h3><p>${esc(town.tip)}</p><ul><li>Your ${esc(town.name)} postcode and best contact number</li><li>Photos and approximate dimensions</li><li>Access and the work you want included</li><li>Your preferred timing</li></ul></aside></section><section class="section wrap town-jobs"><div class="section-heading"><div><p class="kicker">JOBS WE CAN DISCUSS</p><h2>Services in ${esc(town.name)}</h2></div><p>Choose a service for details, or tell us about several jobs in the same enquiry.</p></div><div class="job-link-grid">${focus.map(job => `<a href="${job.slug}.html"><strong>${esc(job.name)}</strong><span>Service details ↗</span></a>`).join('')}</div><a class="underlink" href="services.html">See all services ↗</a></section><section class="lead-band"><div class="wrap"><div><h2>Is your property near ${esc(town.name)}?</h2><p>We also welcome enquiries from ${town.nearby.map(esc).join(', ')} and nearby Leicestershire areas. Send the postcode to confirm coverage.</p></div><div class="lead-actions"><a class="button button-gold" href="#contact">Check your postcode ↗</a><a class="button button-dark" href="tel:+447526024115">Call 07526 024115</a></div></div></section>${localContact}<section class="section wrap town-related"><div class="section-heading"><h2>Explore more areas</h2><a class="underlink" href="areas.html">All areas ↗</a></div>${renderTownsList()}</section>`;
}
