import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Arnab Nandi - Portfolio',
  description: 'I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Next, Flutter, Redux, Node.js, Express, MySQL, MongoDB, Firebase, HTML, CSS, and Git. I am a...',
  author: 'Arnab Nandi',
  openGraph: {
    images: ['/https://portfolio-arnab7070.vercel.app/_next/image?url=%2Fimages%2Fhero-image.png&w=750&q=75'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
