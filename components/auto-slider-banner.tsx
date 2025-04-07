"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const images = [
  "https://64.media.tumblr.com/db8472cfbb89a155148003b053d5f3de/4d6d987e0cee7307-8e/s400x225/158142e8e876044a6191733a02f6ee5ac1643b58.gif",
  "https://i.pinimg.com/originals/14/f4/35/14f435eaaf8d107cca5055ce150eaf47.gif",
]

export function AutoSliderBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const handleLearnMoreClick = () => {
    const aboutSection = document.getElementById("about-section")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={`Banner ${index + 1}`}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex flex-col items-center justify-center">
        <div className="max-w-4xl px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white text-center mb-6">
            Startup House
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-100 text-center mb-10">Where Starknet Tech Meets Business Traction</p>
          <div className="flex justify-center">
            <button onClick={handleLearnMoreClick} className="yc-button text-lg px-8 py-4 shadow-md hover:shadow-lg transition-all">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

