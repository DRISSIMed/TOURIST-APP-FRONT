import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Users,
  MapPin,
  Star,
  Check,
  Calendar,
  Phone,
  Mail,
  Shield,
  Award,
  Heart,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  sendBookingNotificationEmail,
  sendBookingWhatsAppMessage,
  sendBookingConfirmationEmail,
} from "@/services/emailService";

interface TourData {
  id: string;
  title: string;
  duration: string;
  price: string;
  image: string;
  category: string;
  description: string;
  includes: string[];
  highlights: string[];
  fullDescription: string;
  rating: number;
  reviews: number;
}

const tourData: { [key: string]: TourData } = {
  "city-tour": {
    id: "city-tour",
    title: "City Tour",
    duration: "2h 30min",
    price: "35€",
    image:
      "https://images.unsplash.com/photo-1539650116574-75c0c6d0d66e?w=600&h=400&fit=crop",
    category: "Cultural",
    description:
      "Explore the historical heart of Morocco with our expert local guides",
    includes: [
      "Professional guide",
      "Transportation",
      "Entrance fees",
      "Traditional tea",
    ],
    highlights: [
      "Historic Medina exploration",
      "Traditional markets visit",
      "Local artisan workshops",
      "Authentic cultural experience",
    ],
    fullDescription:
      "Immerse yourself in the rich history and vibrant culture of Morocco with our comprehensive city tour. Walk through ancient medinas, discover hidden gems, and experience the authentic local lifestyle that has been preserved for centuries.",
    rating: 4.8,
    reviews: 127,
  },
  "atlas-adventure": {
    id: "atlas-adventure",
    title: "Atlas Adventure",
    duration: "1 Full Day",
    price: "85€",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    category: "Adventure",
    description:
      "Discover the breathtaking Atlas Mountains with hiking and traditional villages",
    includes: [
      "Mountain guide",
      "4WD transportation",
      "Traditional lunch",
      "Hiking equipment",
    ],
    highlights: [
      "Atlas Mountains hiking",
      "Berber villages visit",
      "Panoramic mountain views",
      "Traditional mountain lunch",
    ],
    fullDescription:
      "Experience the majestic Atlas Mountains on this full-day adventure. Hike through scenic trails, visit traditional Berber villages, and enjoy breathtaking panoramic views while learning about the local mountain culture and lifestyle.",
    rating: 4.9,
    reviews: 203,
  },
  "beach-cruise": {
    id: "beach-cruise",
    title: "Beach Cruise",
    duration: "3 hours",
    price: "45€",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
    category: "Relaxation",
    description:
      "Relax and enjoy the beautiful Moroccan coastline on our luxury cruise",
    includes: [
      "Luxury boat cruise",
      "Welcome drink",
      "Fresh seafood lunch",
      "Swimming opportunity",
    ],
    highlights: [
      "Scenic coastal views",
      "Swimming and snorkeling",
      "Fresh seafood experience",
      "Sunset viewing",
    ],
    fullDescription:
      "Unwind on our luxurious beach cruise along Morocco's stunning coastline. Enjoy crystal-clear waters, fresh seafood, and spectacular sunset views while experiencing the peaceful side of Morocco.",
    rating: 4.7,
    reviews: 89,
  },
  "wine-tour": {
    id: "wine-tour",
    title: "Wine Tour",
    duration: "4 hours",
    price: "65€",
    image:
      "https://images.unsplash.com/photo-1506453831428-d8f24972c0d4?w=600&h=400&fit=crop",
    category: "Culinary",
    description:
      "Taste the finest Moroccan wines and learn about local winemaking traditions",
    includes: [
      "Wine tasting session",
      "Vineyard tour",
      "Cheese and tapas",
      "Transportation",
    ],
    highlights: [
      "Premium wine tasting",
      "Vineyard exploration",
      "Local cuisine pairing",
      "Winemaking process tour",
    ],
    fullDescription:
      "Discover Morocco's emerging wine culture with visits to local vineyards. Taste premium wines, learn about traditional and modern winemaking techniques, and enjoy perfectly paired local cuisine.",
    rating: 4.6,
    reviews: 156,
  },
};

interface ReservationForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  checkInDate: string;
  guests: number;
  specialRequests: string;
}

