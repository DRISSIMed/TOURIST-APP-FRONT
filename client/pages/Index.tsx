import { useState } from "react";
import { Star, MapPin, Calendar, Users, Phone, Mail, Globe, Clock } from "lucide-react";

export default function Index() {
  const [activeTab, setActiveTab] = useState("tours");

  const tourPackages = [
    {
      title: "CITY TOUR",
      duration: "2h 30 + tours",
      price: "35€",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d0d66e?w=300&h=200&fit=crop",
      category: "Cultural"
    },
    {
      title: "ATLAS ADVENTURE", 
      duration: "1 Day + Tours",
      price: "85€",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
      category: "Adventure"
    },
    {
      title: "BEACH CRUISE",
      duration: "3h + Tours",
      price: "45€", 
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop",
      category: "Relaxation"
    },
    {
      title: "WINE TOUR",
      duration: "4h + Tours",
      price: "65€",
      image: "https://images.unsplash.com/photo-1506453831428-d8f24972c0d4?w=300&h=200&fit=crop",
      category: "Culinary"
    }
  ];

  const destinations = [
    {
      name: "CASABLANCA",
      subtitle: "Economic Capital",
      spots: "8 SPOTS",
      services: "4 SERVICES",
      price: "ONLY €199",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d0d66e?w=250&h=300&fit=crop"
    },
    {
      name: "MEKNAISSA", 
      subtitle: "Imperial City",
      spots: "6 SPOTS",
      services: "5 SERVICES", 
      price: "ONLY €179",
      image: "https://images.unsplash.com/photo-1573160103600-9b02b2b6c048?w=250&h=300&fit=crop"
    },
    {
      name: "OUARZAZATE",
      subtitle: "Gateway to Sahara",
      spots: "4 SPOTS",
      services: "3 SERVICES", 
      price: "ONLY €249",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=250&h=300&fit=crop"
    },
    {
      name: "AGADIR",
      subtitle: "Beach Paradise",
      spots: "5 SPOTS",
      services: "6 SERVICES",
      price: "ONLY €159",
      image: "https://images.unsplash.com/photo-1558618666-e0c7b5f5f0d6?w=250&h=300&fit=crop"
    }
  ];

  const faqs = [
    {
      question: "What's the best time to visit Morocco?",
      answer: "Spring (March-May) and autumn (September-November) offer the most comfortable weather for exploring Morocco's diverse landscapes."
    },
    {
      question: "Are guided tours available in English?",
      answer: "Yes, all our professional guides speak fluent English and are knowledgeable about Moroccan history and culture."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-morocco-brown">MAROC</div>
          <div className="hidden md:flex space-x-8">
            <a href="#tours" className="text-gray-700 hover:text-morocco-orange transition-colors font-medium">Tours</a>
            <a href="#destinations" className="text-gray-700 hover:text-morocco-orange transition-colors font-medium">Destinations</a>
            <a href="#about" className="text-gray-700 hover:text-morocco-orange transition-colors font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-morocco-orange transition-colors font-medium">Contact</a>
          </div>
          <button className="bg-morocco-orange text-white px-6 py-2 rounded-md hover:bg-morocco-orange-dark transition-colors font-medium">
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[700px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F645f89bc7c85487fb781d2dd27aa359b%2Ff3f9918ea8f14140adc63641aaf31b56?format=webp&width=800')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-lg">
            <h1 className="text-8xl font-black mb-6 leading-none tracking-wide">MAROC</h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Discover the authentic beauty of Morocco through our carefully curated experiences. 
              From ancient medinas to vast desert landscapes.
            </p>
            <button className="bg-morocco-orange text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-morocco-orange-dark transition-colors shadow-lg">
              Explore Adventures
            </button>
          </div>
        </div>
      </section>

      {/* Tour Packages Grid */}
      <section id="tours" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {tourPackages.map((tour, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100">
                <div 
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${tour.image})` }}
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{tour.title}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{tour.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-morocco-orange">{tour.price}</span>
                    <button className="bg-morocco-orange text-white px-4 py-2 rounded-md hover:bg-morocco-orange-dark transition-colors text-sm font-medium">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We Create Trips Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop"
                alt="Morocco Travel Experience"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
                We create the<br />trips you love
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With passionate locals. Click "Edit Tour" to customize the 
                tour and experience. This Moroccan experience has 
                reviews, so let us know if you have questions!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-morocco-orange rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Add a Title</h4>
                    <p className="text-gray-600 text-sm">Aenean tempor enim. Click "Edit Tour" to customize the tour and experience.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-morocco-orange rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Add a Title</h4>
                    <p className="text-gray-600 text-sm">Aenean tempor enim. Click "Edit Tour" to customize the tour and experience.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-morocco-orange rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Add a Title</h4>
                    <p className="text-gray-600 text-sm">Aenean tempor enim. Click "Edit Tour" to customize the tour and experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awesome Country Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
                  Awesome<br />country
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Amazing country tour for its natural side 
                  of culture and local experience and 
                  lifestyle that the Sun Do Rift.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-morocco-orange mb-2">400+</div>
                  <div className="text-gray-600 text-sm font-medium">Tours</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-morocco-orange mb-2">12K</div>
                  <div className="text-gray-600 text-sm font-medium">Happy Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-morocco-orange mb-2">2Y</div>
                  <div className="text-gray-600 text-sm font-medium">Experience</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1539650116574-75c0c6d0d66e?w=300&h=200&fit=crop"
                alt="Morocco Landscape"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop"
                alt="Morocco Desert"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Explore All Tours Section */}
      <section id="destinations" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Side - Quote */}
            <div className="lg:w-1/3 space-y-6">
              <div className="bg-morocco-orange text-white p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">EXPLORE ALL TOURS</h3>
                <p className="text-orange-100">
                  Discover Morocco's hidden gems and iconic destinations through our carefully curated tour experiences.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <blockquote className="text-gray-600 italic mb-4">
                  "Which door the you going choose?"
                </blockquote>
                <div className="w-16 h-0.5 bg-morocco-orange"></div>
              </div>
            </div>

            {/* Right Side - Destination Grid */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {destinations.map((dest, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div 
                      className="h-48 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${dest.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold">{dest.name}</h3>
                        <p className="text-sm opacity-90">{dest.subtitle}</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-3 text-sm text-gray-600">
                        <span>{dest.spots}</span>
                        <span>{dest.services}</span>
                      </div>
                      <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-morocco-orange">{dest.price}</span>
                        <button className="bg-morocco-orange text-white px-4 py-2 rounded-md hover:bg-morocco-orange-dark transition-colors text-sm font-medium">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">FAQS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">What should I pack for Morocco?</h3>
                  <p className="text-gray-600">Pack light, comfortable clothing, sunscreen, and a hat. We provide detailed packing lists with each booking confirmation.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">How far in advance should I book?</h3>
                  <p className="text-gray-600">We recommend booking at least 2-3 weeks in advance, especially during peak season (spring and autumn).</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className="bg-morocco-orange text-white px-6 py-3 rounded-md hover:bg-morocco-orange-dark transition-colors font-medium">
                View More FAQs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tailor Made Trip */}
      <section className="py-24 bg-gradient-to-r from-orange-500 to-orange-600 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=600&fit=crop')` }}
        ></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Tailor Made Trip</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Create your own unique Moroccan adventure. Custom experiences 
            tailored to your interests, budget, and schedule.
          </p>
          <button className="bg-white text-morocco-orange px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">MAROC</h3>
              <p className="text-gray-400 leading-relaxed">
                Authentic Moroccan experiences crafted with passion and local expertise.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-morocco-orange rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-morocco-orange rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-morocco-orange rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">i</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-400">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-morocco-orange" />
                  <span>+212 123 456 789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-morocco-orange" />
                  <span>hello@maroctravel.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-morocco-orange" />
                  <span>Marrakech, Morocco</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Subscribe for travel tips and exclusive offers
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-md text-gray-800 focus:outline-none"
                />
                <button className="bg-morocco-orange px-4 py-2 rounded-r-md hover:bg-morocco-orange-dark transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Maroc Travel. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
