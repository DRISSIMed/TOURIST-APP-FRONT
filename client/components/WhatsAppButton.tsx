import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppButton({
  phoneNumber = "+212601148493",
  message = "Hello! I'm interested in your Morocco tours. Can you help me?",
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
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
        title="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Contact us on WhatsApp
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
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
    const message = `Hello! I'm interested in booking the ${tourName} tour. Can you provide more information about availability and pricing?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const sendGeneralMessage = () => {
    const message =
      "Hello! I'm interested in your Morocco tours. Can you help me plan my trip?";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return {
    sendBookingMessage,
    sendGeneralMessage,
  };
}
