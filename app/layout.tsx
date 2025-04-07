import "./globals.css"
import type { Metadata } from "next"
import type React from "react"
import { SplashScreen } from "@/components/splash-screen"
import { Logo } from "@/components/logo"

export const metadata: Metadata = {
  title: "Startup House - Starknet Tech Meets Business Traction",
  description: "A selective 3-5 day intensive program exclusively for MVP-stage Starknet projects, providing structured mentorship on both business development and technical advancement.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="yc-body">
        <SplashScreen />
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none">
          <Logo />
        </div>
        {children}
        <footer className="w-full py-6 px-4 bg-yc-neutral-100 text-yc-neutral-600">
          <div className="container mx-auto text-center">
            <p>&copy; 2025 Startup House. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}



import './globals.css'