import type { Metadata } from 'next'
import './globals.css'
import content from '../../content.json'

export const metadata: Metadata = {
  title: content.site.title,
  description: content.site.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr">
      <body>{children}</body>
    </html>
  )
}
