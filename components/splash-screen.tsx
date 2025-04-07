"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function SplashScreen() {
  const [progress, setProgress] = useState(0)
  const [matrixText, setMatrixText] = useState("")
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%"
    let interval: NodeJS.Timeout

    // Matrix text effect
    const matrixInterval = setInterval(() => {
      const randomText = Array(8)
        .fill(0)
        .map(() => characters.charAt(Math.floor(Math.random() * characters.length)))
        .join("")
      setMatrixText(randomText)
    }, 50)

    // Progress bar animation
    interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          clearInterval(matrixInterval)
          setTimeout(() => setIsComplete(true), 500) // Delay before hiding splash screen
          return 100
        }
        return prev + 1
      })
    }, 30)

    return () => {
      clearInterval(interval)
      clearInterval(matrixInterval)
    }
  }, [])

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] flex flex-col items-center justify-center bg-yc-neutral-50 transition-opacity duration-500",
        isComplete ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <div className="relative mb-8">
        <h1 className="text-5xl lg:text-6xl font-sans font-bold text-yc-orange-500">Startup House</h1>
      </div>

      {/* Loading message */}
      <div className="font-sans text-yc-neutral-700 mb-6 h-6">Initializing StarkNet Resources</div>

      {/* Progress bar container */}
      <div className="w-64 h-2 bg-yc-neutral-200 rounded-sm overflow-hidden">
        <div 
          className="h-full bg-yc-orange-500 transition-all duration-100 ease-out" 
          style={{ width: `${progress}%` }} 
        />
      </div>

      {/* Progress percentage */}
      <div className="mt-3 font-sans text-sm text-yc-neutral-600">{`${progress}%`}</div>
    </div>
  )
}

