import { RequestHandler } from "express";
import { z } from "zod";

// Validation schema for booking notification
const BookingNotificationSchema = z.object({
  booking: z.object({
    tourName: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    phone: z.string(),
    checkInDate: z.string(),
    guests: z.number().min(1).max(8),
    specialRequests: z.string().optional(),
    totalPrice: z.number(),
  }),
  adminEmail: z.string().email(),
});

const BookingConfirmationSchema = z.object({
  tourName: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  checkInDate: z.string(),
  guests: z.number().min(1).max(8),
  specialRequests: z.string().optional(),
  totalPrice: z.number(),
});

// Send booking notification to admin
export const handleBookingNotification: RequestHandler = async (req, res) => {
  try {
    const validatedData = BookingNotificationSchema.parse(req.body);
    const { booking, adminEmail } = validatedData;

    // Format email content
    const emailContent = {
      to: adminEmail,
      subject: `New Booking Request - ${booking.tourName}`,
      text: `
New booking request received:

Tour: ${booking.tourName}
Customer: ${booking.firstName} ${booking.lastName}
Email: ${booking.email}
Phone: ${booking.phone}
Check-in Date: ${booking.checkInDate}
Guests: ${booking.guests}
Total Price: €${booking.totalPrice}

Special Requests:
${booking.specialRequests || "None"}

Please contact the customer to confirm the booking.
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa;">
  <div style="background: linear-gradient(135deg, #e67e22, #d35400); padding: 30px; text-align: center; color: white;">
    <h1 style="margin: 0; font-size: 28px;">🏜️ Maroc Travel</h1>
    <p style="margin: 10px 0 0 0; opacity: 0.9;">New Booking Request</p>
  </div>

  <div style="padding: 30px; background: white;">
    <h2 style="color: #e67e22; margin: 0 0 20px 0; border-bottom: 2px solid #e67e22; padding-bottom: 10px;">
      ${booking.tourName} - Booking Request
    </h2>

    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
      <h3 style="color: #333; margin: 0 0 15px 0;">Customer Information</h3>
      <table style="border-collapse: collapse; width: 100%;">
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; background: #e67e22; color: white;">Customer:</td>
          <td style="padding: 12px; border: 1px solid #ddd;">${booking.firstName} ${booking.lastName}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; background: #e67e22; color: white;">Email:</td>
          <td style="padding: 12px; border: 1px solid #ddd;"><a href="mailto:${booking.email}" style="color: #e67e22; text-decoration: none;">${booking.email}</a></td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; background: #e67e22; color: white;">Phone:</td>
          <td style="padding: 12px; border: 1px solid #ddd;"><a href="tel:${booking.phone}" style="color: #e67e22; text-decoration: none;">${booking.phone}</a></td>
        </tr>
      </table>
    </div>

    <div style="background: #fff3cd; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
      <h3 style="color: #333; margin: 0 0 15px 0;">Tour Details</h3>
      <table style="border-collapse: collapse; width: 100%;">
        <tr>
          <td style="padding: 12px; border: 1px solid #ffeaa7; font-weight: bold;">Tour:</td>
          <td style="padding: 12px; border: 1px solid #ffeaa7;">${booking.tourName}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ffeaa7; font-weight: bold;">Date:</td>
          <td style="padding: 12px; border: 1px solid #ffeaa7;">${booking.checkInDate}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ffeaa7; font-weight: bold;">Guests:</td>
          <td style="padding: 12px; border: 1px solid #ffeaa7;">${booking.guests} person(s)</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #ffeaa7; font-weight: bold;">Total Price:</td>
          <td style="padding: 12px; border: 1px solid #ffeaa7; color: #e67e22; font-weight: bold; font-size: 18px;">€${booking.totalPrice}</td>
        </tr>
      </table>
    </div>

    ${
      booking.specialRequests
        ? `
      <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #333; margin: 0 0 15px 0;">📝 Special Requests</h3>
        <p style="margin: 0; padding: 15px; background: white; border-radius: 6px; border-left: 4px solid #28a745;">${booking.specialRequests}</p>
      </div>
    `
        : ""
    }

    <div style="background: #dc3545; color: white; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 20px;">
      <h3 style="margin: 0 0 10px 0;">🚨 ACTION REQUIRED</h3>
      <p style="margin: 0; font-size: 16px;">
        Please contact the customer within 24 hours to confirm availability and provide payment instructions.
      </p>
    </div>

    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; text-align: center;">
      <p style="margin: 0; color: #666;">
        📞 Admin Phone: +212 123 456 789 | 📧 Admin Email: drissi01996@gmail.com
      </p>
    </div>
  </div>

  <div style="background: #333; color: white; padding: 20px; text-align: center;">
    <p style="margin: 0; font-size: 14px;">© 2024 Maroc Travel - Making Morocco Accessible</p>
  </div>
</div>
      `,
    };

    // In a real application, you would use a service like:
    // - Nodemailer with SMTP
    // - SendGrid
    // - Amazon SES
    // - Mailgun

    // For now, we'll simulate sending the email
    console.log("Booking notification email would be sent:", emailContent);

    // Simulate successful email sending
    await new Promise((resolve) => setTimeout(resolve, 1000));

    res.json({
      success: true,
      message: "Booking notification sent successfully",
      bookingId: `BK${Date.now()}`, // Generate a simple booking ID
    });
  } catch (error) {
    console.error("Error sending booking notification:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send booking notification",
    });
  }
};

