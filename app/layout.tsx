import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Le Pourcentage Français — Où vous situez-vous ?',
  description: 'Découvrez dans quel top % des Français vous vous situez sur 6 dimensions : revenus, patrimoine, diplôme, santé, réseau, mode de vie.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={playfair.variable}>
      <body>{children}</body>
    </html>
  )
}