export default function BookingDetail() {
  const { tourId } = useParams<{ tourId: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [tour, setTour] = useState<TourData | null>(null);
  const [formData, setFormData] = useState<ReservationForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    checkInDate: "",
    guests: 1,
    specialRequests: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    if (tourId && tourData[tourId]) {
      setTour(tourData[tourId]);
    } else {
      navigate("/");
    }
  }, [tourId, navigate]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "guests" ? parseInt(value) || 1 : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const bookingData = {
        tourName: tour!.title,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        checkInDate: formData.checkInDate,
        guests: formData.guests,
        specialRequests: formData.specialRequests,
        totalPrice: totalPrice,
      };

      // Send notification to admin via email
      const emailSent = await sendBookingNotificationEmail(bookingData);

      // Send confirmation email to customer
      const confirmationSent = await sendBookingConfirmationEmail(bookingData);

      if (emailSent) {
        // Also send WhatsApp message to admin
        sendBookingWhatsAppMessage(bookingData);

        setShowSuccessMessage(true);
        
        // Reset form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          checkInDate: "",
          guests: 1,
          specialRequests: "",
        });
      } else {
        // If email fails, still send WhatsApp message
        sendBookingWhatsAppMessage(bookingData);
        alert(
          "Reservation submitted! We will contact you soon via WhatsApp or phone. " +
            "Please check your email for confirmation.",
        );
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert(
        "There was an issue submitting your reservation. " +
          "Please try again or contact us directly via WhatsApp.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-morocco-orange border-t-transparent mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading tour details...</p>
        </div>
      </div>
    );
  }

  const totalPrice = parseFloat(tour.price.replace("€", "")) * formData.guests;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Enhanced Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-morocco-orange to-morocco-gold bg-clip-text text-transparent">
            MAROC
          </Link>
          <Link
            to="/"
            className="flex items-center space-x-2 text-gray-600 hover:text-morocco-orange transition-all duration-300 bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-full"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t("booking.backToTours")}</span>
          </Link>
        </div>
      </nav>

      {/* Success Message Modal */}
      {showSuccessMessage && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Booking Received!</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Thank you for your reservation! We've sent you a confirmation email and our team will contact you within 24 hours to confirm your booking details.
            </p>
            <button
              onClick={() => setShowSuccessMessage(false)}
              className="bg-gradient-to-r from-morocco-orange to-morocco-orange-dark text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
          {/* Tour Details - Now takes more space */}
          <div className="xl:col-span-3 space-y-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold">
                    {tour.category}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h1 className="text-4xl font-bold mb-2">{tour.title}</h1>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-lg">
                      {tour.rating} ({tour.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl">
                    <Clock className="w-6 h-6 text-morocco-orange" />
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Duration</p>
                      <p className="font-semibold text-gray-800">{tour.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl">
                    <MapPin className="w-6 h-6 text-morocco-orange" />
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Category</p>
                      <p className="font-semibold text-gray-800">{tour.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 bg-morocco-orange/10 p-4 rounded-xl">
                    <span className="w-6 h-6 bg-morocco-orange rounded-full flex items-center justify-center text-white font-bold text-sm">€</span>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">Price</p>
                      <p className="font-bold text-morocco-orange text-xl">{tour.price}</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-8">{tour.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <Check className="w-6 h-6 text-green-500 mr-2" />
                      What's Included
                    </h3>
                    <div className="space-y-3">
                      {tour.includes.map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <Star className="w-6 h-6 text-orange-500 mr-2" />
                      Tour Highlights
                    </h3>
                    <div className="space-y-3">
                      {tour.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Star className="w-4 h-4 text-orange-500 flex-shrink-0" />
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Full Description
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {tour.fullDescription}
                  </p>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-center space-x-3 text-center md:text-left">
                    <Shield className="w-8 h-8 text-morocco-orange flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Safe & Secure</p>
                      <p className="text-sm text-gray-600">Licensed operator</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-center md:text-left">
                    <Award className="w-8 h-8 text-morocco-orange flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Award Winning</p>
                      <p className="text-sm text-gray-600">Top rated tours</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-center md:text-left">
                    <Heart className="w-8 h-8 text-morocco-orange flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Loved by Guests</p>
                      <p className="text-sm text-gray-600">{tour.reviews}+ reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Reservation Form */}
          <div className="xl:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Book Your Adventure
                </h2>
                <p className="text-gray-600">
                  Reserve your spot for an unforgettable experience
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-morocco-orange focus:border-transparent transition-all duration-300"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-morocco-orange focus:border-transparent transition-all duration-300"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Contact Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-morocco-orange focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-morocco-orange focus:border-transparent transition-all duration-300"
                        placeholder="+212 123 456 789"
                      />
                    </div>
                  </div>
                </div>

                {/* Tour Details */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Tour Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="checkInDate"
                        required
                        value={formData.checkInDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-morocco-orange focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Guests *
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-morocco-orange focus:border-transparent transition-all duration-300"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requests or Notes
                  </label>
                  <textarea
                    name="specialRequests"
                    rows={4}
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    placeholder="Any dietary requirements, accessibility needs, or special requests..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-morocco-orange focus:border-transparent resize-none transition-all duration-300"
                  />
                </div>

                {/* Price Summary */}
                <div className="bg-gradient-to-r from-morocco-orange/10 to-morocco-orange/5 p-6 rounded-xl border border-morocco-orange/20">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Booking Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Tour: {tour.title}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">
                        Price per person
                      </span>
                      <span className="font-semibold">{tour.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">
                        Guests: {formData.guests}
                      </span>
                      <span className="font-semibold">×{formData.guests}</span>
                    </div>
                    <div className="border-t border-morocco-orange/20 pt-3">
                      <div className="flex justify-between items-center text-xl font-bold text-morocco-orange">
                        <span>Total Amount</span>
                        <span>€{totalPrice}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-morocco-orange to-morocco-orange-dark text-white py-4 px-6 rounded-xl text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      <span>Processing Your Booking...</span>
                    </div>
                  ) : (
                    <>
                      Confirm Booking - €{totalPrice}
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center leading-relaxed">
                  By clicking "Confirm Booking", you agree to our terms and conditions. 
                  Your booking is not confirmed until we contact you within 24 hours.
                </p>
              </form>
            </div>

            {/* Contact Info Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <MessageCircle className="w-5 h-5 text-morocco-orange mr-2" />
                Need Immediate Help?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Phone className="w-5 h-5 text-morocco-orange" />
                  <div>
                    <p className="font-medium text-gray-800">Call Us</p>
                    <p className="text-sm text-gray-600">+212 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Mail className="w-5 h-5 text-morocco-orange" />
                  <div>
                    <p className="font-medium text-gray-800">Email Us</p>
                    <p className="text-sm text-gray-600">booking@maroctravel.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Contact Button */}
      <WhatsAppButton />
    </div>
  );
}
