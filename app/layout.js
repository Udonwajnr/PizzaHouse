import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from './components/contextApi/context'
import dynamic from 'next/dynamic'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pizza House',
  description: 'Best Pizza On the Planet',
}

// const AuthProvider=dynamic(()=>import('./components/Amenities'),{
//   ssr:false
// })
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
