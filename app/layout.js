import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from './components/contextApi/context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pizza House',
  description: 'Best Pizza On the Planet',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
