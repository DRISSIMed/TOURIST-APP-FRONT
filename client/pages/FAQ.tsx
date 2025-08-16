import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronUp,
  Search,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  Shield,
  CreditCard,
  Plane,
  Users,
  Calendar,
  Camera,
  Utensils,
  Mountain,
  Sun,
  Heart,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import WhatsAppButton from "@/components/WhatsAppButton";
import { quickBookingViaWhatsApp } from "@/services/emailService";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  icon: JSX.Element;
}

const faqData: FAQItem[] = [
  // Planning & Booking
  {
    id: "planning-1",
    category: "Planning & Booking",
    question: "How far in advance should I book my Morocco tour?",
    answer: "We recommend booking at least 2-3 weeks in advance, especially during peak seasons (spring and autumn). For popular tours like Sahara Desert expeditions, booking 4-6 weeks ahead ensures better availability and accommodation options.",
    icon: <Calendar className="w-5 h-5" />,
  },
  {
    id: "planning-2",
    category: "Planning & Booking",
    question: "What's the best time to visit Morocco?",
    answer: "Spring (March-May) and autumn (September-November) offer the most comfortable weather. Summer can be very hot, especially in the desert, while winter is mild but can be cool in the mountains. Each season offers unique experiences and different pricing.",
    icon: <Sun className="w-5 h-5" />,
  },
  {
    id: "planning-3",
    category: "Planning & Booking",
    question: "Can I customize my tour itinerary?",
    answer: "Absolutely! We specialize in creating personalized experiences. Contact us with your preferences, interests, and budget, and we'll design a custom itinerary that matches your travel style perfectly.",
    icon: <Heart className="w-5 h-5" />,
  },
  {
    id: "planning-4",
    category: "Planning & Booking",
    question: "Do you offer group discounts?",
    answer: "Yes, we offer attractive group discounts for parties of 6 or more people. Family groups and corporate bookings also qualify for special rates. Contact us for a personalized quote based on your group size.",
    icon: <Users className="w-5 h-5" />,
  },

  // Travel Requirements
  {
    id: "travel-1",
    category: "Travel Requirements",
    question: "Do I need a visa to visit Morocco?",
    answer: "Citizens of the US, Canada, EU, UK, Australia, and many other countries can enter Morocco visa-free for up to 90 days. Check with your local Moroccan consulate or embassy for specific requirements based on your nationality.",
    icon: <Plane className="w-5 h-5" />,
  },
  {
    id: "travel-2",
    category: "Travel Requirements",
    question: "What should I pack for my Morocco trip?",
    answer: "Pack light, comfortable clothing suitable for walking, a hat, sunglasses, sunscreen, and comfortable walking shoes. For desert tours, bring warm layers for cool nights. We provide detailed packing lists with each booking confirmation.",
    icon: <Mountain className="w-5 h-5" />,
  },
  {
    id: "travel-3",
    category: "Travel Requirements",
    question: "Are there any health requirements or vaccinations needed?",
    answer: "No special vaccinations are required for Morocco. However, we recommend being up to date with routine vaccines. Travel insurance is highly recommended. Consult your healthcare provider for personalized medical advice.",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    id: "travel-4",
    category: "Travel Requirements",
    question: "What currency is used in Morocco and can I use credit cards?",
    answer: "The Moroccan Dirham (MAD) is the local currency. Credit cards are accepted in major hotels and restaurants, but cash is preferred in markets and smaller establishments. ATMs are widely available in cities.",
    icon: <CreditCard className="w-5 h-5" />,
  },

  // Tour Experience
  {
    id: "experience-1",
    category: "Tour Experience",
    question: "Are your tour guides licensed and do they speak English?",
    answer: "Yes, all our guides are professionally licensed and speak fluent English. Many also speak French, Spanish, and other languages. They're knowledgeable about Moroccan history, culture, and local customs.",
    icon: <MessageCircle className="w-5 h-5" />,
  },
  {
    id: "experience-2",
    category: "Tour Experience",
    question: "What type of accommodation is included in the tours?",
    answer: "We offer various accommodation levels from comfortable riads and hotels to luxury desert camps. All accommodations are carefully selected for quality, authenticity, and comfort. Specific details are provided with each tour description.",
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    id: "experience-3",
    category: "Tour Experience",
    question: "What meals are included in the tours?",
    answer: "Most tours include breakfast and dinner. Lunch is sometimes included on full-day excursions. We accommodate dietary restrictions and preferences - just let us know when booking. You'll experience authentic Moroccan cuisine throughout your journey.",
    icon: <Utensils className="w-5 h-5" />,
  },
  {
    id: "experience-4",
    category: "Tour Experience",
    question: "Is photography allowed at all locations?",
    answer: "Photography is generally allowed at most tourist sites. However, some religious sites and museums may have restrictions. Our guides will inform you of any photography rules. We also offer professional photography services for special occasions.",
    icon: <Camera className="w-5 h-5" />,
  },

  // Safety & Support
  {
    id: "safety-1",
    category: "Safety & Support",
    question: "How safe is Morocco for tourists?",
    answer: "Morocco is generally very safe for tourists. We prioritize your safety with experienced drivers, reliable vehicles, and 24/7 support. Our guides are trained in safety protocols and emergency procedures.",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    id: "safety-2",
    category: "Safety & Support",
    question: "What support do you provide during the tour?",
    answer: "We provide 24/7 support throughout your journey. Our team is available via phone, WhatsApp, and email. Each tour includes emergency contact information and our guides carry communication devices for remote areas.",
    icon: <Phone className="w-5 h-5" />,
  },
  {
    id: "safety-3",
    category: "Safety & Support",
    question: "What happens if there's bad weather during my tour?",
    answer: "We monitor weather conditions closely and have contingency plans for all tours. If weather affects your itinerary, we'll provide alternative activities or adjust the schedule to ensure you still have an amazing experience.",
    icon: <Clock className="w-5 h-5" />,
  },
  {
    id: "safety-4",
    category: "Safety & Support",
    question: "What is your cancellation and refund policy?",
    answer: "We offer flexible cancellation policies. Free cancellation up to 48 hours before departure for most tours. Cancellations due to weather or unforeseen circumstances are handled case-by-case with fair refund policies. Full details are provided with booking confirmation.",
    icon: <Mail className="w-5 h-5" />,
  },
];

