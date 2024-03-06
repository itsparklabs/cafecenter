import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/Components/Header/Navbar'
import Footer from '@/Components/Footer/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chai GPT - Your Daily Dose of Chai & Coffee Happiness',
description: 'Start your day right or unwind after a long day with a dose of happiness at Chai GPT. We offer delicious chai and coffee to fuel your day and bring a smile to your face.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
       
        </body>
        
    </html>
  )
}
