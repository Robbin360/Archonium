export function siteMeta(){
  return {
    title: 'Archonium | Intelligence & Validation for Elite Systems',
    description: 'Archonium crystallizes outcomes for elite organizations. Exclusive validation, governance, and inevitable advantage.',
    canonical: 'https://archonium.global/',
    ogImage: '/assets/og-image.png'
  };
}

export function organizationJSONLD(){
  return {
    "@context":"https://schema.org",
    "@type":"Organization",
    "name":"Archonium",
    "url":"https://archonium.global/",
    "logo":"https://archonium.global/assets/og-image.png",
    "contactPoint":[{"@type":"ContactPoint","email":"counsel@archonium.global","contactType":"sales"}]
  };
}
