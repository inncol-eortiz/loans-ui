import React from 'react';
import type { Metadata } from 'next';

// Project Imports
import './global.css';
import ProviderWrapper from '@/components/providers/ProviderWrapper';

// Metadata
export const metadata: Metadata = {
  title: 'Loans System | Dashboard',
  description: 'Loans System, el mejor software para gestión de negocios y turismo',
  authors: [{ name: 'Dream Team' }],
  category: 'Administración de negocios y turismo',
  applicationName: 'Loans System - Dashboard',
  keywords: ['xicotepec', 'puebla', 'mexico', 'turismo', 'pueblos magicos'],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/icons/maskable.png',
    apple: '/images/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Loans System - Impulsa tu negocio en los pueblos mágicos',
    description:
      'Con Loans System, podrás gestionar tu negocio o evento de manera eficiente y sencilla. ¡Descubre cómo podemos ayudarte a crecer!',
    url: 'https://pos.kornu.mx',
    type: 'website',
    images: [
      {
        url: '/images/seo/dashboard.jpg',
        width: 1200,
        height: 630,
        alt: 'Loans System - Vista general de nuestro sistema',
      },
    ],
    siteName: 'Loans System',
    locale: 'es_MX',
  },
  // TODO: Add Twitter metadata
  // twitter: {
  //   creator: '@Loans System',
  //   creatorId: 'id',
  //   card: 'summary_large_image',
  //   title: 'Loans System - Impulsa tu negocio en los pueblos mágicos',
  //   description:
  //     'Con Loans System, podrás gestionar tu negocio o evento de manera eficiente y sencilla. ¡Descubre cómo podemos ayudarte a crecer!',
  //   images: [
  //     {
  //       url: '/images/seo/dashboard.jpg',
  //       alt: 'Loans System - Vista general de nuestro sistema',
  //     },
  //   ],
  // },

  robots: 'index, follow',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): React.JSX.Element {
  return (
    <html lang="es">
      <body>
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
