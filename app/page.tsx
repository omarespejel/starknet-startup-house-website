import { AutoSliderBanner } from "@/components/auto-slider-banner"
import { Button } from "@/components/ui/button"

export default function Home() {
  const startupHouses = [
    {
      id: 1,
      location: "Monterrey",
      date: "June 2025",
      image: "https://i.pinimg.com/736x/92/06/56/920656e03f09691d871e149b5dad8f7f.jpg",
    },
    {
      id: 2,
      location: "Cannes",
      date: "June 2025",
      image: "https://i.pinimg.com/736x/94/d3/14/94d31436dfc73fcf93058089f69ffd96.jpg",
    },
  ]

  const faqItems = [
    {
      question: "What is Startup House?",
      answer: "Startup House is a selective 3-5 day intensive program exclusively for MVP-stage Starknet projects, providing structured mentorship on both business development and technical advancement."
    },
    {
      question: "Who can apply?",
      answer: "Small teams (1-3) with at least 1 technical developer, with a working product on Starknet (live for at least 1 month). We focus on technical founders who lack business development experience."
    },
    {
      question: "What does the program provide?",
      answer: "The program bridges the gap between technical capability and commercial viability by supporting teams to enhance their product technically while developing business strategies, user acquisition plans, and revenue models."
    },
    {
      question: "How long is the program?",
      answer: "The program runs for 3-5 intensive days, focused on transforming your Starknet project into a sustainable business."
    },
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Full-screen Auto-sliding Banner */}
      <AutoSliderBanner />

      {/* About Section */}
      <section id="about-section" className="w-full py-12 md:py-24 bg-white">
        <div className="yc-container">
          <h2 className="mb-8 text-3xl font-bold text-center text-yc-neutral-900">Startup House</h2>
          <p className="text-xl text-yc-neutral-700 text-center mb-8">Where Starknet Tech Meets Business Traction</p>
          <p className="text-lg text-yc-neutral-600 text-center mb-8 max-w-3xl mx-auto">
            Startup House is a selective program for MVP-stage Starknet projects, providing structured mentorship on both business 
            development and technical advancement. We bridge the gap between technical capability and commercial viability.
          </p>
          <div className="flex justify-center">
            <button className="yc-button text-lg px-6 py-3">
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Houses Section */}
      <section id="houses-section" className="w-full py-12 md:py-24 bg-yc-neutral-50">
        <div className="yc-container">
          <h2 className="mb-8 text-3xl font-bold text-center text-yc-neutral-900">Upcoming Houses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {startupHouses.map((house) => (
              <div key={house.id} className="yc-card overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="h-64 relative">
                  <img 
                    src={house.image} 
                    alt={`${house.location} Startup House`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-yc-neutral-900 mb-2">{house.location}</h3>
                  <p className="text-lg text-yc-neutral-700 mb-4">{house.date}</p>
                  <button className="yc-button">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" className="w-full py-12 md:py-24 bg-white">
        <div className="yc-container">
          <h2 className="mb-8 text-3xl font-bold text-center text-yc-neutral-900">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="yc-card p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                <h3 className="text-xl font-bold text-yc-neutral-900 mb-2">{item.question}</h3>
                <p className="text-yc-neutral-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits Section */}
      <section id="benefits-section" className="w-full py-12 md:py-24 bg-yc-neutral-50">
        <div className="yc-container">
          <h2 className="mb-8 text-3xl font-bold text-center text-yc-neutral-900">Program Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="yc-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yc-neutral-100 flex items-center justify-center">
                <span className="text-yc-orange-500 text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-bold text-yc-neutral-900 mb-4">Business Strategy</h3>
              <p className="text-yc-neutral-700">Develop sustainable business models and go-to-market strategies for your Starknet project</p>
            </div>
            <div className="yc-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yc-neutral-100 flex items-center justify-center">
                <span className="text-yc-orange-500 text-2xl">👨‍💻</span>
              </div>
              <h3 className="text-xl font-bold text-yc-neutral-900 mb-4">Technical Mentorship</h3>
              <p className="text-yc-neutral-700">Receive guidance from experienced Starknet developers to enhance your product</p>
            </div>
            <div className="yc-card p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yc-neutral-100 flex items-center justify-center">
                <span className="text-yc-orange-500 text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-bold text-yc-neutral-900 mb-4">Network Growth</h3>
              <p className="text-yc-neutral-700">Connect with investors, potential users, and other builders in the Starknet ecosystem</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

