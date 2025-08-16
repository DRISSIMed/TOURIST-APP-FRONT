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
  Building2,
  Camera,
  ArrowRight,
  MessageCircle,
  Sun,
  Moon,
  Shield,
  Car
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import WhatsAppButton from "@/components/WhatsAppButton";
import { quickBookingViaWhatsApp } from "@/services/emailService";

const circuits = [
  {
    id: "4-days-marrakech-sahara",
    title: "4 Days Marrakech to Sahara Desert",
    shortTitle: "Marrakech Sahara 4D",
    description: "Experience the magic of the Sahara Desert on this 4-day journey from Marrakech. Cross the Atlas Mountains, visit UNESCO World Heritage sites, and spend a night under the stars in the desert.",
    longDescription: "Embark on an unforgettable 4-day adventure from Marrakech to the golden dunes of the Sahara Desert. Journey through the High Atlas Mountains via the famous Tizi n'Tichka Pass, offering breathtaking panoramic views. Visit the UNESCO World Heritage Site of Aït Benhaddou, a fortified village that has served as a backdrop for famous films like Gladiator and Lawrence of Arabia. Explore Ouarzazate, known as the 'Hollywood of Morocco,' and its renowned film studios. Experience the dramatic landscapes of the Dades Valley and Todra Gorge before reaching Merzouga. Enjoy a magical camel trek into the Erg Chebbi dunes and spend an unforgettable night in a luxury desert camp under a blanket of stars.",
    duration: "4 days / 3 nights",
    price: "285€",
    groupSize: "2-16 people",
    category: "Desert Adventure",
    difficulty: "Moderate",
    highlights: [
      "Cross the spectacular Tizi n'Tichka Pass in the Atlas Mountains",
      "Visit UNESCO World Heritage site Aït Benhaddou",
      "Explore Ouarzazate and Atlas Film Studios",
      "Experience the dramatic Dades Valley and Todra Gorge",
      "Camel trekking in Erg Chebbi dunes",
      "Overnight in luxury desert camp with traditional dinner",
      "Sunrise over the Sahara Desert",
      "Visit to traditional Berber villages"
    ],
    includes: [
      "Professional driver/guide",
      "Air-conditioned vehicle",
      "3 nights accommodation (hotels + desert camp)",
      "Breakfast and dinner",
      "Camel trekking experience",
      "Traditional Berber music evening",
      "Desert camp with private tents",
      "All entrance fees"
    ],
    itinerary: [
      "Day 1: Marrakech → Atlas Mountains → Aït Benhaddou → Skoura",
      "Day 2: Skoura → Dades Valley → Todra Gorge → Merzouga",
      "Day 3: Merzouga → Desert Experience → Overnight in Camp",
      "Day 4: Sahara Sunrise → Ouarzazate → Marrakech"
    ],
    image: "/placeholder-desert-1.jpg",
    rating: 4.8,
    reviews: 324,
    startLocation: "Marrakech",
    endLocation: "Marrakech"
  },
  {
    id: "5-days-imperial-sahara",
    title: "5 Days Imperial Cities & Sahara Desert",
    shortTitle: "Imperial & Sahara 5D",
    description: "Discover Morocco's imperial heritage combined with desert adventure. Visit Fez, Meknes, and experience the magical Sahara Desert with camel trekking and overnight camping.",
    longDescription: "This comprehensive 5-day tour combines the rich cultural heritage of Morocco's imperial cities with the raw beauty of the Sahara Desert. Begin in the ancient city of Fez, Morocco's spiritual and cultural capital, exploring its UNESCO-listed medina and the world's oldest university, Al-Qarawiyyin. Journey through the Middle Atlas Mountains, passing through Ifrane (Little Switzerland) and the cedar forests of Azrou. Experience the magic of the Sahara with camel trekking and overnight camping in traditional Berber tents. Continue to Meknes, the 'Versailles of Morocco,' with its impressive imperial architecture and historical monuments. This tour offers the perfect balance of cultural immersion and desert adventure.",
    duration: "5 days / 4 nights",
    price: "425€",
    groupSize: "2-12 people",
    category: "Cultural & Desert",
    difficulty: "Moderate",
    highlights: [
      "Explore Fez medina and Al-Qarawiyyin University",
      "Journey through Middle Atlas Mountains",
      "Visit Ifrane and cedar forests of Azrou",
      "Camel trekking in Erg Chebbi dunes",
      "Night in traditional Berber desert camp",
      "Sunrise over Sahara Desert",
      "Discover Meknes imperial city",
      "Visit Moulay Ismail Mausoleum"
    ],
    includes: [
      "Professional guide",
      "Comfortable transport",
      "4 nights accommodation",
      "Daily breakfast and dinners",
      "Desert camp experience",
      "Camel trek",
      "Local guides in imperial cities",
      "All monument entrances"
    ],
    itinerary: [
      "Day 1: Arrival in Fez → City exploration",
      "Day 2: Fez → Ifrane → Azrou → Merzouga",
      "Day 3: Merzouga → Desert camp → Camel trek",
      "Day 4: Sahara → Rissani → Meknes",
      "Day 5: Meknes → Casablanca departure"
    ],
    image: "/placeholder-imperial-1.jpg",
    rating: 4.7,
    reviews: 198,
    startLocation: "Fez",
    endLocation: "Casablanca"
  },
  {
    id: "5-days-imperial",
    title: "5 Days Imperial Cities Discovery",
    shortTitle: "Imperial Cities 5D",
    description: "Immerse yourself in Morocco's royal heritage with visits to all four imperial cities: Casablanca, Rabat, Meknes, and Fez. Discover palaces, mosques, and ancient medinas.",
    longDescription: "Embark on a royal journey through Morocco's four magnificent imperial cities, each with its unique character and historical significance. Start in modern Casablanca with the impressive Hassan II Mosque, one of the largest mosques in the world. Continue to Rabat, the current capital, featuring the Hassan Tower and the beautiful Kasbah of the Udayas. Explore Meknes, known for its monumental gates and the legacy of Sultan Moulay Ismail. Conclude in Fez, the oldest imperial city and spiritual heart of Morocco, with its labyrinthine medina and ancient university. This cultural odyssey offers deep insights into Morocco's royal heritage, Islamic architecture, and traditional craftsmanship.",
    duration: "5 days / 4 nights",
    price: "385€",
    groupSize: "2-15 people",
    category: "Cultural Heritage",
    difficulty: "Easy",
    highlights: [
      "Hassan II Mosque in Casablanca",
      "Royal Palace and Hassan Tower in Rabat",
      "Kasbah of the Udayas with ocean views",
      "Meknes imperial city and Bab Mansour gate",
      "Moulay Ismail Mausoleum",
      "Fez medina UNESCO World Heritage site",
      "Al-Qarawiyyin University and library",
      "Traditional tanneries and artisan workshops"
    ],
    includes: [
      "Expert cultural guide",
      "Comfortable transportation",
      "4 nights in traditional riads",
      "Daily breakfast",
      "City guided tours",
      "Entrance fees to monuments",
      "Local artisan workshops visits",
      "Cultural evening in Fez"
    ],
    itinerary: [
      "Day 1: Casablanca → Hassan II Mosque → Rabat",
      "Day 2: Rabat exploration → Travel to Meknes",
      "Day 3: Meknes → Volubilis ruins → Fez",
      "Day 4: Full day Fez medina exploration",
      "Day 5: Fez → Departure"
    ],
    image: "/placeholder-imperial-2.jpg",
    rating: 4.6,
    reviews: 156,
    startLocation: "Casablanca",
    endLocation: "Fez"
  },
  {
    id: "7-days-desert-sea",
    title: "7 Days Desert to Sea Breezes",
    shortTitle: "Desert to Sea 7D",
    description: "Experience the contrast between Sahara's golden dunes and Atlantic's refreshing breeze. Journey from desert adventures to coastal relaxation in Essaouira.",
    longDescription: "This unique 7-day journey showcases Morocco's incredible diversity, from the vast expanses of the Sahara Desert to the refreshing Atlantic coastline. Begin with the desert experience in Merzouga, riding camels across golden dunes and spending nights under star-filled skies. Travel through the stunning landscapes of the Anti-Atlas Mountains, visiting traditional Berber villages and argan oil cooperatives. Discover the coastal charm of Essaouira, a UNESCO World Heritage site known for its Portuguese architecture, vibrant arts scene, and fresh seafood. Experience the contrast between the silence of the desert and the sound of Atlantic waves, making this tour a perfect balance of adventure and relaxation.",
    duration: "7 days / 6 nights",
    price: "565€",
    groupSize: "2-14 people",
    category: "Desert & Coast",
    difficulty: "Moderate",
    highlights: [
      "Sahara Desert experience with camel trekking",
      "Traditional Berber camp under the stars",
      "Anti-Atlas Mountains landscapes",
      "Argan oil cooperative visits",
      "Essaouira UNESCO World Heritage medina",
      "Atlantic Ocean coastal relaxation",
      "Fresh seafood and coastal cuisine",
      "Traditional Portuguese architecture"
    ],
    includes: [
      "Professional driver/guide",
      "All transportation",
      "6 nights accommodation",
      "Desert camp experience",
      "Camel trekking",
      "Breakfast daily",
      "Traditional dinners",
      "Argan oil cooperative tour"
    ],
    itinerary: [
      "Day 1: Marrakech → Ouarzazate → Merzouga",
      "Day 2: Merzouga → Desert camp → Camel trek",
      "Day 3: Sahara → Agadir via Anti-Atlas",
      "Day 4: Agadir → Taroudant → Essaouira",
      "Day 5: Essaouira exploration and relaxation",
      "Day 6: Essaouira → Marrakech via coast",
      "Day 7: Marrakech → Departure"
    ],
    image: "/placeholder-coast-1.jpg",
    rating: 4.9,
    reviews: 89,
    startLocation: "Marrakech",
    endLocation: "Marrakech"
  },
  {
    id: "7-days-imperial-desert",
    title: "7 Days Imperial Desert Grand Tour",
    shortTitle: "Grand Tour 7D",
    description: "The ultimate Morocco experience combining all imperial cities with Sahara Desert adventure. From Casablanca's modernity to ancient Fez and magical desert nights.",
    longDescription: "Embark on the ultimate Moroccan adventure that combines the grandeur of imperial cities with the mystique of the Sahara Desert. This comprehensive 7-day tour takes you through all four imperial cities – Casablanca, Rabat, Meknes, and Fez – each showcasing different eras of Moroccan history and architecture. Journey from the modern cosmopolitan atmosphere of Casablanca to the ancient spiritual heart of Fez. Experience the raw beauty of the Sahara with camel trekking and overnight camping. Visit the blue city of Chefchaouen nestled in the Rif Mountains, and explore the ancient Roman ruins of Volubilis. This grand tour offers the most complete Morocco experience in one journey.",
    duration: "7 days / 6 nights",
    price: "685€",
    groupSize: "2-12 people",
    category: "Complete Morocco",
    difficulty: "Moderate",
    highlights: [
      "All four imperial cities in one tour",
      "Hassan II Mosque and Casablanca",
      "Rabat's royal heritage and Hassan Tower",
      "Chefchaouen blue city exploration",
      "Ancient Roman ruins of Volubilis",
      "Fez medina and Al-Qarawiyyin University",
      "Sahara Desert camel trekking",
      "Berber camp under desert stars"
    ],
    includes: [
      "Expert guide throughout",
      "Luxury transportation",
      "6 nights premium accommodation",
      "All meals in desert",
      "Daily breakfast",
      "Desert camp experience",
      "Camel trekking",
      "All entrance fees and guides"
    ],
    itinerary: [
      "Day 1: Casablanca → Rabat → Fez",
      "Day 2: Fez medina exploration",
      "Day 3: Fez → Meknes → Volubilis → Chefchaouen",
      "Day 4: Chefchaouen → Merzouga Desert",
      "Day 5: Desert experience → Camel trek",
      "Day 6: Merzouga → Aït Benhaddou → Marrakech",
      "Day 7: Marrakech → Departure"
    ],
    image: "/placeholder-grand-tour.jpg",
    rating: 4.8,
    reviews: 267,
    startLocation: "Casablanca",
    endLocation: "Marrakech"
  },
  {
    id: "8-days-desert-taroudant",
    title: "8 Days Desert, Taroudant & Essaouira",
    shortTitle: "Southern Morocco 8D",
    description: "Explore southern Morocco's hidden gems from Sahara dunes to Berber villages, historic Taroudant, and coastal Essaouira. The most comprehensive southern adventure.",
    longDescription: "Discover the authentic soul of southern Morocco on this extensive 8-day journey that takes you far from the typical tourist routes. Begin in the vibrant city of Agadir, then venture into the heart of the Souss Valley to explore Taroudant, often called 'Little Marrakech' for its impressive ramparts and traditional souks. Journey through the Draa Valley, one of Morocco's most beautiful oases, to reach the magnificent Erg Chigaga dunes – larger and more remote than the famous Erg Chebbi. Experience authentic Berber hospitality in traditional villages, visit saffron cooperatives in Taliouine, and conclude your adventure in the coastal gem of Essaouira. This tour offers the most authentic and comprehensive exploration of Morocco's diverse southern regions.",
    duration: "8 days / 7 nights",
    price: "745€",
    groupSize: "2-10 people",
    category: "Authentic Morocco",
    difficulty: "Moderate to Challenging",
    highlights: [
      "Taroudant traditional souks and ramparts",
      "Taliouine saffron cooperatives",
      "Erg Chigaga desert dunes experience",
      "Draa Valley oasis landscapes",
      "Authentic Berber village visits",
      "Traditional desert camping",
      "Anti-Atlas mountain scenery",
      "Essaouira coastal relaxation"
    ],
    includes: [
      "Professional local guide",
      "4WD desert transportation",
      "7 nights varied accommodation",
      "Desert camp with full board",
      "All breakfasts",
      "Traditional dinners",
      "Camel trekking experience",
      "Saffron cooperative visit"
    ],
    itinerary: [
      "Day 1: Agadir → Taroudant exploration",
      "Day 2: Taroudant → Taliouine → Ouarzazate",
      "Day 3: Ouarzazate → Zagora → M'hamid → Erg Chigaga",
      "Day 4: Erg Chigaga → Desert experience",
      "Day 5: Desert → Foum Zguid → Taroudant",
      "Day 6: Taroudant → Agadir → Essaouira",
      "Day 7: Essaouira exploration and relaxation",
      "Day 8: Essaouira → Marrakech → Departure"
    ],
    image: "/placeholder-southern.jpg",
    rating: 4.7,
    reviews: 134,
    startLocation: "Agadir",
    endLocation: "Marrakech"
  }
];

