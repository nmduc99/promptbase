import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'
import { Providers } from './providers'
import { Footer, Header } from './components'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PromptBase | Prompt Marketplace: Midjourney, Chat GPT, DALL•E, Stable ...',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <div className='bg-body-color'>
            <div className='mx-auto'>
              {children}
            </div>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}