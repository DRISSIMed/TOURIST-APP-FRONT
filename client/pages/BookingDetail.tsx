import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Users, MapPin, Star, Check, Calendar, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

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
}

const tourData: { [key: string]: TourData } = {
  'city-tour': {
    id: 'city-tour',
    title: 'City Tour',
    duration: '2h 30min',
    price: '35€',
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d0d66e?w=600&h=400&fit=crop',
    category: 'Cultural',
    description: 'Explore the historical heart of Morocco with our expert local guides',
    includes: [
      'Professional guide',
      'Transportation',
      'Entrance fees',
      'Traditional tea'
    ],
    highlights: [
      'Historic Medina exploration',
      'Traditional markets visit',
      'Local artisan workshops',
      'Authentic cultural experience'
    ],
    fullDescription: 'Immerse yourself in the rich history and vibrant culture of Morocco with our comprehensive city tour. Walk through ancient medinas, discover hidden gems, and experience the authentic local lifestyle that has been preserved for centuries.'
  },
  'atlas-adventure': {
    id: 'atlas-adventure',
    title: 'Atlas Adventure',
    duration: '1 Full Day',
    price: '85€',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    category: 'Adventure',
    description: 'Discover the breathtaking Atlas Mountains with hiking and traditional villages',
    includes: [
      'Mountain guide',
      '4WD transportation',
      'Traditional lunch',
      'Hiking equipment'
    ],
    highlights: [
      'Atlas Mountains hiking',
      'Berber villages visit',
      'Panoramic mountain views',
      'Traditional mountain lunch'
    ],
    fullDescription: 'Experience the majestic Atlas Mountains on this full-day adventure. Hike through scenic trails, visit traditional Berber villages, and enjoy breathtaking panoramic views while learning about the local mountain culture and lifestyle.'
  },
  'beach-cruise': {
    id: 'beach-cruise',
    title: 'Beach Cruise',
    duration: '3 hours',
    price: '45€',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop',
    category: 'Relaxation',
    description: 'Relax and enjoy the beautiful Moroccan coastline on our luxury cruise',
    includes: [
      'Luxury boat cruise',
      'Welcome drink',
      'Fresh seafood lunch',
      'Swimming opportunity'
    ],
    highlights: [
      'Scenic coastal views',
      'Swimming and snorkeling',
      'Fresh seafood experience',
      'Sunset viewing'
    ],
    fullDescription: 'Unwind on our luxurious beach cruise along Morocco\'s stunning coastline. Enjoy crystal-clear waters, fresh seafood, and spectacular sunset views while experiencing the peaceful side of Morocco.'
  },
  'wine-tour': {
    id: 'wine-tour',
    title: 'Wine Tour',
    duration: '4 hours',
    price: '65€',
    image: 'https://images.unsplash.com/photo-1506453831428-d8f24972c0d4?w=600&h=400&fit=crop',
    category: 'Culinary',
    description: 'Taste the finest Moroccan wines and learn about local winemaking traditions',
    includes: [
      'Wine tasting session',
      'Vineyard tour',
      'Cheese and tapas',
      'Transportation'
    ],
    highlights: [
      'Premium wine tasting',
      'Vineyard exploration',
      'Local cuisine pairing',
      'Winemaking process tour'
    ],
    fullDescription: 'Discover Morocco\'s emerging wine culture with visits to local vineyards. Taste premium wines, learn about traditional and modern winemaking techniques, and enjoy perfectly paired local cuisine.'
  }
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
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkInDate: '',
    guests: 1,
    specialRequests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (tourId && tourData[tourId]) {
      setTour(tourData[tourId]);
    } else {
      navigate('/');
    }
  }, [tourId, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) || 1 : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Reservation submitted successfully! We will contact you soon.');
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      checkInDate: '',
      guests: 1,
      specialRequests: ''
    });
  };

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-morocco-orange mx-auto mb-4"></div>
          <p className="text-gray-600">Loading tour details...</p>
        </div>
      </div>
    );
  }

  const totalPrice = parseFloat(tour.price.replace('€', '')) * formData.guests;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-morocco-brown">MAROC</Link>
          <Link 
            to="/"
            className="flex items-center space-x-2 text-gray-600 hover:text-morocco-orange transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t('booking.backToTours')}</span>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tour Details */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={tour.image}
                alt={tour.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-3xl font-bold text-gray-800">{tour.title}</h1>
                  <span className="text-3xl font-bold text-morocco-orange">{tour.price}</span>
                </div>
                
                <p className="text-gray-600 mb-6">{tour.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-morocco-orange" />
                    <div>
                      <p className="text-sm text-gray-500">{t('booking.duration')}</p>
                      <p className="font-semibold">{tour.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-morocco-orange" />
                    <div>
                      <p className="text-sm text-gray-500">Category</p>
                      <p className="font-semibold">{tour.category}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-4">{t('booking.includes')}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {tour.includes.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-6 mt-6">
                  <h3 className="text-xl font-semibold mb-4">Highlights</h3>
                  <div className="space-y-2">
                    {tour.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-6 mt-6">
                  <h3 className="text-xl font-semibold mb-4">Full Description</h3>
                  <p className="text-gray-700 leading-relaxed">{tour.fullDescription}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('booking.reservationForm')}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{t('booking.personalInfo')}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('booking.firstName')} *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-morocco-orange focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('booking.lastName')} *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-morocco-orange focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('booking.email')} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-morocco-orange focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('booking.phone')} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-morocco-orange focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Tour Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('booking.checkIn')} *
                    </label>
                    <input
                      type="date"
                      name="checkInDate"
                      required
                      value={formData.checkInDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-morocco-orange focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('booking.guests')} *
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-morocco-orange focus:border-transparent"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('booking.specialRequests')}
                  </label>
                  <textarea
                    name="specialRequests"
                    rows={3}
                    value={formData.specialRequests}
                    onChange={handleInputChange}
                    placeholder="Any dietary requirements, accessibility needs, or special requests..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-morocco-orange focus:border-transparent resize-none"
                  />
                </div>

                {/* Price Summary */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700">Tour Price ({formData.guests} guests)</span>
                    <span className="font-semibold">€{totalPrice}</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold text-morocco-orange">
                    <span>Total</span>
                    <span>€{totalPrice}</span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-morocco-orange text-white py-3 px-6 rounded-md font-semibold hover:bg-morocco-orange-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    t('booking.confirmReservation')
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Need Help?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-morocco-orange" />
                  <span className="text-gray-700">+212 123 456 789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-morocco-orange" />
                  <span className="text-gray-700">booking@maroctravel.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
