import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import './globals.css'
import { Montserrat } from 'next/font/google'


const montserrat = Montserrat({subsets: ['latin']})

export const metadata = {
  title: 'HoPES Official Website',
  description: 'HoPES website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-background text-white`}>
      <Cursor />
      <Navbar />
      <div className='mt-20'>
      {children}
      </div>
      </body>
    </html>
  )
}
