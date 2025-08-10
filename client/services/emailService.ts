// Email service using EmailJS (client-side email sending)
// Alternative: You can also use server-side email with Nodemailer

interface BookingData {
  tourName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  checkInDate: string;
  guests: number;
  specialRequests: string;
  totalPrice: number;
}

// Configuration for email service
const EMAIL_CONFIG = {
  adminEmail: "drissi01996@gmail.com",
  adminWhatsApp: "+212601148493",
  companyName: "Maroc Travel",
};

// Send email notification to admin using EmailJS
export async function sendBookingNotificationEmail(
  bookingData: BookingData,
): Promise<boolean> {
  try {
    // EmailJS configuration (you need to set up EmailJS account)
    // This is a placeholder implementation

    const emailTemplate = {
      to_email: EMAIL_CONFIG.adminEmail,
      subject: `New Booking Request - ${bookingData.tourName}`,
      message: `
        New booking request received:
        
        Tour: ${bookingData.tourName}
        Customer: ${bookingData.firstName} ${bookingData.lastName}
        Email: ${bookingData.email}
        Phone: ${bookingData.phone}
        Check-in Date: ${bookingData.checkInDate}
        Guests: ${bookingData.guests}
        Total Price: €${bookingData.totalPrice}
        
        Special Requests:
        ${bookingData.specialRequests || "None"}
        
        Please contact the customer to confirm the booking.
      `,
    };

    // Check if backend is available, fallback to WhatsApp if not
    try {
      const response = await fetch("/api/send-booking-notification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          booking: bookingData,
          adminEmail: EMAIL_CONFIG.adminEmail,
        }),
      });

      if (response.ok) {
        console.log("Booking notification email sent successfully");
        return true;
      } else {
        console.warn("Backend not available, falling back to WhatsApp");
        sendBookingWhatsAppMessage(bookingData);
        return true;
      }
    } catch (fetchError) {
      console.warn("Backend not available, falling back to WhatsApp", fetchError);
      sendBookingWhatsAppMessage(bookingData);
      return true;
    }
  } catch (error) {
    console.error("Error sending booking notification email:", error);
    return false;
  }
}

// Send WhatsApp message to admin
export function sendBookingWhatsAppMessage(bookingData: BookingData): void {
  const message = `🏜️ *New Booking Request - Maroc Travel*

📋 *Tour:* ${bookingData.tourName}
👤 *Customer:* ${bookingData.firstName} ${bookingData.lastName}
📧 *Email:* ${bookingData.email}
📞 *Phone:* ${bookingData.phone}
📅 *Date:* ${bookingData.checkInDate}
👥 *Guests:* ${bookingData.guests}
💰 *Total:* €${bookingData.totalPrice}

${bookingData.specialRequests ? `📝 *Special Requests:*\n${bookingData.specialRequests}` : ""}

Please contact the customer to confirm the booking.`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${EMAIL_CONFIG.adminWhatsApp.replace(/[^0-9]/g, "")}?text=${encodedMessage}`;

  // Open WhatsApp in new tab
  window.open(whatsappUrl, "_blank");
}

// Send booking confirmation email to customer
export async function sendBookingConfirmationEmail(
  bookingData: BookingData,
): Promise<boolean> {
  try {
    const response = await fetch("/api/send-booking-confirmation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    if (response.ok) {
      return true;
    } else {
      console.warn("Backend not available for confirmation email");
      return false;
    }
  } catch (error) {
    console.warn("Backend not available for confirmation email:", error);
    return false;
  }
}

// Alternative: Generate WhatsApp message for specific tour booking
export function generateTourWhatsAppMessage(
  tourName: string,
  customerName?: string,
): string {
  const baseMessage = `Hello! I'm interested in booking the ${tourName} tour.`;

  if (customerName) {
    return `${baseMessage} My name is ${customerName}. Can you provide more information about availability and pricing?`;
  }

  return `${baseMessage} Can you provide more information about availability and pricing?`;
}

// Quick booking via WhatsApp
export function quickBookingViaWhatsApp(
  tourName: string,
  customerName?: string,
): void {
  const message = generateTourWhatsAppMessage(tourName, customerName);
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${EMAIL_CONFIG.adminWhatsApp.replace(/[^0-9]/g, "")}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
}