const categories = ["All", "Desert Adventure", "Cultural & Desert", "Cultural Heritage", "Desert & Coast", "Complete Morocco", "Authentic Morocco"];
const durations = ["All", "4 days", "5 days", "7 days", "8 days"];
const difficulties = ["All", "Easy", "Moderate", "Moderate to Challenging"];

export default function Circuits() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDuration, setSelectedDuration] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedCircuit, setSelectedCircuit] = useState(null);

  const filteredCircuits = circuits.filter(circuit => {
    const categoryMatch = selectedCategory === "All" || circuit.category === selectedCategory;
    const durationMatch = selectedDuration === "All" || circuit.duration.includes(selectedDuration);
    const difficultyMatch = selectedDifficulty === "All" || circuit.difficulty === selectedDifficulty;
    return categoryMatch && durationMatch && difficultyMatch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Desert Adventure": return <Mountain className="w-5 h-5" />;
      case "Cultural & Desert": return <Building2 className="w-5 h-5" />;
      case "Cultural Heritage": return <Building2 className="w-5 h-5" />;
      case "Desert & Coast": return <Waves className="w-5 h-5" />;
      case "Complete Morocco": return <Camera className="w-5 h-5" />;
      case "Authentic Morocco": return <Sun className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "text-green-600 bg-green-100";
      case "Moderate": return "text-orange-600 bg-orange-100";
      case "Moderate to Challenging": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  if (selectedCircuit) {
    const circuit = circuits.find(c => c.id === selectedCircuit);
    return (
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-morocco-orange to-morocco-gold bg-clip-text text-transparent">
              MAROC
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-morocco-orange transition-all duration-300 font-medium">
                Home
              </a>
              <a href="/activities" className="text-gray-700 hover:text-morocco-orange transition-all duration-300 font-medium">
                Activities
              </a>
              <a href="#circuits" className="text-morocco-orange font-medium">
                Circuits
              </a>
              <a href="/#contact" className="text-gray-700 hover:text-morocco-orange transition-all duration-300 font-medium">
                Contact
              </a>
            </div>
            <button 
              onClick={() => setSelectedCircuit(null)}
              className="bg-gradient-to-r from-morocco-orange to-morocco-orange-dark text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium"
            >
              Back to Circuits
            </button>
          </div>
        </nav>

        {/* Circuit Detail */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <button 
              onClick={() => setSelectedCircuit(null)}
              className="flex items-center text-morocco-orange hover:text-morocco-orange-dark mb-6 transition-colors"
            >
              ← Back to Circuits
            </button>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-96">
                <img 
                  src={circuit?.image} 
                  alt={circuit?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h1 className="text-4xl font-bold mb-2">{circuit?.title}</h1>
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-white/20 text-white flex items-center space-x-1`}>
                      {getCategoryIcon(circuit?.category)}
                      <span>{circuit?.category}</span>
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(circuit?.difficulty)}`}>
                      {circuit?.difficulty}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Circuit</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">{circuit?.longDescription}</p>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Tour Highlights</h3>
                    <ul className="space-y-2 mb-6">
                      {circuit?.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Star className="w-5 h-5 text-morocco-orange mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">What's Included</h3>
                    <ul className="space-y-2 mb-6">
                      {circuit?.includes.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">Day-by-Day Itinerary</h3>
                    <ul className="space-y-3">
                      {circuit?.itinerary.map((day, index) => (
                        <li key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-8 h-8 bg-morocco-orange text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {index + 1}
                          </div>
                          <span className="text-gray-700">{day}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-1">
                    <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                      <div className="text-center mb-6">
                        <div className="text-3xl font-bold text-morocco-orange mb-2">{circuit?.price}</div>
                        <div className="text-gray-600">per person</div>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Clock className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-600">Duration</span>
                          </div>
                          <span className="font-semibold">{circuit?.duration}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Users className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-600">Group Size</span>
                          </div>
                          <span className="font-semibold">{circuit?.groupSize}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-600">Start</span>
                          </div>
                          <span className="font-semibold">{circuit?.startLocation}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-600">End</span>
                          </div>
                          <span className="font-semibold">{circuit?.endLocation}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Star className="w-5 h-5 text-gray-500" />
                            <span className="text-gray-600">Rating</span>
                          </div>
                          <span className="font-semibold">{circuit?.rating} ({circuit?.reviews} reviews)</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <button className="w-full bg-gradient-to-r from-morocco-orange to-morocco-orange-dark text-white py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold">
                          <Calendar className="w-5 h-5 inline mr-2" />
                          Book This Circuit
                        </button>
                        <button 
                          onClick={() => quickBookingViaWhatsApp(circuit?.title)}
                          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 font-semibold hover:shadow-lg transform hover:scale-105"
                        >
                          <MessageCircle className="w-5 h-5 inline mr-2" />
                          Quick Chat
                        </button>
                        <button className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-all duration-300 font-semibold">
                          <Car className="w-5 h-5 inline mr-2" />
                          Customize Tour
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
            <a href="/" className="text-gray-700 hover:text-morocco-orange transition-all duration-300 font-medium">
              Home
            </a>
            <a href="/activities" className="text-gray-700 hover:text-morocco-orange transition-all duration-300 font-medium">
              Activities
            </a>
            <a href="#circuits" className="text-morocco-orange font-medium">
              Circuits
            </a>
            <a href="/#contact" className="text-gray-700 hover:text-morocco-orange transition-all duration-300 font-medium">
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
        <div className="absolute inset-0 bg-gradient-to-br from-morocco-brown via-morocco-orange-dark to-morocco-orange">
          <div className="absolute inset-0 bg-black/30"></div>
          {/* Animated desert dunes pattern */}
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px),
                                  radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                 backgroundSize: '50px 50px, 30px 30px',
                 animation: 'floatGently 15s ease-in-out infinite'
               }}>
          </div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Morocco Circuits
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Discover Morocco through our carefully crafted multi-day journeys, from imperial cities to Sahara adventures
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
              <span className="font-semibold text-gray-700">Filter Circuits:</span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Category:</span>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-morocco-orange"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
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
                  {durations.map(duration => (
                    <option key={duration} value={duration}>{duration}</option>
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
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>{difficulty}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              {filteredCircuits.length} circuits found
            </div>
          </div>
        </div>
      </section>

      {/* Circuits Grid */}
      <section id="circuits" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCircuits.map((circuit) => (
              <div
                key={circuit.id}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group cursor-pointer"
                onClick={() => setSelectedCircuit(circuit.id)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={circuit.image} 
                    alt={circuit.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 bg-white/90 text-gray-800`}>
                      {getCategoryIcon(circuit.category)}
                      <span>{circuit.category}</span>
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(circuit.difficulty)}`}>
                      {circuit.difficulty}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-morocco-orange transition-colors">
                        {circuit.shortTitle}
                      </h3>
                      <div className="flex items-center text-white/90 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{circuit.duration}</span>
                        <span className="mx-2">•</span>
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{circuit.startLocation}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {circuit.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{circuit.groupSize}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
                      <span>{circuit.rating} ({circuit.reviews} reviews)</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-morocco-orange">
                      {circuit.price}
                    </span>
                    <div className="flex gap-2">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCircuit(circuit.id);
                        }}
                        className="bg-gradient-to-r from-morocco-orange to-morocco-orange-dark text-white px-4 py-2 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm font-medium flex items-center"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          quickBookingViaWhatsApp(circuit.title);
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
      <section className="py-20 bg-gradient-to-br from-morocco-brown via-morocco-orange-dark to-morocco-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Your Morocco Circuit Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Choose your perfect circuit and embark on an unforgettable journey through Morocco's diverse landscapes and rich culture
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-morocco-orange px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Plan Custom Circuit
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
