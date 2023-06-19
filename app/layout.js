import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import './globals.css'
import { Montserrat } from 'next/font/google'
import {Analytics} from '@vercel/analytics/react'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'HoPES Official Website',
  description: 'HoPES website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-background text-white`}>
        <Cursor />

        <nav className='navbar z-50 fixed top-0 border-b border-b-primary-700 w-full h-[88px] bg-background '>
          <Navbar />
        </nav>
        <div className='mt-28 sm:mx-4 md:mx-6'>
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  )
}
