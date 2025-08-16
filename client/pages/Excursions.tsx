import { useState } from "react";
import {
  Star,
  Clock,
  Users,
  MapPin,
  Filter,
  Calendar,
  Mountain,
  Waves,
  TreePine,
  Camera,
  ArrowRight,
  MessageCircle,
  Sun,
  Droplets,
  Camera as CameraIcon,
  Shield,
  Car,
  Utensils,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import WhatsAppButton from "@/components/WhatsAppButton";
import { quickBookingViaWhatsApp } from "@/services/emailService";

const excursions = [
  {
    id: "ait-benhaddou",
    title: "Aït Benhaddou UNESCO Kasbah",
    shortTitle: "Aït Benhaddou",
    description:
      "Visit the iconic UNESCO World Heritage fortified village, famous as a filming location for Gladiator and Game of Thrones. Cross the Atlas Mountains for an unforgettable day trip.",
    longDescription:
      "Embark on a spectacular day trip to Aït Benhaddou, one of Morocco's most remarkable UNESCO World Heritage Sites. This historic ksar (fortified village) showcases traditional earthen clay architecture along the ancient caravan route between the Sahara and Marrakech. The journey takes you through the breathtaking High Atlas Mountains via the famous Tizi n'Tichka Pass, offering stunning views of Berber villages and dramatic landscapes. Explore the maze-like alleys of this 11th-century fortress, which has served as a backdrop for numerous films including Gladiator, Lawrence of Arabia, and Game of Thrones. Visit nearby Ouarzazate, known as the 'Gateway to the Sahara,' and discover the Atlas Film Studios where Hollywood magic happens.",
    duration: "Full day (10-12 hours)",
    price: "45€",
    groupSize: "2-17 people",
    category: "Cultural Heritage",
    difficulty: "Easy",
    highlights: [
      "UNESCO World Heritage Site exploration",
      "Traditional Berber architecture and kasbahs",
      "Film studios visit in Ouarzazate",
      "Scenic drive through High Atlas Mountains",
      "Tizi n'Tichka Pass panoramic views",
      "Traditional Moroccan lunch with kasbah views",
      "Photo opportunities at famous film locations",
      "Taourirt Kasbah visit",
    ],
    includes: [
      "Air-conditioned transportation",
      "Professional driver/guide",
      "Hotel pickup and drop-off",
      "Traditional Moroccan lunch",
      "Entrance fees to monuments",
      "Film studio tour",
      "Local guide services",
      "Bottled water",
    ],
    itinerary: [
      "8:00 AM: Departure from Marrakech",
      "11:30 AM: Arrival and exploration of Aït Benhaddou",
      "1:00 PM: Traditional lunch overlooking the kasbah",
      "2:30 PM: Visit Ouarzazate and film studios",
      "4:00 PM: Return journey through Atlas Mountains",
      "7:30 PM: Arrival back in Marrakech",
    ],
    image: "/placeholder-ait-benhaddou.jpg",
    rating: 4.8,
    reviews: 456,
    startLocation: "Marrakech",
    distance: "196 km from Marrakech",
  },
  {
    id: "essaouira-coastal",
    title: "Essaouira Coastal Adventure",
    shortTitle: "Essaouira",
    description:
      "Discover the 'Wind City' on Morocco's Atlantic coast. Explore the UNESCO medina, enjoy fresh seafood, and experience the vibrant arts scene of this charming Portuguese port.",
    longDescription:
      "Experience the refreshing Atlantic breeze and rich maritime heritage of Essaouira, a captivating coastal city that offers a perfect contrast to the imperial cities. This UNESCO World Heritage site, formerly known as Mogador, enchants visitors with its well-preserved 18th-century Portuguese architecture, vibrant medina, and thriving arts scene. Stroll through the historic ramparts of the Skala de la Kasbah, watch skilled craftsmen creating intricate thuya woodwork, and observe traditional boat builders at work in the harbor. The city's consistent trade winds make it a haven for windsurfers and kitesurfers, while its bustling fishing port provides the freshest seafood. Explore colorful souks, art galleries, and enjoy the laid-back atmosphere that has attracted artists and musicians from around the world.",
    duration: "Full day (9 hours)",
    price: "35€",
    groupSize: "2-15 people",
    category: "Coastal Culture",
    difficulty: "Easy",
    highlights: [
      "UNESCO World Heritage medina exploration",
      "Skala de la Kasbah seafront fortifications",
      "Traditional fishing port and boat building",
      "Thuya woodwork artisan workshops",
      "Fresh seafood lunch by the ocean",
      "Portuguese colonial architecture",
      "Local art galleries and souks",
      "Atlantic Ocean coastal walks",
    ],
    includes: [
      "Round-trip transportation",
      "Professional guide",
      "Medina guided tour",
      "Fresh seafood lunch",
      "Free time for shopping",
      "Artisan workshop visits",
      "Hotel transfers",
      "Entrance fees",
    ],
    itinerary: [
      "8:30 AM: Departure from Marrakech",
      "11:00 AM: Arrival and medina exploration",
      "12:30 PM: Visit artisan workshops",
      "1:30 PM: Fresh seafood lunch by the port",
      "3:00 PM: Free time for shopping and beach walk",
      "4:30 PM: Return journey to Marrakech",
      "7:00 PM: Arrival in Marrakech",
    ],
    image: "/placeholder-essaouira.jpg",
    rating: 4.7,
    reviews: 289,
    startLocation: "Marrakech",
    distance: "176 km from Marrakech",
  },
  {
    id: "imlil-valley-hiking",
    title: "Imlil Valley & Atlas Mountains Hiking",
    shortTitle: "Imlil Valley",
    description:
      "Hike through the stunning Imlil Valley at the base of Mount Toubkal. Experience authentic Berber culture, dramatic mountain scenery, and traditional village life.",
    longDescription:
      "Immerse yourself in the breathtaking beauty of the High Atlas Mountains with a hiking excursion to the Imlil Valley, gateway to North Africa's highest peak, Mount Toubkal (4,167m). This authentic Berber valley offers spectacular mountain scenery, traditional villages, and warm hospitality. Trek through terraced fields, walnut groves, and traditional mud-brick villages while enjoying panoramic views of snow-capped peaks. Meet local Berber families, learn about their traditional way of life, and savor authentic mountain cuisine. The moderate hiking trails wind through dramatic landscapes, past traditional irrigation systems, and offer numerous photo opportunities. This excursion provides the perfect introduction to Morocco's mountain culture and stunning natural beauty without requiring technical climbing skills.",
    duration: "Full day (8-9 hours)",
    price: "55€",
    groupSize: "2-12 people",
    category: "Mountain Adventure",
    difficulty: "Moderate",
    highlights: [
      "Hiking in the shadow of Mount Toubkal",
      "Traditional Berber village visits",
      "Spectacular Atlas Mountain panoramas",
      "Authentic Berber lunch in local home",
      "Terraced agriculture and walnut groves",
      "Traditional irrigation system (khettaras)",
      "Local mule trekking experience",
      "Mountain photography opportunities",
    ],
    includes: [
      "4WD mountain transportation",
      "Professional mountain guide",
      "Traditional Berber lunch",
      "Mule support if needed",
      "Village visit and mint tea",
      "Hotel pickup and return",
      "Hiking poles and basic equipment",
      "Local community support",
    ],
    itinerary: [
      "8:00 AM: Departure from Marrakech",
      "10:00 AM: Arrival in Imlil Valley",
      "10:30 AM: Begin mountain hiking",
      "12:30 PM: Berber village visit and lunch",
      "2:30 PM: Continue hiking with mountain views",
      "4:00 PM: Return to Imlil village",
      "6:30 PM: Arrival back in Marrakech",
    ],
    image: "/placeholder-imlil.jpg",
    rating: 4.9,
    reviews: 167,
    startLocation: "Marrakech",
    distance: "67 km from Marrakech",
  },
  {
    id: "ourika-valley",
    title: "Ourika Valley & Setti Fatma Waterfalls",
    shortTitle: "Ourika Valley",
    description:
      "Explore the lush Ourika Valley with its seven waterfalls, traditional Berber villages, and argan oil cooperatives. Perfect escape from Marrakech's heat.",
    longDescription:
      "Escape to the refreshing Ourika Valley, a verdant oasis nestled in the foothills of the High Atlas Mountains, just an hour from Marrakech. This picturesque valley is famous for its seven-tiered Setti Fatma waterfalls, traditional Berber villages, and lush green landscapes that provide a stark contrast to the arid plains around Marrakech. The journey takes you through terraced fields, past traditional adobe villages, and along the rushing Ourika River. Visit authentic Berber homes, learn about traditional mountain life, and witness the ancient art of argan oil production at a women's cooperative. The highlight is a guided hike to the beautiful Setti Fatma waterfalls, where you can enjoy refreshing mountain air and stunning views. This excursion offers the perfect combination of cultural immersion and natural beauty.",
    duration: "Full day (8 hours)",
    price: "40€",
    groupSize: "2-16 people",
    category: "Nature & Culture",
    difficulty: "Easy to Moderate",
    highlights: [
      "Setti Fatma seven-tiered waterfalls",
      "Traditional Berber village visits",
      "Argan oil cooperative and production demo",
      "Mountain river valley scenery",
      "Berber family home visit with mint tea",
      "Traditional souk market (Monday & Thursday)",
      "Terraced agriculture observation",
      "Refreshing mountain climate",
    ],
    includes: [
      "Air-conditioned transport",
      "Professional local guide",
      "Berber family visit with tea",
      "Argan cooperative tour",
      "Traditional lunch by the river",
      "Waterfall hiking guide",
      "Hotel transfers",
      "Entrance fees",
    ],
    itinerary: [
      "9:00 AM: Departure from Marrakech",
      "10:30 AM: Berber village and family visit",
      "11:30 AM: Argan oil cooperative tour",
      "1:00 PM: Lunch by Ourika River",
      "2:30 PM: Hike to Setti Fatma waterfalls",
      "4:30 PM: Return journey to Marrakech",
      "6:00 PM: Arrival in Marrakech",
    ],
    image: "/placeholder-ourika.jpg",
    rating: 4.6,
    reviews: 334,
    startLocation: "Marrakech",
    distance: "60 km from Marrakech",
  },
  {
    id: "ouzoud-waterfalls",
    title: "Ouzoud Waterfalls & Barbary Monkeys",
    shortTitle: "Ouzoud Waterfalls",
    description:
      "Visit Morocco's most spectacular waterfalls cascading 110 meters into rainbow mists. Encounter playful Barbary monkeys and enjoy boat rides at the base.",
    longDescription:
      "Discover the magnificent Ouzoud Waterfalls, Morocco's most spectacular natural wonder, where three-tiered cascades plunge 110 meters into the El-Abid River, creating mesmerizing rainbow effects in the mist. Located in the Middle Atlas Mountains, these falls are home to the endangered Barbary macaque monkeys, the only wild primate species in North Africa. The excursion includes a scenic hike along well-maintained trails that descend to the base of the falls, offering numerous photo opportunities and breathtaking viewpoints. Enjoy a traditional boat ride on the river below the falls, dine at riverside cafés with spectacular views, and observe the playful monkeys in their natural habitat. The area's lush vegetation and cool mountain air provide a refreshing escape from Morocco's heat, making this one of the country's most popular natural attractions.",
    duration: "Full day (10-12 hours)",
    price: "50€",
    groupSize: "2-18 people",
    category: "Natural Wonder",
    difficulty: "Easy to Moderate",
    highlights: [
      "110-meter three-tiered waterfall spectacle",
      "Rainbow formations in waterfall mists",
      "Barbary macaque monkey encounters",
      "Traditional boat ride at waterfall base",
      "Riverside dining with waterfall views",
      "Middle Atlas Mountains scenery",
      "Local Berber village interactions",
      "Professional nature photography opportunities",
    ],
    includes: [
      "Comfortable transportation",
      "Professional driver/guide",
      "Local waterfall guide",
      "Traditional Moroccan lunch",
      "Boat ride at waterfall base",
      "Hotel pickup and drop-off",
      "Entrance fees and parking",
      "Bottled water throughout day",
    ],
    itinerary: [
      "8:00 AM: Departure from Marrakech",
      "10:30 AM: Arrival at Ouzoud village",
      "11:00 AM: Guided hike to waterfall viewpoints",
      "12:30 PM: Boat ride and monkey watching",
      "1:30 PM: Traditional lunch overlooking falls",
      "3:30 PM: Free time and additional exploration",
      "4:30 PM: Return journey to Marrakech",
      "7:30 PM: Arrival in Marrakech",
    ],
    image: "/placeholder-ouzoud.jpg",
    rating: 4.8,
    reviews: 412,
    startLocation: "Marrakech",
    distance: "150 km from Marrakech",
  },
];

const categories = [
  "All",
  "Cultural Heritage",
  "Coastal Culture",
  "Mountain Adventure",
  "Nature & Culture",
  "Natural Wonder",
];
const durations = ["All", "Half day", "Full day"];
const difficulties = ["All", "Easy", "Easy to Moderate", "Moderate"];

export default function Excursions() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDuration, setSelectedDuration] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedExcursion, setSelectedExcursion] = useState(null);

  const filteredExcursions = excursions.filter((excursion) => {
    const categoryMatch =
      selectedCategory === "All" || excursion.category === selectedCategory;
    const durationMatch =
      selectedDuration === "All" ||
      excursion.duration.includes(selectedDuration);
    const difficultyMatch =
      selectedDifficulty === "All" ||
      excursion.difficulty === selectedDifficulty;
    return categoryMatch && durationMatch && difficultyMatch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Cultural Heritage":
        return <Camera className="w-5 h-5" />;
      case "Coastal Culture":
        return <Waves className="w-5 h-5" />;
      case "Mountain Adventure":
        return <Mountain className="w-5 h-5" />;
      case "Nature & Culture":
        return <TreePine className="w-5 h-5" />;
      case "Natural Wonder":
        return <Droplets className="w-5 h-5" />;
      default:
        return <Star className="w-5 h-5" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-600 bg-green-100";
      case "Easy to Moderate":
        return "text-blue-600 bg-blue-100";
      case "Moderate":
        return "text-orange-600 bg-orange-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  if (selectedExcursion) {
    const excursion = excursions.find((e) => e.id === selectedExcursion);
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
              <a
                href="/activities"
                className="text-gray-700 hover:text-morocco-orange transition-all duration-300 font-medium"
              >
                Activities
              </a>
              <a
                href="/circuits"
                className="text-gray-700 hover:text-morocco-orange transition-all duration-300 font-medium"
              >
                Circuits
              </a>
              <a href="#excursions" className="text-morocco-orange font-medium">
                Excursions
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
              onClick={() => setSelectedExcursion(null)}
              className="bg-gradient-to-r from-morocco-orange to-morocco-orange-dark text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium"
            >
              Back to Excursions
            </button>
          </div>
        </nav>

        {/* Excursion Detail */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <button
              onClick={() => setSelectedExcursion(null)}
              className="flex items-center text-morocco-orange hover:text-morocco-orange-dark mb-6 transition-colors"
            >
              ← Back to Excursions
            </button>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-96">
                <img
                  src={excursion?.image}
                  alt={excursion?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h1 className="text-4xl font-bold mb-2">
                    {excursion?.title}
                  </h1>
                  <div className="flex items-center space-x-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold bg-white/20 text-white flex items-center space-x-1`}
                    >
                      {getCategoryIcon(excursion?.category)}
                      <span>{excursion?.category}</span>
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(excursion?.difficulty)}`}
                    >
                      {excursion?.difficulty}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      About This Excursion
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {excursion?.longDescription}
                    </p>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Highlights
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {excursion?.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Star className="w-5 h-5 text-morocco-orange mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      What's Included
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {excursion?.includes.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Daily Itinerary
                    </h3>
                    <ul className="space-y-3">
                      {excursion?.itinerary.map((time, index) => (
                        <li
                          key={index}
                          className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                        >
                          <Clock className="w-5 h-5 text-morocco-orange mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-1">
                    <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                      <div className="text-center mb-6">
                        <div className="text-3xl font-bold text-morocco-orange mb-2">
                          {excursion?.price}
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
                            {excursion?.duration}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Users className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-600">Group Size</span>
                          </div>
                          <span className="font-semibold">
                            {excursion?.groupSize}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-600">Start</span>
                          </div>
                          <span className="font-semibold">
                            {excursion?.startLocation}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Car className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-600">Distance</span>
                          </div>
                          <span className="font-semibold">
                            {excursion?.distance}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Star className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-600">Rating</span>
                          </div>
                          <span className="font-semibold">
                            {excursion?.rating} ({excursion?.reviews} reviews)
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <button className="w-full bg-gradient-to-r from-morocco-orange to-morocco-orange-dark text-white py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold">
                          <Calendar className="w-5 h-5 inline mr-2" />
                          Book This Excursion
                        </button>
                        <button
                          onClick={() =>
                            quickBookingViaWhatsApp(excursion?.title)
                          }
                          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 font-semibold hover:shadow-lg transform hover:scale-105"
                        >
                          <MessageCircle className="w-5 h-5 inline mr-2" />
                          Quick Chat
                        </button>
                        <button className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-all duration-300 font-semibold">
                          <CameraIcon className="w-5 h-5 inline mr-2" />
                          Private Tour
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
            <a
              href="/activities"
              className="text-gray-700 hover:text-morocco-orange transition-all duration-300 font-medium"
            >
              Activities
            </a>
            <a
              href="/circuits"
              className="text-gray-700 hover:text-morocco-orange transition-all duration-300 font-medium"
            >
              Circuits
            </a>
            <a href="#excursions" className="text-morocco-orange font-medium">
              Excursions
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
          <button className="bg-gradient-to-r from-morocco-orange to-morocco-orange-dark text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium">
            Book Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-morocco-orange to-blue-600">
          <div className="absolute inset-0 bg-black/30"></div>
          {/* Nature-inspired patterns */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1) 2px, transparent 2px),
                                  radial-gradient(circle at 70% 70%, rgba(255,255,255,0.08) 1px, transparent 1px)`,
              backgroundSize: "40px 40px, 25px 25px",
              animation: "floatGently 12s ease-in-out infinite",
            }}
          ></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Morocco Excursions
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Discover Morocco's most beautiful destinations on unforgettable
              day trips from Marrakech
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-700">
                Filter Excursions:
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
                <span className="text-sm text-gray-600">Duration:</span>
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-morocco-orange"
                >
                  {durations.map((duration) => (
                    <option key={duration} value={duration}>
                      {duration}
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
              {filteredExcursions.length} excursions found
            </div>
          </div>
        </div>
      </section>

      {/* Excursions Grid */}
      <section id="excursions" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExcursions.map((excursion) => (
              <div
                key={excursion.id}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group cursor-pointer"
                onClick={() => setSelectedExcursion(excursion.id)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={excursion.image}
                    alt={excursion.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 bg-white/90 text-gray-800`}
                    >
                      {getCategoryIcon(excursion.category)}
                      <span>{excursion.category}</span>
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(excursion.difficulty)}`}
                    >
                      {excursion.difficulty}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-morocco-orange transition-colors">
                        {excursion.shortTitle}
                      </h3>
                      <div className="flex items-center text-white/90 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{excursion.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {excursion.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{excursion.groupSize}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{excursion.distance}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">
                        {excursion.rating} ({excursion.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-morocco-orange">
                      {excursion.price}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedExcursion(excursion.id);
                        }}
                        className="bg-gradient-to-r from-morocco-orange to-morocco-orange-dark text-white px-4 py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm font-medium flex items-center"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          quickBookingViaWhatsApp(excursion.title);
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
      <section className="py-20 bg-gradient-to-br from-green-600 via-morocco-orange to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Explore Morocco's Hidden Gems?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Book your favorite day trip and discover the natural beauty and
            cultural richness of Morocco
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-morocco-orange px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              <Utensils className="w-5 h-5 inline mr-2" />
              Custom Excursions
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
