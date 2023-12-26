import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Launch Page',
  description: 'Build io launch page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
