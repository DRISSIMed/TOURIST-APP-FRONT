import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "fr" | "es";

interface Translations {
  [key: string]: {
    en: string;
    fr: string;
    es: string;
  };
}

const translations: Translations = {
  // Navigation
  "nav.tours": {
    en: "Tours",
    fr: "Circuits",
    es: "Tours",
  },
  "nav.destinations": {
    en: "Destinations",
    fr: "Destinations",
    es: "Destinos",
  },
  "nav.about": {
    en: "About",
    fr: "À Propos",
    es: "Acerca",
  },
  "nav.contact": {
    en: "Contact",
    fr: "Contact",
    es: "Contacto",
  },
  "nav.bookNow": {
    en: "Book Now",
    fr: "Réserver",
    es: "Reservar",
  },

  // Hero Section
  "hero.title": {
    en: "MAROC",
    fr: "MAROC",
    es: "MARRUECOS",
  },
  "hero.subtitle": {
    en: "Discover the authentic beauty of Morocco through our carefully curated experiences. From ancient medinas to vast desert landscapes.",
    fr: "Découvrez la beauté authentique du Maroc à travers nos expériences soigneusement sélectionnées. Des médinas anciennes aux vastes paysages désertiques.",
    es: "Descubre la auténtica belleza de Marruecos a través de nuestras experiencias cuidadosamente seleccionadas. Desde medinas antiguas hasta vastos paisajes desérticos.",
  },
  "hero.cta": {
    en: "Explore Adventures",
    fr: "Explorer les Aventures",
    es: "Explorar Aventuras",
  },

  // Tours
  "tours.cityTour": {
    en: "CITY TOUR",
    fr: "VISITE DE LA VILLE",
    es: "TOUR DE LA CIUDAD",
  },
  "tours.atlasAdventure": {
    en: "ATLAS ADVENTURE",
    fr: "AVENTURE ATLAS",
    es: "AVENTURA ATLAS",
  },
  "tours.beachCruise": {
    en: "BEACH CRUISE",
    fr: "CROISIÈRE PLAGE",
    es: "CRUCERO PLAYA",
  },
  "tours.wineTour": {
    en: "WINE TOUR",
    fr: "DÉGUSTATION VIN",
    es: "TOUR DE VINOS",
  },

  // Destinations
  "dest.casablanca": {
    en: "CASABLANCA",
    fr: "CASABLANCA",
    es: "CASABLANCA",
  },
  "dest.casablancaSub": {
    en: "Economic Capital",
    fr: "Capitale Économique",
    es: "Capital Económica",
  },
  "dest.meknaissa": {
    en: "MEKNAISSA",
    fr: "MEKNÈS",
    es: "MEKNAISSA",
  },
  "dest.meknassaSub": {
    en: "Imperial City",
    fr: "Ville Impériale",
    es: "Ciudad Imperial",
  },
  "dest.ouarzazate": {
    en: "OUARZAZATE",
    fr: "OUARZAZATE",
    es: "OUARZAZATE",
  },
  "dest.ouarzazateSub": {
    en: "Gateway to Sahara",
    fr: "Porte du Sahara",
    es: "Puerta del Sahara",
  },
  "dest.agadir": {
    en: "AGADIR",
    fr: "AGADIR",
    es: "AGADIR",
  },
  "dest.agadirSub": {
    en: "Beach Paradise",
    fr: "Paradis de Plage",
    es: "Paraíso de Playa",
  },

  // Common
  "common.spots": {
    en: "SPOTS",
    fr: "SITES",
    es: "LUGARES",
  },
  "common.services": {
    en: "SERVICES",
    fr: "SERVICES",
    es: "SERVICIOS",
  },
  "common.only": {
    en: "ONLY",
    fr: "SEULEMENT",
    es: "SOLO",
  },

  // Sections
  "section.createTrips": {
    en: "We create the trips you love",
    fr: "Nous créons les voyages que vous aimez",
    es: "Creamos los viajes que amas",
  },
  "section.createTripsDesc": {
    en: 'With passionate locals. Click "Edit Tour" to customize the tour and experience. This Moroccan experience has reviews, so let us know if you have questions!',
    fr: 'Avec des locaux passionnés. Cliquez sur "Modifier le Circuit" pour personnaliser le tour et l\'expérience. Cette expérience marocaine a des avis, alors faites-nous savoir si vous avez des questions!',
    es: 'Con locales apasionados. Haz clic en "Editar Tour" para personalizar el tour y la experiencia. Esta experiencia marroquí tiene reseñas, ¡así que háznoslo saber si tienes preguntas!',
  },
  "section.awesomeCountry": {
    en: "Awesome country",
    fr: "Pays formidable",
    es: "País increíble",
  },
  "section.awesomeCountryDesc": {
    en: "Amazing country tour for its natural side of culture and local experience and lifestyle that the Sun Do Rift.",
    fr: "Circuit de pays étonnant pour son côté naturel de culture et d'expérience locale et style de vie que le Sun Do Rift.",
    es: "Increíble tour del país por su lado natural de cultura y experiencia local y estilo de vida que el Sun Do Rift.",
  },
  "section.exploreAllTours": {
    en: "EXPLORE ALL TOURS",
    fr: "EXPLORER TOUS LES CIRCUITS",
    es: "EXPLORAR TODOS LOS TOURS",
  },
  "section.tailorMadeTrip": {
    en: "Tailor Made Trip",
    fr: "Voyage Sur Mesure",
    es: "Viaje a Medida",
  },
  "section.tailorMadeTripDesc": {
    en: "Create your own unique Moroccan adventure. Custom experiences tailored to your interests, budget, and schedule.",
    fr: "Créez votre propre aventure marocaine unique. Expériences personnalisées adaptées à vos intérêts, budget et horaire.",
    es: "Crea tu propia aventura marroquí única. Experiencias personalizadas adaptadas a tus intereses, presupuesto y horario.",
  },

  // Booking Page
  "booking.title": {
    en: "Booking Details",
    fr: "Détails de Réservation",
    es: "Detalles de Reserva",
  },
  "booking.tourDetails": {
    en: "Tour Details",
    fr: "Détails du Circuit",
    es: "Detalles del Tour",
  },
  "booking.duration": {
    en: "Duration",
    fr: "Durée",
    es: "Duración",
  },
  "booking.price": {
    en: "Price",
    fr: "Prix",
    es: "Precio",
  },
  "booking.includes": {
    en: "Includes",
    fr: "Inclus",
    es: "Incluye",
  },
  "booking.reservationForm": {
    en: "Reservation Form",
    fr: "Formulaire de Réservation",
    es: "Formulario de Reserva",
  },
  "booking.personalInfo": {
    en: "Personal Information",
    fr: "Informations Personnelles",
    es: "Información Personal",
  },
  "booking.firstName": {
    en: "First Name",
    fr: "Prénom",
    es: "Nombre",
  },
  "booking.lastName": {
    en: "Last Name",
    fr: "Nom de Famille",
    es: "Apellido",
  },
  "booking.email": {
    en: "Email",
    fr: "Email",
    es: "Correo",
  },
  "booking.phone": {
    en: "Phone",
    fr: "Téléphone",
    es: "Teléfono",
  },
  "booking.checkIn": {
    en: "Check-in Date",
    fr: "Date d'Arrivée",
    es: "Fecha de Llegada",
  },
  "booking.guests": {
    en: "Number of Guests",
    fr: "Nombre d'Invités",
    es: "Número de Huéspedes",
  },
  "booking.specialRequests": {
    en: "Special Requests",
    fr: "Demandes Spéciales",
    es: "Solicitudes Especiales",
  },
  "booking.confirmReservation": {
    en: "Confirm Reservation",
    fr: "Confirmer la Réservation",
    es: "Confirmar Reserva",
  },
  "booking.backToTours": {
    en: "Back to Tours",
    fr: "Retour aux Circuits",
    es: "Volver a Tours",
  },

  // FAQ
  "faq.title": {
    en: "FAQS",
    fr: "FAQ",
    es: "PREGUNTAS",
  },

  // Footer
  "footer.businessHours": {
    en: "Business Hours",
    fr: "Heures d'Ouverture",
    es: "Horarios",
  },
  "footer.contactInfo": {
    en: "Contact Info",
    fr: "Coordonnées",
    es: "Información de Contacto",
  },
  "footer.newsletter": {
    en: "Newsletter",
    fr: "Newsletter",
    es: "Boletín",
  },
  "footer.subscribe": {
    en: "Subscribe",
    fr: "S'abonner",
    es: "Suscribirse",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
