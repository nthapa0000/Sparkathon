import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Topbar from '@/components/shared/Topbar'

import "../globals.css"
import LeftSidebar from '@/components/shared/Leftbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata:Metadata = {
  title:'WalmartUnity',
  description:'A Next.js 13 Meta Threads Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
      <Topbar/>
      <main>
        <LeftSidebar/>
      <section className='main-container'>
            <div className='w-full max-w-4xl '>
              {children}
            </div>
      </section>
      </main>
      </body>
    </html>
    </ClerkProvider>
  )
}
