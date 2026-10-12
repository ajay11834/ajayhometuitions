export const siteConfig = {
  name: 'Ajay Home Tuitions',
  tagline: 'Learn with clarity. Grow with confidence.',
  url: 'https://ajayhometuitions.com',
  phone: '8179018272',
  whatsapp: '8179018272',
  whatsappIntl: '918179018272',
  email: 'ajayhometuitions30@gmail.com',
  address:
    'Flat Number 301, Sharada Nagar, Sai Nagar, Shanti Nagar, Vanasthalipuram, Hyderabad, Telangana 500070',
  addressLines: [
    'Flat Number 301, Sharada Nagar,',
    'Sai Nagar, Shanti Nagar,',
    'Vanasthalipuram,',
    'Hyderabad, Telangana 500070',
  ],
  shortLocation: 'Vanasthalipuram, Hyderabad',
  mapLocation: '8HFQ+W4 Hyderabad, Telangana',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=8HFQ%2BW4%20Hyderabad%2C%20Telangana',
  mapEmbedUrl:
    'https://www.google.com/maps?q=8HFQ%2BW4%20Hyderabad%2C%20Telangana&output=embed',
  logo: '/ajay-home-tuitions-logo.png',
} as const

export const telHref = `tel:${siteConfig.phone}`

export function whatsappHref(
  message = 'Hello Ajay Home Tuitions, I would like to explore suitable academic support for my child.',
) {
  return `https://wa.me/${siteConfig.whatsappIntl}?text=${encodeURIComponent(message)}`
}

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Why Choose Us', href: '/why-choose-us' },
  { label: 'Services', href: '/services' },
  { label: 'Service Zones', href: '/services-zones' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
] as const
