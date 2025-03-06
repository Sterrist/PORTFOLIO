import { Unbounded } from 'next/font/google'
import './globals.css'

const unbounded = Unbounded({ 
  subsets: ['latin'],
})

export const metadata = {
  title: 'STERRIST — ' + ['CODING?', 'DEVELOPMENT?', 'GAMES?', 'SCAM?', 'BUSINESS?', 'MAKE MONEY?', 'MAKE LIFE EASY?'][Math.floor(Math.random() * 7)],
  description: 'Разработчик который разрабатывает :)'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={unbounded.className}>
        {children}
      </body>
    </html>
  )
}
