import { MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppButton({
  phoneNumber = "+212601148493",
  message = "Hello! I'm interested in your Morocco tours. Can you help me plan my trip? 🏜️",
}: WhatsAppButtonProps) {
  const { t } = useLanguage();

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-gradient-to-r from-morocco-orange to-morocco-orange-dark hover:from-morocco-orange-dark hover:to-morocco-brown text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 group relative overflow-hidden"
        title="Contact us on WhatsApp"
      >
        {/* Animated background pulse */}
        <div className="absolute inset-0 bg-white opacity-20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
        
        {/* WhatsApp icon */}
        <MessageCircle className="w-7 h-7 relative z-10" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-lg">
          <div className="flex items-center space-x-2">
            <span className="text-morocco-orange">●</span>
            <span>Chat with us on WhatsApp</span>
          </div>
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>

        {/* Notification badge */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </button>

      {/* Secondary contact button */}
      <button
        onClick={() => window.open(`tel:${phoneNumber}`, "_self")}
        className="bg-gradient-to-r from-morocco-orange to-morocco-orange-dark hover:from-morocco-orange-dark hover:to-morocco-brown text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group mt-3 block"
        title="Call us directly"
      >
        <Phone className="w-5 h-5" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-xl text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-lg">
          <div className="flex items-center space-x-2">
            <span className="text-morocco-orange">📞</span>
            <span>Call us now</span>
          </div>
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
        </div>
      </button>
    </div>
  );
}

// WhatsApp Business Button with more features
export function WhatsAppBusinessButton({
  phoneNumber = "+212601148493",
}: {
  phoneNumber?: string;
}) {
  const { t } = useLanguage();

  const sendBookingMessage = (tourName: string) => {
    const message = `🏜️ Hello! I'm interested in booking the *${tourName}* tour. 

Can you please provide me with:
• Available dates
• Current pricing
• What's included
• Any special requirements

I'm excited to explore Morocco with your team! 🇲🇦`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const sendGeneralMessage = () => {
    const message = `🏜️ Hello Maroc Travel!

I'm interested in exploring Morocco and would love to learn more about your tours.

Could you help me with:
• Available tour packages
• Best time to visit
• Group discounts
• Custom itineraries

Looking forward to an amazing Moroccan adventure! 🇲🇦✨`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const sendEmergencyMessage = () => {
    const message = `🚨 URGENT - Customer Support Needed

I need immediate assistance with my booking or travel arrangements.

Please contact me as soon as possible.

Thank you!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return {
    sendBookingMessage,
    sendGeneralMessage,
    sendEmergencyMessage,
  };
}
