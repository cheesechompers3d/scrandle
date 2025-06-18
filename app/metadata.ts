import { defaultConfig } from "@/lib/config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: defaultConfig.seo.title,
  description: defaultConfig.seo.description,
  keywords: defaultConfig.seo.keywords,
  openGraph: {
    title: defaultConfig.seo.title,
    description: defaultConfig.seo.description,
    url: defaultConfig.siteInfo.siteUrl,
    siteName: defaultConfig.siteName,
    images: [
      {
        url: defaultConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: defaultConfig.siteName,
      }
    ],
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
} 