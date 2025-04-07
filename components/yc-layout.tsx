"use client"

import React from 'react'

interface YCLayoutProps {
  children: React.ReactNode
}

export function YCLayout({ children }: YCLayoutProps) {
  return (
    <div className="yc-body min-h-screen">
      {/* Header similar to YC style */}
      <header className="border-b border-yc-neutral-200">
        <div className="yc-container flex items-center justify-between py-3">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-yc-orange-500 flex items-center justify-center text-white font-bold">
              Y
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-yc-neutral-800 hover:text-yc-orange-500 text-sm font-medium">About</a>
              <a href="#" className="text-yc-neutral-800 hover:text-yc-orange-500 text-sm font-medium">Companies</a>
              <a href="#" className="text-yc-neutral-800 hover:text-yc-orange-500 text-sm font-medium">Startup Jobs</a>
              <a href="#" className="text-yc-neutral-800 hover:text-yc-orange-500 text-sm font-medium">Resources</a>
            </nav>
          </div>
          <div>
            <a href="#" className="text-yc-neutral-800 text-sm font-medium">
              Apply for <span className="font-bold">S2025</span> batch
            </a>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="yc-container py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-yc-neutral-200 py-6 mt-12">
        <div className="yc-container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-yc-neutral-500">
              © 2023 Starknet Startup House
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-yc-neutral-500 hover:text-yc-orange-500">Privacy</a>
              <a href="#" className="text-sm text-yc-neutral-500 hover:text-yc-orange-500">Terms</a>
              <a href="#" className="text-sm text-yc-neutral-500 hover:text-yc-orange-500">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 