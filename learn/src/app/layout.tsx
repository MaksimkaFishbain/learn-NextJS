import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/clientComponets/Providers";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FakeStore',
  description: 'FakeStore root page',
}




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Providers>
          <Header/>
          <main className="flex min-h-screen flex-col items-center justify-between p-16">{children}</main>
          <Footer/>
        </Providers>
      </body>
    </html>
  )
}
