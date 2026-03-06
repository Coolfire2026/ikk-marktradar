import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IKK MarktRadar – Wettbewerbsmonitor',
  description: 'Beobachtung von Wettbewerbern im Krankenkassenmarkt',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>
        {children}
      </body>
    </html>
  )
}
