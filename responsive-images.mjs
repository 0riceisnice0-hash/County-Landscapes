const escapeAttribute = value => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');

export const imageVariants = path => {
  const stem = path.replace(/\.[^.]+$/, '');
  const widths = path.includes('garden-trees') ? [640, 805] : path.includes('patio-cleaning') ? [640, 960, 1320] : [640, 960, 1600];
  return widths.map(width => ({ path: `${stem}-${width}.webp`, width }));
};

export const imageSourceSet = path => imageVariants(path).map(image => `${image.path} ${image.width}w`).join(', ');

export const responsiveImage = (image, eager = false, sizes = '(max-width: 680px) 100vw, (max-width: 1200px) 46vw, 580px') => {
  const { path, width, height, alt } = image;
  return `<picture><source type="image/webp" srcset="${imageSourceSet(path)}" sizes="${sizes}"><img src="${path}" width="${width}" height="${height}" alt="${escapeAttribute(alt)}" decoding="async" ${eager ? 'fetchpriority="high" loading="eager"' : 'loading="lazy"'}></picture>`;
};
