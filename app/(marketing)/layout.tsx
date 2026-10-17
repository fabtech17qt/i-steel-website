import React from 'react'
import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { ChatWidget } from '@/components/chat/ChatWidget'
import { Preloader } from '@/components/ui/Preloader'
import { ScrollProgress } from '@/components/motion/ScrollProgress'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Header />
      <main>{children}</main>
      <Footer />
      <ChatWidget />
    </>
  )
}
