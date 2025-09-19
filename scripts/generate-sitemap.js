const fs = require('fs');
const pages = ['/', '/about', '/dossier', '/insights', '/legal'];
const urls = pages.map(p => `https://archonium.global${p}` );
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u=>`   <url><loc>${u}</loc></url>`).join('\n')}\n</urlset>` ;
fs.mkdirSync('public', { recursive: true });
fs.writeFileSync('public/sitemap.xml', xml);
console.log('sitemap written to public/sitemap.xml');
