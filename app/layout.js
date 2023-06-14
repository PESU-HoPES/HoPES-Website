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
      {/* <nav className='fixed top-0 bg-orange-400 '> */}
      {/* </nav> */}

      <Navbar />
      <div className='mt-24'>
      {children}
      </div>
      </body>
    </html>
  )
}
