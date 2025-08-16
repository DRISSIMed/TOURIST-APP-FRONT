import { useState } from "react";
import {
  Star,
  Clock,
  Users,
  MapPin,
  Filter,
  ChefHat,
  Mountain,
  Flower2,
  Waves,
  Wind,
  ArrowRight,
  MessageCircle,
  Calendar,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import WhatsAppButton from "@/components/WhatsAppButton";
import { quickBookingViaWhatsApp } from "@/services/emailService";

const activities = [
  {
    id: "moroccan-cooking",
    title: "Moroccan Cooking Class Experience",
    shortTitle: "Cooking Class",
    description:
      "Immerse yourself in Morocco's rich culinary traditions with our authentic hands-on cooking classes. Learn to prepare traditional tagines, fluffy couscous, and aromatic pastries from scratch using time-honored techniques passed down through generations of Moroccan families.",
    longDescription:
      "Embark on a culinary journey through Morocco's gastronomic heritage in this comprehensive cooking experience. Begin with a guided tour of the local souks and markets, where you'll learn to select the finest spices, fresh vegetables, and quality ingredients alongside our expert chef instructor. Return to our traditional riad kitchen to master the art of Moroccan cuisine. Learn to prepare authentic chicken or lamb tagine with preserved lemons and olives, perfectly steamed couscous with seven vegetables, fresh bread baking techniques, and traditional Moroccan sweets like chebakia or ma'amoul. Throughout the experience, discover the cultural significance of each dish, the medicinal properties of Moroccan spices, and the social traditions surrounding Moroccan meals. The class concludes with a communal feast where you'll enjoy the fruits of your labor in traditional Moroccan style, seated on colorful carpets around low tables.",
    duration: "Full day (6-7 hours)",
    price: "75€",
    groupSize: "4-12 people",
    category: "Culinary",
    difficulty: "Beginner",
    highlights: [
      "Guided souk and market tour with spice education",
      "Hands-on preparation of authentic tagine and fluffy couscous",
      "Learn traditional bread baking in clay ovens",
      "Master the art of Moroccan pastry making",
      "Discover the medicinal properties of Moroccan spices",
      "Traditional mint tea ceremony and preparation",
      "Communal dining experience in authentic setting",
      "Comprehensive recipe collection to take home",
      "Cultural insights into Moroccan food traditions",
    ],
    includes: [
      "Expert local chef instructor and cultural guide",
      "Guided market tour with spice education",
      "All premium ingredients and traditional cooking equipment",
      "Use of traditional clay tagine pots and couscoussier",
      "Welcome traditional mint tea and Moroccan sweets",
      "Multi-course feast featuring your prepared dishes",
      "Comprehensive illustrated recipe booklet (English/French)",
      "Traditional Moroccan apron as souvenir",
      "Certificate of completion with chef signature",
      "Transportation from central meeting points",
    ],
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop",
    icon: <ChefHat className="w-6 h-6" />,
    rating: 4.9,
    reviews: 284,
    location: "Marrakech Medina",
  },
  {
    id: "marrakech-gardens",
    title: "Discover the Soul of Marrakech Through Its Enchanted Gardens",
    shortTitle: "Enchanted Gardens",
    description:
      "Explore Marrakech's most beautiful gardens including the famous Majorelle Garden and historic Menara Gardens. Discover botanical wonders and artistic heritage in these peaceful oases.",
    longDescription:
      "Journey through Marrakech's most spectacular gardens, each telling a unique story. Visit the iconic Majorelle Garden with its vibrant cobalt blue structures and diverse plant collection, created by French artist Jacques Majorelle. Explore the historic Menara Gardens dating back to the 12th century, featuring olive groves and a stunning pavilion with Atlas Mountain views. Discover the Berber Museum and Yves Saint Laurent Museum, and learn about the horticultural traditions that have shaped these urban oases.",
    duration: "Half day (4 hours)",
    price: "45€",
    groupSize: "1-15 people",
    category: "Cultural",
    difficulty: "Easy",
    highlights: [
      "Majorelle Garden with its famous blue structures",
      "Historic Menara Gardens and pavilion",
      "Berber Museum visit",
      "Yves Saint Laurent Museum",
      "Photography opportunities in stunning settings",
      "Learn about Moroccan botanical heritage",
    ],
    includes: [
      "Professional guide",
      "Garden entrance fees",
      "Transportation between gardens",
      "Museum entries",
      "Refreshments",
      "Photography assistance",
    ],
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=300&fit=crop",
    icon: <Flower2 className="w-6 h-6" />,
    rating: 4.7,
    reviews: 198,
    location: "Marrakech",
  },
  {
    id: "hot-air-balloon",
    title: "Hot Air Balloon Over Atlas Mountains",
    shortTitle: "Hot Air Balloon",
    description:
      "Experience breathtaking sunrise views from above as you float over the Atlas Mountains and Moroccan landscapes in a hot air balloon adventure.",
    longDescription:
      "Rise with the sun for an unforgettable hot air balloon adventure over Morocco's stunning landscapes. Float peacefully above the Atlas Mountains, Berber villages, and desert plains while enjoying panoramic views that stretch to the horizon. This magical experience includes a traditional Berber breakfast served in a nomad tent after landing, complete with fresh bread, honey, and mint tea. Receive a flight certificate as a keepsake of this once-in-a-lifetime adventure.",
    duration: "3-4 hours (1 hour flight)",
    price: "180€",
    groupSize: "2-16 people",
    category: "Adventure",
    difficulty: "Easy",
    highlights: [
      "Sunrise flight over Atlas Mountains",
      "Panoramic views of Berber villages",
      "Traditional Berber breakfast in nomad tent",
      "Flight certificate as souvenir",
      "Professional pilot guidance",
      "Unforgettable photo opportunities",
    ],
    includes: [
      "Professional pilot and crew",
      "Safety equipment and briefing",
      "1-hour balloon flight",
      "Traditional Berber breakfast",
      "Flight certificate",
      "Hotel transfers",
    ],
    image:
      "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=500&h=300&fit=crop",
    icon: <Waves className="w-6 h-6" />,
    rating: 4.9,
    reviews: 156,
    location: "Atlas Mountains",
  },
  {
    id: "palmeraie-camel-trek",
    title: "Palmeraie Marrakech Camel Trekking",
    shortTitle: "Camel Trekking",
    description:
      "Explore the vast Palmeraie palm oasis on camelback, passing through traditional Berber villages and enjoying the tranquility of this natural desert escape.",
    longDescription:
      "Embark on an authentic camel trekking adventure through the Palmeraie, Marrakech's vast palm oasis spanning 54 square miles with hundreds of thousands of palm trees. Travel ancient caravan routes on camelback, passing through traditional Berber villages and lush palm groves. Experience the peaceful rhythm of desert life while enjoying panoramic views of the Atlas Mountains. The journey includes stops for traditional mint tea in Berber tents and opportunities to wear traditional Saharan clothing for authentic photos.",
    duration: "2-3 hours",
    price: "35€",
    groupSize: "2-20 people",
    category: "Adventure",
    difficulty: "Easy",
    highlights: [
      "Camel ride through 54-square-mile palm oasis",
      "Visit traditional Berber villages",
      "Mint tea break in Berber tent",
      "Traditional Saharan clothing for photos",
      "Atlas Mountain views",
      "Peaceful desert experience",
    ],
    includes: [
      "Experienced camel guide",
      "Gentle, well-trained camels",
      "Traditional Berber clothing",
      "Mint tea ceremony",
      "Hotel transfers",
      "Safety equipment",
    ],
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop",
    icon: <Mountain className="w-6 h-6" />,
    rating: 4.6,
    reviews: 223,
    location: "Palmeraie, Marrakech",
  },
  {
    id: "paragliding-atlas",
    title: "Paragliding in the Atlas Mountains",
    shortTitle: "Paragliding",
    description:
      "Soar above the stunning Atlas Mountains with professional pilots, experiencing the thrill of free flight while enjoying panoramic views of Morocco's diverse landscapes.",
    longDescription:
      "Experience the ultimate adrenaline rush with tandem paragliding over the majestic Atlas Mountains. Soar like a bird with certified professional pilots, enjoying 20-25 minutes of pure flight above breathtaking landscapes including the Kik Plateau, Lalla Takerkoust Lake, and traditional Berber villages. This thrilling adventure requires no previous experience - just bring your sense of adventure. The experience includes comprehensive safety briefing, top-quality equipment, and professional photos and videos to capture your aerial adventure.",
    duration: "3-4 hours (20-25 min flight)",
    price: "120€",
    groupSize: "1-8 people",
    category: "Extreme Sports",
    difficulty: "Moderate",
    highlights: [
      "20-25 minutes of tandem paragliding",
      "Panoramic views of Atlas Mountains",
      "Professional certified pilots",
      "No experience required",
      "Professional photos and videos included",
      "Safety equipment and comprehensive briefing",
    ],
    includes: [
      "Certified professional pilot",
      "Top-quality safety equipment",
      "Comprehensive safety briefing",
      "Photos and videos of your flight",
      "Hotel transfers",
      "Traditional mint tea after landing",
    ],
    image:
      "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=500&h=300&fit=crop",
    icon: <Wind className="w-6 h-6" />,
    rating: 4.8,
    reviews: 89,
    location: "Atlas Mountains",
  },
];

const categories = [
  "All",
  "Culinary",
  "Cultural",
  "Adventure",
  "Extreme Sports",
];
const difficulties = ["All", "Easy", "Beginner", "Moderate"];

export default function Activities() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedActivity, setSelectedActivity] = useState(null);

  const filteredActivities = activities.filter((activity) => {
    const categoryMatch =
      selectedCategory === "All" || activity.category === selectedCategory;
    const difficultyMatch =
      selectedDifficulty === "All" ||
      activity.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Culinary":
        return <ChefHat className="w-5 h-5" />;
      case "Cultural":
        return <Flower2 className="w-5 h-5" />;
      case "Adventure":
        return <Mountain className="w-5 h-5" />;
      case "Extreme Sports":
        return <Wind className="w-5 h-5" />;
      default:
        return <Star className="w-5 h-5" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-600 bg-green-100";
      case "Beginner":
        return "text-blue-600 bg-blue-100";
      case "Moderate":
        return "text-orange-600 bg-orange-100";
      case "Advanced":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  if (selectedActivity) {
    const activity = activities.find((a) => a.id === selectedActivity);
    return (
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-morocco-orange to-morocco-gold bg-clip-text text-transparent">
              MustanoTravel Tours
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="/"
                className="text-gray-700 hover:text-morocco-orange transition-all duration-300 font-medium"
              >
                Home
              </a>
              <a href="#activities" className="text-morocco-orange font-medium">
                Activities
              </a>
              <a
                href="/#destinations"
                className="text-gray-700 hover:text-morocco-orange transition-all duration-300 font-medium"
              >
                Destinations
              </a>
              <a
                href="/#contact"
                className="text-gray-700 hover:text-morocco-orange transition-all duration-300 font-medium"
              >
                Contact
              </a>
              <a
                href="/faq"
                className="text-gray-700 hover:text-morocco-orange transition-all duration-300 font-medium"
              >
                FAQ
              </a>
            </div>
            <button
              onClick={() => setSelectedActivity(null)}
              className="bg-gradient-to-r from-morocco-orange to-morocco-orange-dark text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium"
            >
              Back to Activities
            </button>
          </div>
        </nav>

        {/* Activity Detail */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedActivity(null)}
              className="flex items-center text-morocco-orange hover:text-morocco-orange-dark mb-6 transition-colors"
            >
              ← Back to Activities
            </button>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-96">
                <img
                  src={activity?.image}
                  alt={activity?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h1 className="text-4xl font-bold mb-2">{activity?.title}</h1>
                  <div className="flex items-center space-x-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${getCategoryIcon(activity?.category)} bg-white/20 text-white`}
                    >
                      {activity?.category}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(activity?.difficulty)}`}
                    >
                      {activity?.difficulty}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      About This Experience
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {activity?.longDescription}
                    </p>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Highlights
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {activity?.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Star className="w-5 h-5 text-morocco-orange mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      What's Included
                    </h3>
                    <ul className="space-y-2">
                      {activity?.includes.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-morocco-orange rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-1">
                    <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                      <div className="text-center mb-6">
                        <div className="text-3xl font-bold text-morocco-orange mb-2">
                          {activity?.price}
                        </div>
                        <div className="text-gray-600">per person</div>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Clock className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-600">Duration</span>
                          </div>
                          <span className="font-semibold">
                            {activity?.duration}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Users className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-600">Group Size</span>
                          </div>
                          <span className="font-semibold">
                            {activity?.groupSize}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-600">Location</span>
                          </div>
                          <span className="font-semibold">
                            {activity?.location}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Star className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-600">Rating</span>
                          </div>
                          <span className="font-semibold">
                            {activity?.rating} ({activity?.reviews} reviews)
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <button className="w-full bg-gradient-to-r from-morocco-orange to-morocco-orange-dark text-white py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold">
                          <Calendar className="w-5 h-5 inline mr-2" />
                          Book Now
                        </button>
                        <button
                          onClick={() =>
                            quickBookingViaWhatsApp(activity?.title)
                          }
                          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 font-semibold hover:shadow-lg transform hover:scale-105"
                        >
                          <MessageCircle className="w-5 h-5 inline mr-2" />
                          Quick Chat
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-morocco-orange to-morocco-gold bg-clip-text text-transparent">
            MAROC
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-morocco-orange transition-all duration-300 font-medium"
            >
              Home
            </a>
            <a href="#activities" className="text-morocco-orange font-medium">
              Activities
            </a>
            <a
              href="/#destinations"
              className="text-gray-700 hover:text-morocco-orange transition-all duration-300 font-medium"
            >
              Destinations
            </a>
            <a
              href="/#contact"
              className="text-gray-700 hover:text-morocco-orange transition-all duration-300 font-medium"
            >
              Contact
            </a>
          </div>
          <button className="bg-gradient-to-r from-morocco-orange to-morocco-orange-dark text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium">
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-morocco-orange via-morocco-orange-dark to-morocco-brown">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Moroccan Activities
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Discover authentic experiences that showcase the best of Morocco's
              culture, adventure, and natural beauty
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-700">
                Filter Activities:
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Category:</span>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-morocco-orange"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Difficulty:</span>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-morocco-orange"
                >
                  {difficulties.map((difficulty) => (
                    <option key={difficulty} value={difficulty}>
                      {difficulty}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              {filteredActivities.length} activities found
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section id="activities" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((activity) => (
              <div
                key={activity.id}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group cursor-pointer"
                onClick={() => setSelectedActivity(activity.id)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 bg-white/90 text-gray-800`}
                    >
                      {getCategoryIcon(activity.category)}
                      <span>{activity.category}</span>
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(activity.difficulty)}`}
                    >
                      {activity.difficulty}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-morocco-orange transition-colors">
                    {activity.shortTitle}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {activity.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{activity.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{activity.groupSize}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{activity.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2">
                        {activity.rating} ({activity.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-morocco-orange">
                      {activity.price}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedActivity(activity.id);
                        }}
                        className="bg-gradient-to-r from-morocco-orange to-morocco-orange-dark text-white px-4 py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm font-medium flex items-center"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          quickBookingViaWhatsApp(activity.title);
                        }}
                        className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300 text-sm font-medium hover:shadow-lg transform hover:scale-105"
                        title="Quick booking via WhatsApp"
                      >
                        💬
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-morocco-orange via-morocco-orange-dark to-morocco-brown text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Your Moroccan Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book your favorite activities and create unforgettable memories in
            Morocco
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-morocco-orange px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Contact Us
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30">
              Call Now: +212 123 456 789
            </button>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
}
