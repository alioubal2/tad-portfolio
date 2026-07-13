import './globals.css';

const SITE_URL = 'https://tad-portfolio.vercel.app';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Abdourahmane Diallo — Directeur Artistique & Designer Graphique',
    template: '%s — Abdourahmane Diallo',
  },
  description:
    'Portfolio de Abdourahmane Diallo, directeur artistique et designer graphique spécialisé en logo, branding et identité visuelle. Basé à Conakry, Guinée.',
  keywords: [
    'designer graphique',
    'directeur artistique',
    'logo design',
    'branding',
    'identité visuelle',
    'Conakry',
    'Guinée',
    'Abdourahmane Diallo',
  ],
  authors: [{ name: 'Abdourahmane Diallo' }],
  creator: 'Abdourahmane Diallo',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    siteName: 'Abdourahmane Diallo — Designer Graphique',
    title: 'Abdourahmane Diallo — Directeur Artistique & Designer Graphique',
    description:
      'Logo, branding et identité visuelle. Je transforme les visions en expériences visuelles percutantes.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdourahmane Diallo — Designer Graphique',
    description:
      'Logo, branding et identité visuelle. Portfolio créatif basé à Conakry.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: '#0b0c0e',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
