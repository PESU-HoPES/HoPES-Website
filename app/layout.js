import './globals.css'
import { Inter, Montserrat } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({subsets: ['latin']})

export const metadata = {
  title: 'HoPES Official Website',
  description: 'HoPES website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-background text-white`}>{children}</body>
    </html>
  )
}