const categories = [
  "All",
  "Planning & Booking",
  "Travel Requirements", 
  "Tour Experience",
  "Safety & Support",
];

export default function FAQ() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqData.filter(faq => {
    const categoryMatch = selectedCategory === "All" || faq.category === selectedCategory;
    const searchMatch = searchQuery === "" || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Planning & Booking":
        return <Calendar className="w-5 h-5" />;
      case "Travel Requirements":
        return <Plane className="w-5 h-5" />;
      case "Tour Experience":
        return <Camera className="w-5 h-5" />;
      case "Safety & Support":
        return <Shield className="w-5 h-5" />;
      default:
        return <MessageCircle className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-morocco-orange to-morocco-gold bg-clip-text text-transparent"
          >
            MustanoTravel Tours
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-morocco-orange transition-all duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              to="/activities"
              className="text-gray-700 hover:text-morocco-orange transition-all duration-300 font-medium"
            >
              Activities
            </Link>
            <Link
              to="/circuits"
              className="text-gray-700 hover:text-morocco-orange transition-all duration-300 font-medium"
            >
              Circuits
            </Link>
            <Link
              to="/excursions"
              className="text-gray-700 hover:text-morocco-orange transition-all duration-300 font-medium"
            >
              Excursions
            </Link>
            <span className="text-morocco-orange font-medium">FAQ</span>
          </div>
          <button
            onClick={() => quickBookingViaWhatsApp("General Inquiry")}
            className="bg-gradient-to-r from-morocco-orange to-morocco-orange-dark text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium"
          >
            Contact Us
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-morocco-orange via-morocco-orange-dark to-morocco-brown">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Find answers to the most common questions about traveling to Morocco
              and our tour services
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-morocco-orange focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-morocco-orange text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
                  }`}
                >
                  {getCategoryIcon(category)}
                  <span className="font-medium">{category}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <p className="text-lg text-gray-600">
                {filteredFAQs.length} questions found
                {searchQuery && ` for "${searchQuery}"`}
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
              </p>
            </div>

            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-morocco-orange">{faq.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          {faq.question}
                        </h3>
                        <span className="text-sm text-morocco-orange font-medium">
                          {faq.category}
                        </span>
                      </div>
                    </div>
                    {openItems.includes(faq.id) ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {openItems.includes(faq.id) && (
                    <div className="px-6 pb-5">
                      <div className="ml-9 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-16">
                <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  No questions found
                </h3>
                <p className="text-gray-500 mb-6">
                  Try adjusting your search or category filter
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="bg-morocco-orange text-white px-6 py-3 rounded-lg hover:bg-morocco-orange-dark transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-morocco-orange via-morocco-orange-dark to-morocco-brown text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our travel experts are here to help you plan the perfect Moroccan adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => quickBookingViaWhatsApp("FAQ Inquiry")}
              className="bg-white text-morocco-orange px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat with Us
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call: +212 601 148 493
            </button>
            <a
              href="mailto:hello@mustanotravel.com"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}