// Send booking confirmation to customer
export const handleBookingConfirmation: RequestHandler = async (req, res) => {
  try {
    const validatedData = BookingConfirmationSchema.parse(req.body);
    const booking = validatedData;

    const confirmationEmail = {
      to: booking.email,
      subject: `Booking Confirmation - ${booking.tourName} | Maroc Travel`,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9fa;">
  <div style="background: linear-gradient(135deg, #e67e22, #d35400); padding: 30px; text-align: center; color: white;">
    <h1 style="margin: 0; font-size: 32px;">🏜️ Maroc Travel</h1>
    <p style="margin: 10px 0 0 0; font-size: 18px; opacity: 0.9;">Your booking is being processed!</p>
  </div>

  <div style="padding: 30px; background: white;">
    <h2 style="color: #e67e22; margin: 0 0 10px 0;">Hello ${booking.firstName}! 👋</h2>
    <p style="font-size: 16px; color: #666; margin: 0 0 25px 0;">
      Thank you for choosing Maroc Travel for your Moroccan adventure! We're thrilled to help you explore the magic of Morocco.
    </p>

    <div style="background: linear-gradient(135deg, #e67e22, #d35400); color: white; padding: 20px; border-radius: 12px; text-align: center; margin: 25px 0;">
      <h3 style="margin: 0 0 10px 0; font-size: 20px;">✅ Booking Request Received</h3>
      <p style="margin: 0; font-size: 16px; opacity: 0.9;">
        Your order is under treatment and our team will contact you within 24 hours
      </p>
    </div>

    <div style="background: #f8f9fa; padding: 25px; border-radius: 12px; margin: 25px 0; border: 2px solid #e67e22;">
      <h3 style="color: #e67e22; margin: 0 0 20px 0; font-size: 20px;">📋 Your Booking Details</h3>
      <table style="border-collapse: collapse; width: 100%;">
        <tr>
          <td style="padding: 15px; border: 1px solid #ddd; font-weight: bold; background: #e67e22; color: white; width: 30%;">Tour</td>
          <td style="padding: 15px; border: 1px solid #ddd; font-size: 16px;">${booking.tourName}</td>
        </tr>
        <tr>
          <td style="padding: 15px; border: 1px solid #ddd; font-weight: bold; background: #e67e22; color: white;">Date</td>
          <td style="padding: 15px; border: 1px solid #ddd; font-size: 16px;">${booking.checkInDate}</td>
        </tr>
        <tr>
          <td style="padding: 15px; border: 1px solid #ddd; font-weight: bold; background: #e67e22; color: white;">Guests</td>
          <td style="padding: 15px; border: 1px solid #ddd; font-size: 16px;">${booking.guests} person(s)</td>
        </tr>
        <tr>
          <td style="padding: 15px; border: 1px solid #ddd; font-weight: bold; background: #e67e22; color: white;">Total Amount</td>
          <td style="padding: 15px; border: 1px solid #ddd; color: #e67e22; font-weight: bold; font-size: 20px;">€${booking.totalPrice}</td>
        </tr>
      </table>
    </div>

    <div style="background: #e8f5e8; padding: 25px; border-radius: 12px; margin: 25px 0;">
      <h3 style="color: #28a745; margin: 0 0 15px 0; font-size: 18px;">🔄 What Happens Next?</h3>
      <div style="margin: 15px 0;">
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
          <span style="background: #28a745; color: white; width: 25px; height: 25px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-right: 15px; font-weight: bold; font-size: 14px;">1</span>
          <span style="color: #333; font-size: 16px;">Our team will contact you within 24 hours</span>
        </div>
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
          <span style="background: #28a745; color: white; width: 25px; height: 25px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-right: 15px; font-weight: bold; font-size: 14px;">2</span>
          <span style="color: #333; font-size: 16px;">We'll confirm availability and discuss details</span>
        </div>
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
          <span style="background: #28a745; color: white; width: 25px; height: 25px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-right: 15px; font-weight: bold; font-size: 14px;">3</span>
          <span style="color: #333; font-size: 16px;">Receive payment instructions to secure your booking</span>
        </div>
        <div style="display: flex; align-items: center;">
          <span style="background: #28a745; color: white; width: 25px; height: 25px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-right: 15px; font-weight: bold; font-size: 14px;">4</span>
          <span style="color: #333; font-size: 16px;">Enjoy your amazing Moroccan adventure! 🎉</span>
        </div>
      </div>
    </div>

    <div style="background: #fff3cd; padding: 25px; border-radius: 12px; margin: 25px 0; border-left: 5px solid #ffc107;">
      <h3 style="color: #856404; margin: 0 0 15px 0; font-size: 18px;">📞 Need Immediate Assistance?</h3>
      <div style="display: grid; gap: 10px;">
        <div style="display: flex; align-items: center;">
          <span style="margin-right: 10px; font-size: 16px;">📞</span>
          <span style="color: #333; font-size: 16px;"><strong>Phone:</strong> +212 123 456 789</span>
        </div>
        <div style="display: flex; align-items: center;">
          <span style="margin-right: 10px; font-size: 16px;">📧</span>
          <span style="color: #333; font-size: 16px;"><strong>Email:</strong> booking@maroctravel.com</span>
        </div>
        <div style="display: flex; align-items: center;">
          <span style="margin-right: 10px; font-size: 16px;">💬</span>
          <span style="color: #333; font-size: 16px;"><strong>WhatsApp:</strong> +212 601 148 493</span>
        </div>
      </div>
    </div>

    <div style="text-align: center; margin: 30px 0;">
      <p style="font-size: 18px; color: #e67e22; font-weight: bold; margin: 0 0 10px 0;">
        Thank you for choosing Maroc Travel! 🙏
      </p>
      <p style="color: #666; margin: 0; font-size: 16px;">
        We can't wait to show you the wonders of Morocco!
      </p>
    </div>
  </div>

  <div style="background: #333; color: white; padding: 25px; text-align: center;">
    <p style="margin: 0 0 10px 0; font-size: 16px; font-weight: bold;">Maroc Travel Team</p>
    <p style="margin: 0; font-size: 14px; opacity: 0.8;">© 2024 Maroc Travel - Making Morocco Accessible to Everyone</p>
  </div>
</div>
      `,
    };

    console.log("Booking confirmation email would be sent:", confirmationEmail);

    // Simulate successful email sending
    await new Promise((resolve) => setTimeout(resolve, 500));

    res.json({
      success: true,
      message: "Booking confirmation sent successfully",
    });
  } catch (error) {
    console.error("Error sending booking confirmation:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send booking confirmation",
    });
  }
};
