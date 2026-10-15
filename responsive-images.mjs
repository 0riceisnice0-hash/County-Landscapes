const escapeAttribute = value => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');

export const imageSizes = '(max-width: 390px) calc(100vw - 32px), (max-width: 680px) calc(100vw - 40px), (max-width: 1200px) 46vw, 580px';
export const imageVariants = (path, format = 'webp') => {
  const stem = path.replace(/\.[^.]+$/, '');
  const maxWidth = path.includes('garden-trees') ? 805 : path.includes('patio-cleaning') ? 1320 : 1600;
  const widths = [...new Set([360,480,640,720,800,960,1200,1600].map(width => Math.min(width,maxWidth)))];
  return widths.map(width => ({ path: `${stem}-${width}.${format}`, width }));
};

export const imageSourceSet = (path, format = 'webp') => imageVariants(path, format).map(image => `${image.path} ${image.width}w`).join(', ');

export const responsiveImage = (image, eager = false, sizes = imageSizes) => {
  const { path, width, height, alt } = image;
  return `<picture><source type="image/avif" srcset="${imageSourceSet(path,'avif')}" sizes="${sizes}"><source type="image/webp" srcset="${imageSourceSet(path)}" sizes="${sizes}"><img src="${path}" width="${width}" height="${height}" alt="${escapeAttribute(alt)}" decoding="async" ${eager ? 'fetchpriority="high" loading="eager"' : 'loading="lazy"'}></picture>`;
};
