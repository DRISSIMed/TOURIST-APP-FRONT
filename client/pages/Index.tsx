import { useState } from "react";
import { Star, MapPin, Calendar, Users, Phone, Mail, Globe } from "lucide-react";

export default function Index() {
  const [activeTab, setActiveTab] = useState("tours");

  const tourPackages = [
    {
      title: "CITY TOUR",
      duration: "2h 30m",
      price: "35€",
      image: "/api/placeholder/300/200",
      category: "Cultural"
    },
    {
      title: "ATLAS ADVENTURE", 
      duration: "1 Day",
      price: "85€",
      image: "/api/placeholder/300/200",
      category: "Adventure"
    },
    {
      title: "BEACH CRUISE",
      duration: "3h",
      price: "45€", 
      image: "/api/placeholder/300/200",
      category: "Relaxation"
    },
    {
      title: "WINE TOUR",
      duration: "4h",
      price: "65€",
      image: "/api/placeholder/300/200",
      category: "Culinary"
    }
  ];

  const destinations = [
    {
      name: "CASABLANCA",
      subtitle: "Economic Capital",
      spots: "8 SPOTS",
      price: "ONLY €199",
      image: "/api/placeholder/250/300"
    },
    {
      name: "MEKNAISSA", 
      subtitle: "Imperial City",
      spots: "6 SPOTS",
      price: "ONLY €179",
      image: "/api/placeholder/250/300"
    },
    {
      name: "OUARZAZATE",
      subtitle: "Gateway to Sahara",
      spots: "4 SPOTS", 
      price: "ONLY €249",
      image: "/api/placeholder/250/300"
    },
    {
      name: "AGADIR",
      subtitle: "Beach Paradise",
      spots: "5 SPOTS",
      price: "ONLY €159",
      image: "/api/placeholder/250/300"
    }
  ];

  const faqs = [
    {
      question: "What's included in the tour packages?",
      answer: "All our packages include professional guides, transportation, entrance fees, and traditional lunch."
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 2-3 days in advance, especially during peak season."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-morocco-brown">MAROC</div>
          <div className="hidden md:flex space-x-8">
            <a href="#tours" className="text-gray-700 hover:text-morocco-orange transition-colors">Tours</a>
            <a href="#destinations" className="text-gray-700 hover:text-morocco-orange transition-colors">Destinations</a>
            <a href="#about" className="text-gray-700 hover:text-morocco-orange transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-morocco-orange transition-colors">Contact</a>
          </div>
          <button className="bg-morocco-orange text-white px-6 py-2 rounded-lg hover:bg-morocco-orange-dark transition-colors">
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-orange-400 to-orange-600 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://cdn.builder.io/api/v1/assets/645f89bc7c85487fb781d2dd27aa359b/touriste-dd009d?format=webp&width=800')` }}
        ></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-7xl font-bold mb-6 leading-tight">MAROC</h1>
            <p className="text-xl mb-8 text-white/90">
              Discover the magic of Morocco through our expertly crafted tours. 
              From bustling medinas to serene desert landscapes.
            </p>
            <button className="bg-morocco-orange text-white px-8 py-4 rounded-lg text-lg hover:bg-morocco-orange-dark transition-colors shadow-lg">
              Explore Tours
            </button>
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      <section id="tours" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tourPackages.map((tour, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-orange-200 to-orange-400"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-morocco-brown mb-2">{tour.title}</h3>
                  <p className="text-gray-600 mb-4">{tour.duration}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-morocco-orange">{tour.price}</span>
                    <button className="bg-morocco-orange text-white px-4 py-2 rounded-lg hover:bg-morocco-orange-dark transition-colors">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-orange-200 to-orange-400 rounded-lg"></div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-morocco-brown mb-6">
                We create the trips you love
              </h2>
              <p className="text-gray-600 mb-8">
                With passionate local. Click "Edit Tour" to customize the 
                tour and experience. This Moroccan experience has 
                reviews, so let us know if you have questions!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-morocco-orange rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">1</span>
                  </div>
                  <span className="text-gray-700">Add a Title</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-morocco-orange rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">2</span>
                  </div>
                  <span className="text-gray-700">Add a Title</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-morocco-orange rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">3</span>
                  </div>
                  <span className="text-gray-700">Add a Title</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-morocco-brown mb-6">
                Awesome country
              </h2>
              <p className="text-gray-600 mb-8">
                Amazing country tour for its natural side 
                of culture and local experience and 
                lifestyle that the Sun Do Rift.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-morocco-orange mb-2">400+</div>
                  <div className="text-gray-600">Tours</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-morocco-orange mb-2">12K</div>
                  <div className="text-gray-600">Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-morocco-orange mb-2">2Y</div>
                  <div className="text-gray-600">Experience</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-48 bg-gradient-to-br from-orange-200 to-orange-400 rounded-lg"></div>
              <div className="h-48 bg-gradient-to-br from-green-200 to-green-400 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Tours Section */}
      <section id="destinations" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-morocco-brown mb-4">EXPLORE ALL TOURS</h2>
            <div className="w-24 h-1 bg-morocco-orange mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-64 bg-gradient-to-br from-orange-300 to-orange-500 relative">
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{dest.name}</h3>
                    <p className="text-sm opacity-90">{dest.subtitle}</p>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-600">{dest.spots}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-morocco-orange">{dest.price}</span>
                    <button className="bg-morocco-orange text-white px-4 py-2 rounded-lg hover:bg-morocco-orange-dark transition-colors text-sm">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-morocco-brown text-center mb-12">FAQS</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-morocco-brown mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-morocco-orange text-white px-6 py-3 rounded-lg hover:bg-morocco-orange-dark transition-colors">
              View More
            </button>
          </div>
        </div>
      </section>

      {/* Tailor Made Trip */}
      <section className="py-20 bg-gradient-to-r from-orange-400 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Tailor Made Trip</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Custom experiences that fit your budget and schedule. 
            Create your perfect Morocco adventure.
          </p>
          <button className="bg-white text-morocco-orange px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-morocco-brown text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">MAROC</h3>
              <p className="text-gray-300 mb-4">
                Discover the magic of Morocco with our expert guides and authentic experiences.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-morocco-orange rounded-full"></div>
                <div className="w-8 h-8 bg-morocco-orange rounded-full"></div>
                <div className="w-8 h-8 bg-morocco-orange rounded-full"></div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday: 9AM - 6PM</p>
                <p>Saturday: 10AM - 4PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+212 123 456 789</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@maroctravel.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4" />
                  <span>www.maroctravel.com</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-300 mb-4">
                Subscribe for exclusive deals and travel tips
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-lg text-gray-800"
                />
                <button className="bg-morocco-orange px-4 py-2 rounded-r-lg hover:bg-morocco-orange-dark transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Maroc Travel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
