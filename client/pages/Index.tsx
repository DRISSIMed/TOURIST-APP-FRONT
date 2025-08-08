import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Star,
  MapPin,
  Calendar,
  Users,
  Phone,
  Mail,
  Globe,
  Clock,
  ChevronDown,
  CheckCircle,
  Award,
  Shield,
  Heart,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { useLanguage, Language } from "@/hooks/useLanguage";
import WhatsAppButton from "@/components/WhatsAppButton";
import { quickBookingViaWhatsApp } from "@/services/emailService";

export default function Index() {
  const { language, setLanguage, t } = useLanguage();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const tourPackages = [
    {
      id: "city-tour",
      title: t("tours.cityTour"),
      duration: "2h 30min + tours",
      price: "35€",
      image:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d0d66e?w=300&h=200&fit=crop",
      category: "Cultural",
      rating: 4.8,
      reviews: 127,
    },
    {
      id: "atlas-adventure",
      title: t("tours.atlasAdventure"),
      duration: "1 Day + Tours",
      price: "85€",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
      category: "Adventure",
      rating: 4.9,
      reviews: 203,
    },
    {
      id: "beach-cruise",
      title: t("tours.beachCruise"),
      duration: "3h + Tours",
      price: "45€",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop",
      category: "Relaxation",
      rating: 4.7,
      reviews: 89,
    },
    {
      id: "wine-tour",
      title: t("tours.wineTour"),
      duration: "4h + Tours",
      price: "65€",
      image:
        "https://images.unsplash.com/photo-1506453831428-d8f24972c0d4?w=300&h=200&fit=crop",
      category: "Culinary",
      rating: 4.6,
      reviews: 156,
    },
  ];

  const destinations = [
    {
      name: t("dest.casablanca"),
      subtitle: t("dest.casablancaSub"),
      spots: `8 ${t("common.spots")}`,
      services: "4 SERVICES",
      price: `${t("common.only")} €199`,
      image:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d0d66e?w=250&h=300&fit=crop",
    },
    {
      name: t("dest.meknaissa"),
      subtitle: t("dest.meknassaSub"),
      spots: `6 ${t("common.spots")}`,
      services: "5 SERVICES",
      price: `${t("common.only")} €179`,
      image:
        "https://images.unsplash.com/photo-1573160103600-9b02b2b6c048?w=250&h=300&fit=crop",
    },
    {
      name: t("dest.ouarzazate"),
      subtitle: t("dest.ouarzazateSub"),
      spots: `4 ${t("common.spots")}`,
      services: "3 SERVICES",
      price: `${t("common.only")} €249`,
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=250&h=300&fit=crop",
    },
    {
      name: t("dest.agadir"),
      subtitle: t("dest.agadirSub"),
      spots: `5 ${t("common.spots")}`,
      services: "6 SERVICES",
      price: `${t("common.only")} €159`,
      image:
        "https://images.unsplash.com/photo-1558618666-e0c7b5f5f0d6?w=250&h=300&fit=crop",
    },
  ];

  const features = [
    {
      icon: <CheckCircle className="w-8 h-8 text-morocco-orange" />,
      title: "Expert Local Guides",
      description: "Professional guides with deep local knowledge and fluent English speaking",
    },
    {
      icon: <Award className="w-8 h-8 text-morocco-orange" />,
      title: "Premium Experience",
      description: "Carefully curated experiences that showcase the best of Morocco",
    },
    {
      icon: <Shield className="w-8 h-8 text-morocco-orange" />,
      title: "Safe & Reliable",
      description: "Fully licensed and insured with excellent safety record",
    },
    {
      icon: <Heart className="w-8 h-8 text-morocco-orange" />,
      title: "Personalized Service",
      description: "Tailored experiences to match your interests and preferences",
    },
  ];

  const faqs = [
    {
      question: "What's the best time to visit Morocco?",
      answer:
        "Spring (March-May) and autumn (September-November) offer the most comfortable weather for exploring Morocco's diverse landscapes.",
    },
    {
      question: "Are guided tours available in English?",
      answer:
        "Yes, all our professional guides speak fluent English and are knowledgeable about Moroccan history and culture.",
    },
    {
      question: "What should I pack for Morocco?",
      answer:
        "Pack light, comfortable clothing, sunscreen, and a hat. We provide detailed packing lists with each booking confirmation.",
    },
    {
      question: "How far in advance should I book?",
      answer:
        "We recommend booking at least 2-3 weeks in advance, especially during peak season (spring and autumn).",
    },
  ];

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "es", name: "Español", flag: "🇪🇸" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-morocco-orange to-morocco-gold bg-clip-text text-transparent">
            MAROC
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#tours"
              className="text-gray-700 hover:text-morocco-orange transition-all duration-300 font-medium hover:scale-105"
            >
              {t("nav.tours")}
            </a>
            <a
              href="#destinations"
              className="text-gray-700 hover:text-morocco-orange transition-all duration-300 font-medium hover:scale-105"
            >
              {t("nav.destinations")}
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-morocco-orange transition-all duration-300 font-medium hover:scale-105"
            >
              {t("nav.about")}
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-morocco-orange transition-all duration-300 font-medium hover:scale-105"
            >
              {t("nav.contact")}
            </a>
          </div>
          <div className="flex items-center space-x-4">
            {/* Enhanced Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="flex items-center space-x-2 text-gray-700 hover:text-morocco-orange transition-colors bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-lg"
              >
                <span>
                  {languages.find((lang) => lang.code === language)?.flag}
                </span>
                <span className="hidden sm:inline">
                  {languages.find((lang) => lang.code === language)?.name}
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {showLanguageMenu && (
                <div className="absolute right-0 mt-2 py-2 w-40 bg-white rounded-xl shadow-lg border border-gray-200 z-10">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setShowLanguageMenu(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center space-x-2 transition-colors ${
                        language === lang.code
                          ? "bg-morocco-orange text-white"
                          : "text-gray-700"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button className="bg-gradient-to-r from-morocco-orange to-morocco-orange-dark text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium">
              {t("nav.bookNow")}
            </button>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F645f89bc7c85487fb781d2dd27aa359b%2Ff3f9918ea8f14140adc63641aaf31b56?format=webp&width=800')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none tracking-wide">
              {t("hero.title")}
            </h1>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-morocco-orange to-morocco-orange-dark text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center group">
                {t("hero.cta")}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 flex items-center justify-center">
                <MessageCircle className="mr-2 w-5 h-5" />
                Quick Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Maroc Travel?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide exceptional Moroccan experiences with attention to every detail
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Tour Packages Grid */}
      <section id="tours" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Popular Tours</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most loved experiences crafted for unforgettable memories
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tourPackages.map((tour, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="bg-gradient-to-br from-morocco-orange/10 to-morocco-orange/20 p-8 relative">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-morocco-orange text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {tour.category}
                    </span>
                    <span className="bg-white text-morocco-orange px-3 py-1 rounded-full text-sm font-bold border border-morocco-orange">
                      {tour.price}
                    </span>
                  </div>
                  <div className="h-32 flex items-center justify-center">
                    <div className="text-6xl opacity-30">
                      {tour.category === 'Cultural' && '🏛️'}
                      {tour.category === 'Adventure' && '🏔️'}
                      {tour.category === 'Relaxation' && '🏖️'}
                      {tour.category === 'Culinary' && '🍷'}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {tour.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{tour.duration}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {tour.rating} ({tour.reviews} reviews)
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      to={`/booking/${tour.id}`}
                      className="flex-1 bg-gradient-to-r from-morocco-orange to-morocco-orange-dark text-white px-4 py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm font-medium text-center"
                    >
                      {t("nav.bookNow")}
                    </Link>
                    <button
                      onClick={() => quickBookingViaWhatsApp(tour.title)}
                      className="bg-morocco-orange text-white px-4 py-3 rounded-lg hover:bg-morocco-orange-dark transition-all duration-300 text-sm font-medium hover:shadow-lg transform hover:scale-105"
                      title="Quick booking via WhatsApp"
                    >
                      💬
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gradient-to-r from-morocco-orange to-morocco-orange-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              {t("section.awesomeCountry")}
            </h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              {t("section.awesomeCountryDesc")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="text-5xl font-bold mb-2">400+</div>
              <div className="text-orange-100 font-medium">Successful Tours</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="text-5xl font-bold mb-2">12K+</div>
              <div className="text-orange-100 font-medium">Happy Travelers</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
              <div className="text-5xl font-bold mb-2">5+</div>
              <div className="text-orange-100 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Destinations Section */}
      <section id="destinations" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t("section.exploreAllTours")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover Morocco's hidden gems and iconic destinations through our carefully curated experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((dest, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="bg-gradient-to-br from-morocco-sand/30 to-morocco-orange/20 p-8 relative">
                  <div className="h-40 flex flex-col justify-center items-center text-center">
                    <div className="text-5xl mb-4 opacity-60">🏜️</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{dest.name}</h3>
                    <p className="text-sm text-gray-600">{dest.subtitle}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3 text-sm text-gray-600">
                    <span>{dest.spots}</span>
                    <span>{dest.services}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-morocco-orange">
                      {dest.price}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-gradient-to-r from-morocco-orange to-morocco-orange-dark text-white px-4 py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm font-medium">
                      {t("nav.bookNow")}
                    </button>
                    <button
                      onClick={() => quickBookingViaWhatsApp(`${dest.name} Tour`)}
                      className="bg-morocco-orange text-white px-4 py-3 rounded-lg hover:bg-morocco-orange-dark transition-all duration-300 text-sm font-medium hover:shadow-lg transform hover:scale-105"
                      title="Quick booking via WhatsApp"
                    >
                      💬
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {t("faq.title")}
              </h2>
              <p className="text-xl text-gray-600">
                Find answers to commonly asked questions about our tours
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-morocco-orange to-morocco-orange-dark text-white px-8 py-4 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium">
                View More FAQs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-morocco-orange via-morocco-orange-dark to-morocco-brown text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">
            {t("section.tailorMadeTrip")}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t("section.tailorMadeTripDesc")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-morocco-orange px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              {t("nav.contact")}
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30">
              Call Now: +212 123 456 789
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-morocco-orange to-morocco-gold bg-clip-text text-transparent">
                MAROC
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Authentic Moroccan experiences crafted with passion and local expertise. 
                Your gateway to discovering the magic of Morocco.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-morocco-orange to-morocco-orange-dark rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <span className="text-white font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-morocco-orange to-morocco-orange-dark rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <span className="text-white font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-morocco-orange to-morocco-orange-dark rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <span className="text-white font-bold">i</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-morocco-orange">
                {t("footer.businessHours")}
              </h4>
              <div className="space-y-3 text-gray-400">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-morocco-orange">
                {t("footer.contactInfo")}
              </h4>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-center space-x-3 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-morocco-orange" />
                  <span>+212 123 456 789</span>
                </div>
                <div className="flex items-center space-x-3 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-morocco-orange" />
                  <span>hello@maroctravel.com</span>
                </div>
                <div className="flex items-center space-x-3 hover:text-white transition-colors">
                  <MapPin className="w-5 h-5 text-morocco-orange" />
                  <span>Marrakech, Morocco</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-morocco-orange">
                {t("footer.newsletter")}
              </h4>
              <p className="text-gray-400 mb-4">
                Subscribe for travel tips and exclusive offers
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 rounded-l-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-morocco-orange"
                />
                <button className="bg-gradient-to-r from-morocco-orange to-morocco-orange-dark px-6 py-3 rounded-r-full hover:shadow-lg transition-all duration-300">
                  {t("footer.subscribe")}
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 Maroc Travel. All rights reserved. | Privacy Policy |
              Terms of Service
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Contact Button */}
      <WhatsAppButton />
    </div>
  );
}
