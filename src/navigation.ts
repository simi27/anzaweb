import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Services',
      links: [
        {
          text: 'Car Rental',
          href: getPermalink('/services/car-rental'),
        },
        {
          text: 'Printing & Branding',
          href: getPermalink('/services/printing-branding'),
        },
        {
          text: 'ICT & Stationery',
          href: getPermalink('/services/ict-stationery'),
        },
        {
          text: 'Timber Works',
          href: getPermalink('/services/timber-works'),
        },
      ],
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [
    {
      text: 'Get a Quote',
      href: getPermalink('/contact'),
      variant: 'primary' as const,
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Car Rental', href: getPermalink('/services/car-rental') },
        { text: 'Printing & Branding', href: getPermalink('/services/printing-branding') },
        { text: 'ICT & Stationery', href: getPermalink('/services/ict-stationery') },
        { text: 'Timber Works', href: getPermalink('/services/timber-works') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Company Profile', href: '/assets/tomaracprofile.pdf' },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: 'NHC-Urafiki flats, Ubungo', href: '#' },
        { text: 'Morogoro Road, Dar es Salaam', href: '#' },
        { text: 'tomarac2024@gmail.com', href: 'mailto:tomarac2024@gmail.com' },
        { text: '+255 713 636 928', href: 'tel:+255713636928' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/255759014444' },
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:tomarac2024@gmail.com' },
    { ariaLabel: 'Phone', icon: 'tabler:phone', href: 'tel:+255713636928' },
  ],
  footNote: `
    &copy; 2026 Tomarac Company Limited. All rights reserved.
  `,
};
