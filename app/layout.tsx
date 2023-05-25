import WalletAdapter from '@/components/wallet-adapter'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Proop',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' data-theme='dracula'>
      <body className={inter.className}>
        <WalletAdapter>{children}</WalletAdapter>
      </body>
    </html>
  )
}