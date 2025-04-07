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
      <section id="about-section" className="w-full py-12 md:py-24 bg-dark-900">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-100">Startup House</h2>
          <p className="text-xl text-gray-300 text-center mb-8">Where Starknet Tech Meets Business Traction</p>
          <p className="text-lg text-gray-400 text-center mb-8 max-w-3xl mx-auto">
            Startup House is a selective program for MVP-stage Starknet projects, providing structured mentorship on both business 
            development and technical advancement. We bridge the gap between technical capability and commercial viability.
          </p>
          <div className="flex justify-center">
            <Button size="lg" variant="outline">
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Houses Section */}
      <section id="houses-section" className="w-full py-12 md:py-24 bg-dark-800">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-100">Upcoming Houses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {startupHouses.map((house) => (
              <div key={house.id} className="bg-dark-700 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="h-64 relative">
                  <img 
                    src={house.image} 
                    alt={`${house.location} Startup House`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-100 mb-2">{house.location}</h3>
                  <p className="text-lg text-gray-300 mb-4">{house.date}</p>
                  <Button size="sm" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" className="w-full py-12 md:py-24 bg-dark-900">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-100">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-dark-700 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-100 mb-2">{item.question}</h3>
                <p className="text-gray-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits Section */}
      <section id="benefits-section" className="w-full py-12 md:py-24 bg-dark-800">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-100">Program Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-dark-700 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-100 mb-4">Business Strategy</h3>
              <p className="text-gray-300">Develop sustainable business models and go-to-market strategies for your Starknet project</p>
            </div>
            <div className="bg-dark-700 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-100 mb-4">Technical Mentorship</h3>
              <p className="text-gray-300">Receive guidance from experienced Starknet developers to enhance your product</p>
            </div>
            <div className="bg-dark-700 rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold text-gray-100 mb-4">Network Growth</h3>
              <p className="text-gray-300">Connect with investors, potential users, and other builders in the Starknet ecosystem</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

