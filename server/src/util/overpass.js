export const buildOverpassQuery = (lat, lon, radius, type) => {
  let queryParts = [];

  if (type === 'supermarket' || type === 'all') {
    queryParts.push(`node["shop"="supermarket"](around:${radius},${lat},${lon});`);
    queryParts.push(`way["shop"="supermarket"](around:${radius},${lat},${lon});`);
  }

  return `
    [out:json][timeout:25];
    (
      ${queryParts.join('\n')}
    );
    out center;
  `;
}